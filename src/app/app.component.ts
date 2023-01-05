import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardsComponent } from './cards/cards.component';
import { OpponentVideosComponent } from './opponent-videos/opponent-videos.component';
import { ResetDialogComponent } from './reset-dialog/reset-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public cardsComponent: CardsComponent,
    public opponentVideos: OpponentVideosComponent,
    public dialog: MatDialog
  ) {}
  opponentSelect: boolean = false;
  title = 'black-jack';
  playerCards: any[] = [];
  computerCards: any[] = [];
  public playerPoints: number = 0;
  public computerPoints: number = 0;
  public blackJack: boolean = false;
  public hitMeAvailable: boolean = false;
  public busted: boolean = false;
  public playerWins: boolean = false;
  public computerWins: boolean = false;
  public hideInitialCard: boolean = true;
  public draw: boolean = false;
  public playerStayed: boolean = false;
  public doubleDownActivated: boolean = false;
  public playerWinCount: number = 0;
  public videoTime: boolean = false;
  public opponent: number = 0;
  public playerRoundPoints: number = 0;
  public playerAceCount: number = 0;
  public computerAceCount: number = 0;
  public dealingToPlayer: boolean = false;
  public allOpponentVideos = this.opponentVideos.videosArray;
  public roundsToVideo: number = 5;
  public videoIndex: number = 1;

  // Tallies of total wins and blackjacks for player and computer
  public totalPlayerBlackJacks: number = 0;
  public totalComputerBlackJacks: number = 0;

  public currentVideo: string | undefined;
  public debug!: boolean | false;

  public opponentImages = [
    '../assets/opponents/opponent1.png',
    '../assets/opponents/opponent2.png',
    '../assets/opponents/opponent3.png',
    '../assets/opponents/opponent4.png',
    '../assets/opponents/opponent5.png',
    '../assets/opponents/opponent6.png',
    '../assets/opponents/opponent7.png',
    '../assets/opponents/opponent8.png',
    '../assets/opponents/opponent9.png',
    '../assets/opponents/opponent10.png',
    '../assets/opponents/opponent11.png',
    '../assets/opponents/opponent12.png',
    '../assets/opponents/opponent13.png',
    '../assets/opponents/opponent14.png',
    '../assets/opponents/opponent15.png',
    '../assets/opponents/opponent16.png',
  ];

  ngOnInit() {
    this.cardsComponent.createDeck();
    this.dealingToPlayer = true;
    this.dealCards(this.playerCards);
    this.dealingToPlayer = false;
    this.dealCards(this.computerCards);
    this.videoTime = true;
  }

  public async dealCards(hand: any[]) {
    let points: number = 0;
    while (hand.length < 2) {
      // Get first card from shuffled deck
      let dealtCard = this.cardsComponent.deckCards[0];

      // Add dealt card to player's hand
      // label: 'Asp',

      // const test = this.cardsComponent.deckCards.find((x) => x.label === 'Asp');
      // const test2 = this.cardsComponent.deckCards.find(
      //   (x) => x.label === 'Ksp'
      // );

      // // ***TODO: Remove after debugging***
      // this.debug = true;
      // if (this.debug && this.playerCards.length === 0) {
      //   dealtCard = test;
      // }
      // if (this.debug && this.playerCards.length === 1) {
      //   dealtCard = test2;
      // }
      hand.push(dealtCard);

      // Remove dealt card from deck
      this.removeCardsFromDeck();

      // Add dealt card value to player's points
      points = points + dealtCard.value;
    }

    this.checkForPlayerBlackjack(points);

    if (this.dealingToPlayer && !this.blackJack) {
      this.playerPoints = this.playerPoints + points;
    } else if (!this.dealingToPlayer) {
      this.computerPoints = this.computerPoints + points;
    }

    if (this.dealingToPlayer && !this.blackJack) {
      this.checkForAces(this.playerPoints, this.playerCards);
    } else if (!this.dealingToPlayer) {
      this.checkForAces(this.computerPoints, this.computerCards);
    }
  }

  public checkForPlayerBlackjack(points: number) {
    if (points === 21 && this.dealingToPlayer) {
      this.blackJack = true;
      this.playerPoints = this.playerPoints + points;
      this.totalPlayerBlackJacks++;
      this.playerStays();
    }
  }

  public hitMe() {
    this.dealingToPlayer = true;
    const dealtCard = this.cardsComponent.deckCards[0];
    this.removeCardsFromDeck();

    this.playerPoints = this.playerPoints + dealtCard.value;

    this.playerCards.push(dealtCard);

    this.checkForAces(this.playerPoints, this.playerCards);

    if (this.playerPoints === 21) {
      this.blackJack = true;
      this.totalPlayerBlackJacks++;
      this.playerStays();
    }

    if (this.playerPoints > 21) {
      this.busted = true;
      this.playerStays();
    }
    this.dealingToPlayer = false;
  }

  public checkForAces(points: number, hand: any[]) {
    while (points > 21) {
      const ace = hand.find((card) => {
        if (card.value === 11) {
          return card;
        }
        return undefined;
      });
      if (ace) {
        ace.value = 1;
        points = points - 10;
        if (this.dealingToPlayer) {
          this.playerPoints = points;
        } else {
          this.computerPoints = points;
        }
      } else {
        break;
      }
    }
  }

  public playerStays() {
    this.playerStayed = true;
    this.hideInitialCard = false;
    while (this.computerPoints <= 16 && !this.busted) {
      const receivedCard = this.cardsComponent.deckCards[0];
      this.computerCards.push(receivedCard);
      this.removeCardsFromDeck();

      this.checkForAces(this.computerPoints, this.computerCards);
      this.computerPoints = receivedCard.value + this.computerPoints;
    }
    this.computeWinner(this.computerPoints, this.playerPoints);
    return (this.playerStayed = true);
  }

  public computeWinner(computerScore: number, playerScore: number): number {
    if (computerScore < 22 && playerScore < 22) {
      if (computerScore > playerScore) {
        this.computerWins = true;

        if (computerScore === 21 && !this.blackJack) {
          this.totalComputerBlackJacks++;
        }

        // Remove a point if the player doubled down and lost the hand - GAMBLING!
        if (this.doubleDownActivated && this.playerRoundPoints > 0) {
          this.playerRoundPoints = this.playerRoundPoints - 1;
        }
      }
      if (computerScore < playerScore) {
        this.playerWins = true;
        this.playerRoundPoints++;

        if (this.blackJack && this.playerWins) {
          this.playerRoundPoints++;
        }

        if (this.doubleDownActivated && this.playerWins) {
          this.playerRoundPoints++;
        }

        if (this.playerRoundPoints >= 5) {
          this.playerRoundPoints = 0;
          this.playerWinCount = this.playerWinCount + 5;
        }

        this.displayVideo();
      }
      if (computerScore === playerScore) {
        this.draw = true;
      }
    } else {
      if (playerScore < 22 && computerScore >= 22) {
        this.playerWins = true;

        this.playerRoundPoints++;

        if (this.blackJack && this.playerWins) {
          this.playerRoundPoints++;
        }

        if (this.doubleDownActivated && this.playerWins) {
          this.playerRoundPoints++;
        }

        if (this.playerRoundPoints >= 5) {
          this.playerRoundPoints = 0;
          this.playerWinCount = this.playerWinCount + 5;
        }

        this.displayVideo();
      }
      if (playerScore >= 22 && computerScore < 22) {
        this.computerWins = true;
        // Remove a point if the player doubled down and lost the hand - GAMBLING!
        if (this.doubleDownActivated && this.playerRoundPoints > 0) {
          this.playerRoundPoints = this.playerRoundPoints - 1;
        }
      }
      if (
        playerScore >= 22 &&
        computerScore >= 22 &&
        playerScore === computerScore
      ) {
        this.draw = true;
      }
    }
    return 0;
  }

  public doubleDown() {
    this.dealingToPlayer = true;
    this.doubleDownActivated = true;
    const receivedCard = this.cardsComponent.deckCards[0];
    this.playerCards.push(receivedCard);
    this.removeCardsFromDeck();
    this.playerPoints = this.playerPoints + receivedCard.value;
    this.checkForAces(this.playerPoints, this.playerCards);
    if (this.playerPoints === 21) {
      this.blackJack = true;
      this.totalPlayerBlackJacks++;
    }
    this.dealingToPlayer = false;
    this.playerStays();
  }

  public removeCardsFromDeck() {
    return this.cardsComponent.deckCards.splice(0, 1);
  }

  public nextHand() {
    this.playerCards = [];
    this.computerCards = [];
    this.playerPoints = 0;
    this.computerPoints = 0;
    this.draw = false;
    this.computerWins = false;
    this.playerWins = false;
    this.hideInitialCard = true;
    this.busted = false;
    this.blackJack = false;
    this.dealingToPlayer = true;
    this.playerStayed = false;
    this.playerAceCount = 0;
    this.computerAceCount = 0;
    this.doubleDownActivated = false;
    this.dealCards(this.playerCards);
    this.dealingToPlayer = false;
    this.dealCards(this.computerCards);

    if (this.cardsComponent.deckCards.length < 7) {
      this.cardsComponent.deckCards = [];
      this.cardsComponent.createDeck();
    }
  }

  public selectOpponentVideos(opponent: number) {
    return this.opponentVideos.videosArray[opponent - 1];
  }

  public displayVideo() {
    const opponentVideos: any = this.selectOpponentVideos(this.opponent);

    if (this.playerWinCount === this.roundsToVideo) {
      this.roundsToVideo = this.roundsToVideo + 5;
      this.videoTime = true;
      this.currentVideo = opponentVideos[this.videoIndex];
      this.videoIndex = this.videoIndex + 1;

      // if (!opponentVideos[this.videoIndex]) {
      //   const openDialog = () => {
      //     this.dialog.open(ResetDialogComponent);
      //   };
      //   document
      //     .getElementById('video')
      //     ?.addEventListener('ended', openDialog, false);
      // }
      // *** For debugging dialog box after a single video change
      this.debug = true
      if (this.debug) {
        const openDialog = () => {
          this.dialog.open(ResetDialogComponent);
        };
        document
          .getElementById('video')
          ?.addEventListener('ended', openDialog, false);
      }
    }
  }

  opponentSelected(opponent: number) {
    this.opponentSelect = true;
    this.videoTime = true;
    this.currentVideo = this.opponentVideos.videosArray[opponent - 1][0];
  }
}
