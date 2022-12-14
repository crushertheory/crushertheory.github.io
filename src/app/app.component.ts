import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { OpponentVideosComponent } from './opponent-videos/opponent-videos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public cardsComponent: CardsComponent,
    public opponentVideos: OpponentVideosComponent
  ) {}
  opponentSelect: boolean = false;
  title = 'black-jack';
  // deckCards: any[] = [];
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
  playerCredits: number = 100;
  computerCredits: number = 100;
  public bettingPool: number = 0;
  public doubleDownActivated: boolean = false;
  public standardBet: number = 20;
  public playerWinCount: number = 0;
  public videoTime: boolean = false;
  public opponent: number = 0;
  public playerRoundPoints: number = 0;
  public playerAceCount: number = 0;
  public computerAceCount: number = 0;
  public dealingToPlayer: boolean = false

  public currentVideo: string | undefined;
  public debug!: boolean | false;

  // public deck = this.cardsComponent.deckCards

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
  ];

  ngOnInit() {
    this.cardsComponent.createDeck();
    this.dealingToPlayer = true
    this.dealCards(this.playerCards);
    this.dealingToPlayer = false
    this.dealCards(this.computerCards);
    this.playerCredits = this.playerCredits - this.standardBet;
    this.computerCredits = this.computerCredits - this.standardBet;
    this.bettingPool = this.bettingPool + this.standardBet + this.standardBet;
    this.videoTime = true;
  }

  public async dealCards(hand: any[]) {
    let points: number = 0
    while (hand.length < 2) {
      // Get first card from shuffled deck
      const dealtCard = this.cardsComponent.deckCards[0];

      // Add dealt card to player's hand

      // ***TODO: Remove after debugging***
      // this.debug = true
      // if (this.debug && this.dealingToPlayer && hand.length === 0) {
      //   dealtCard.value = 11
      // }
      hand.push(dealtCard);

      // Remove dealt card from deck
      this.removeCardsFromDeck();

      // Add dealt card value to player's points
      points = points + dealtCard.value;

      if (this.dealingToPlayer) {
        this.checkForAces(this.playerPoints, this.playerCards)
      } else {
        this.checkForAces(this.computerPoints, this.computerCards)
      }
    }

    this.checkForPlayerBlackjack(points)

    if (this.dealingToPlayer && !this.blackJack) {
      this.playerPoints = this.playerPoints + points;
    } else {
      this.computerPoints = this.computerPoints + points
    }
  }

  public checkForPlayerBlackjack(points: number) {
    if (points === 21 && this.dealingToPlayer) {
      this.blackJack = true;
      this.playerPoints = this.playerPoints + points;
      this.playerStays()
      return
    }
  }

  public hitMe() {
    this.dealingToPlayer = true
    const dealtCard = this.cardsComponent.deckCards[0];
    this.removeCardsFromDeck();

    this.playerPoints = this.playerPoints + dealtCard.value;

    this.playerCards.push(dealtCard);

    this.checkForAces(this.playerPoints, this.playerCards)

    if (this.playerPoints === 21) {
      this.blackJack = true;
      this.playerStays();
    }

    if (this.playerPoints > 21) {
      this.busted = true;
      this.playerStays();
    }
    this.dealingToPlayer = false
  }

  public checkForAces(points: number, hand: any[]) {
    while (points > 21) {
      const ace = hand.find((card) => {
        if (card.value === 11) {
          return card
        }
        return undefined
      });
      if (ace) {
        ace.value = 1;
        points = points - 10;
        if (this.dealingToPlayer) {
          this.playerPoints = points
        } else {
          this.computerPoints = points
        }
      } else {
        break
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

      this.checkForAces(this.computerPoints, this.computerCards)
      this.computerPoints = receivedCard.value + this.computerPoints;
    }
    this.computeWinner(
      this.computerPoints,
      this.playerPoints,
      this.bettingPool
    );
  }

  public computeWinner(
    computerScore: number,
    playerScore: number,
    pool: number
  ): number {
    const halfPool = pool / 2;
    if (computerScore < 22 && playerScore < 22) {
      if (computerScore > playerScore) {
        this.computerWins = true;

        // Remove a point if the player doubled down and lost the hand - GAMBLING!
        if (this.doubleDownActivated && this.playerRoundPoints > 0) {
          this.playerRoundPoints = this.playerRoundPoints - 1;
        }
        return (this.computerCredits = this.computerCredits + pool);
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

        return (this.playerCredits = this.playerCredits + pool);
      }
      if (computerScore === playerScore) {
        this.draw = true;
        return (
          (this.playerCredits = this.playerCredits + halfPool),
          (this.computerCredits = this.computerCredits + halfPool)
        );
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

        return (this.playerCredits = this.playerCredits + pool);
      }
      if (playerScore >= 22 && computerScore < 22) {
        this.computerWins = true;
        // Remove a point if the player doubled down and lost the hand - GAMBLING!
        if (this.doubleDownActivated && this.playerRoundPoints > 0) {
          this.playerRoundPoints = this.playerRoundPoints - 1;
        }
        return (this.computerCredits = this.computerCredits + pool);
      }
      if (
        playerScore >= 22 &&
        computerScore >= 22 &&
        playerScore === computerScore
      ) {
        this.draw = true;
        return (
          (this.playerCredits = this.playerCredits + halfPool),
          (this.computerCredits = this.computerCredits + halfPool)
        );
      }
    }
    return 0;
  }

  public doubleDown() {
    this.dealingToPlayer = true
    this.doubleDownActivated = true;
    const receivedCard = this.cardsComponent.deckCards[0];
    this.playerCards.push(receivedCard);
    this.removeCardsFromDeck();
    this.playerPoints = this.playerPoints + receivedCard.value;
    this.playerCredits = this.playerCredits - this.standardBet;
    this.bettingPool = this.bettingPool + this.standardBet;
    this.checkForAces(this.playerPoints, this.playerCards)
    if (this.playerPoints === 21) {
      this.blackJack = true
    }
    this.dealingToPlayer = false
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
    this.bettingPool = 0;
    this.dealingToPlayer = true
    this.dealCards(this.playerCards);
    this.dealingToPlayer = false
    this.dealCards(this.computerCards);
    this.playerCredits = this.playerCredits - this.standardBet;
    this.computerCredits = this.computerCredits - this.standardBet;
    this.bettingPool = this.bettingPool + this.standardBet * 2;
    this.playerStayed = false;
    this.playerAceCount = 0;
    this.computerAceCount = 0;
    this.doubleDownActivated = false;

    if (this.cardsComponent.deckCards.length < 5) {
      this.cardsComponent.deckCards = [];
      this.cardsComponent.createDeck();
    }
  }

  public selectOpponentVideos(opponent: number) {
    let opponentVideoArray: any;
    if (opponent === 1) {
      opponentVideoArray = this.opponentVideos.videos1;
    }
    if (opponent === 2) {
      opponentVideoArray = this.opponentVideos.videos2;
    }
    if (opponent === 3) {
      opponentVideoArray = this.opponentVideos.videos3;
    }
    if (opponent === 4) {
      opponentVideoArray = this.opponentVideos.videos4;
    }
    if (opponent === 5) {
      opponentVideoArray = this.opponentVideos.videos5;
    }
    if (opponent === 6) {
      opponentVideoArray = this.opponentVideos.videos6;
    }
    if (opponent === 7) {
      opponentVideoArray = this.opponentVideos.videos7;
    }
    if (opponent === 8) {
      opponentVideoArray = this.opponentVideos.videos8;
    }
    if (opponent === 9) {
      opponentVideoArray = this.opponentVideos.videos9;
    }
    if (opponent === 10) {
      opponentVideoArray = this.opponentVideos.videos10;
    }
    if (opponent === 11) {
      opponentVideoArray = this.opponentVideos.videos11;
    }
    if (opponent === 12) {
      opponentVideoArray = this.opponentVideos.videos12;
    }
    if (opponent === 13) {
      opponentVideoArray = this.opponentVideos.videos13;
    }
    if (opponent === 14) {
      opponentVideoArray = this.opponentVideos.videos14;
    }
    return opponentVideoArray;
  }

  public displayVideo() {
    const opponentVideos: any = this.selectOpponentVideos(this.opponent);
    if (this.playerWinCount === 5) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[1]);
    }
    if (this.playerWinCount === 10) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[2]);
    }
    if (this.playerWinCount === 15) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[3]);
    }
    if (this.playerWinCount === 20) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[4]);
    }
    if (this.playerWinCount === 25) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[5]);
    }
    if (this.playerWinCount === 30) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[6]);
    }
    if (this.playerWinCount === 35) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[7]);
    }
    if (this.playerWinCount === 40) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[8]);
    }
    if (this.playerWinCount === 45) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[9]);
    }
    if (this.playerWinCount === 50) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[10]);
    }
    if (this.playerWinCount === 55) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[11]);
    }
    if (this.playerWinCount === 60) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[12]);
    }
    if (this.playerWinCount === 65) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[13]);
    }
  }

  opponentSelected(opponent: number) {
    this.opponentSelect = true;
    this.videoTime = true;
    this.currentVideo = this.opponentVideos.videosArray[opponent - 1][0];
  }
}
