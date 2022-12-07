import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { OpponentVideosComponent } from './opponent-videos/opponent-videos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public allCards: CardsComponent, public opponentVideos: OpponentVideosComponent) {}
  opponentSelect: boolean = false
  title = 'black-jack';
  deckCards: any[] = [];
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
  public opponent: number = 0

  public currentVideo: string | undefined;

  public deck = this.allCards.allCards

  ngOnInit() {
    this.createDeck();
    this.dealToPlayer();
    this.dealToComputer();
    this.playerCredits = this.playerCredits - this.standardBet;
    this.computerCredits = this.computerCredits - this.standardBet;
    this.bettingPool = this.bettingPool + this.standardBet + this.standardBet;
    this.videoTime = true
  }

  public getCardNumber(): any {
    return Math.floor(Math.random() * (1 + 52 - 1) * 1);
  }

  public async createDeck() {
    while (this.deckCards.length < 52) {
      this.deckCards.push(this.deck[this.getCardNumber()]);
      this.deckCards = Array.from(new Set(this.deckCards));
    }
    return this.deckCards;
  }

  public dealToPlayer() {
    while (this.playerCards.length < 2) {
      const cardNumber = this.getCardNumber();
      this.playerCards.push(this.deck[cardNumber]);
      this.playerCards = Array.from(new Set(this.playerCards));
      this.removeCardsFromDeck(cardNumber);
    }

    for (const card of this.playerCards) {
      this.playerPoints = card.value + this.playerPoints;
    }

    if (this.playerPoints > 21) {
      this.playerCards.find((card) => {
        if (card.value === 11) {
          this.playerPoints - 10
        }
      })
    }

    if (this.playerPoints === 21) {
      this.blackJack = true;
    }
    this.hitMeAvailable = true;
    return this.playerCards;
  }

  public dealToComputer() {
    while (this.computerCards.length < 2) {
      const cardNumber = this.getCardNumber();
      this.computerCards.push(this.deck[cardNumber]);
      this.removeCardsFromDeck(cardNumber);
    }
    for (const card of this.computerCards) {
      this.computerPoints = card.value + this.computerPoints;
    }

    return this.computerCards;
  }

  public hitMe() {
    const cardNumber = this.getCardNumber();
    const receivedCard = this.deck[cardNumber];
    this.playerCards.push(receivedCard);
    this.removeCardsFromDeck(cardNumber);

    const cardValue = receivedCard.value;
    if (cardValue === 11 && (cardValue + this.playerPoints) > 21) {
      receivedCard.value = 1;
      this.playerPoints = this.playerPoints - 10;
    }

    this.playerPoints = cardValue + this.playerPoints;

    if (this.playerPoints > 21) {
      this.playerCards.find((x) => {
        if (x.value === 11) {
          x.value = 1;
          this.playerPoints = this.playerPoints - 10;
        }
      });
    }
    if (this.playerPoints > 21) {
      this.busted = true;
      this.computeWinner(
        this.computerPoints,
        this.playerPoints,
        this.bettingPool
      );
    }
  }

  public playerStays() {
    this.playerStayed = true;
    this.hideInitialCard = false;
    while (this.computerPoints <= 16 && !this.busted) {
      const cardNumber = this.getCardNumber();
      const receivedCard = this.deck[cardNumber];
      this.computerCards.push(receivedCard);
      if (
        receivedCard.value === 11 &&
        this.computerPoints + receivedCard.value > 21
      ) {
        receivedCard.value = 1;
      }
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
        return (this.computerCredits = this.computerCredits + pool);
      }
      if (computerScore < playerScore) {
        this.playerWins = true;
        this.playerWinCount++;
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
        this.playerWinCount++;
        this.displayVideo();
        return (this.playerCredits = this.playerCredits + pool);
      }
      if (playerScore >= 22 && computerScore < 22) {
        this.computerWins = true;
        return (this.computerCredits = this.computerCredits + pool);
      }
      if (playerScore >= 22 && computerScore >= 22 && playerScore === computerScore) {
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
    this.doubleDownActivated = true;
    const cardNumber = this.getCardNumber();
    const receivedCard = this.deck[cardNumber];
    this.playerCards.push(receivedCard);
    this.removeCardsFromDeck(cardNumber);
    this.playerPoints = this.playerPoints + receivedCard.value;
    this.playerCredits = this.playerCredits - this.standardBet;
    this.bettingPool = this.bettingPool + this.standardBet;
    this.playerStays();
  }

  public removeCardsFromDeck(cardNumber: number) {
    this.deckCards = this.deckCards.filter((x) => {
      return x !== this.deck[cardNumber];
    });
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
    this.dealToPlayer();
    this.dealToComputer();
    this.playerCredits = this.playerCredits - this.standardBet;
    this.computerCredits = this.computerCredits - this.standardBet;
    this.bettingPool = this.bettingPool + this.standardBet * 2;
    this.playerStayed = false;

    if (this.deckCards.length < 4) {
      this.deckCards = [];
      this.createDeck();
    }
  }

  public selectOpponentVideos(opponent: number) {
    let opponentVideoArray: any
    if (opponent === 1) {
      opponentVideoArray = this.opponentVideos.videos1
    }
    if (opponent === 2) {
      opponentVideoArray = this.opponentVideos.videos2
    }
    if (opponent === 3) {
      opponentVideoArray = this.opponentVideos.videos3
    }
    if (opponent === 4) {
      opponentVideoArray = this.opponentVideos.videos4
    }
    if (opponent === 5) {
      opponentVideoArray = this.opponentVideos.videos5
    }
    if (opponent === 6) {
      opponentVideoArray = this.opponentVideos.videos6
    }
    if (opponent === 7) {
      opponentVideoArray = this.opponentVideos.videos7
    }
    if (opponent === 8) {
      opponentVideoArray = this.opponentVideos.videos8
    }
    if (opponent === 9) {
      opponentVideoArray = this.opponentVideos.videos9
    }
    if (opponent === 10) {
      opponentVideoArray = this.opponentVideos.videos10
    }
    return opponentVideoArray
  }

  public displayVideo() {
    const opponentVideos: any = this.selectOpponentVideos(this.opponent)
    if (this.playerWinCount === 3) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[1]);
    }
    if (this.playerWinCount === 6) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[2]);
    }
    if (this.playerWinCount === 9) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[3]);
    }
    if (this.playerWinCount === 12) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[4]);
    }
    if (this.playerWinCount === 15) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[5]);
    }
    if (this.playerWinCount === 18) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[6]);
    }
    if (this.playerWinCount === 21) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[7]);
    }
    if (this.playerWinCount === 24) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[8]);
    }
    if (this.playerWinCount === 27) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[9]);
    }
    if (this.playerWinCount === 30) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[10]);
    }
    if (this.playerWinCount === 33) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[11]);
    }
    if (this.playerWinCount === 36) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[12]);
    }
    if (this.playerWinCount === 39) {
      this.videoTime = true;
      return (this.currentVideo = opponentVideos[13]);
    }
  }

  opponent1Selected() {
    this.opponentSelect = true
    this.opponent = 1
    this.videoTime = true
    this.currentVideo = this.opponentVideos.videos1[0]
  }

  opponent2Selected() {
    this.opponentSelect = true
    this.opponent = 2
    this.videoTime = true
    this.currentVideo = this.opponentVideos.videos2[0]
  }

  opponent3Selected() {
    this.opponentSelect = true
    this.opponent = 3
    this.videoTime = true
    this.currentVideo = this.opponentVideos.videos3[0]
  }

  opponent4Selected() {
    this.opponentSelect = true
    this.opponent = 4
    this.videoTime = true
    this.currentVideo = this.opponentVideos.videos4[0]
  }

  opponent5Selected() {
    this.opponentSelect = true
    this.opponent = 5
    this.videoTime = true
    this.currentVideo = this.opponentVideos.videos5[0]
  }

  opponent6Selected() {
    this.opponentSelect = true
    this.opponent = 6
    this.videoTime = true
    this.currentVideo = this.opponentVideos.videos6[0]
  }

  opponent7Selected() {
    this.opponentSelect = true
    this.opponent = 7
    this.videoTime = true
    this.currentVideo = this.opponentVideos.videos7[0]
  }

  opponent8Selected() {
    this.opponentSelect = true
    this.opponent = 8
    this.videoTime = true
    this.currentVideo = this.opponentVideos.videos8[0]
  }

  opponent9Selected() {
    this.opponentSelect = true
    this.opponent = 9
    this.videoTime = true
    this.currentVideo = this.opponentVideos.videos9[0]
  }

  opponent10Selected() {
    this.opponentSelect = true
    this.opponent = 10
    this.videoTime = true
    this.currentVideo = this.opponentVideos.videos10[0]
  }
  
}
