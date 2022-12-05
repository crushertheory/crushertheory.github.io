import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
  public allVideos = [
    {
      video0: '../assets/0.mp4',
      video1: '../assets/1.mp4',
      video2: '../assets/2.mp4',
      video3: "../assets/3.mp4",
      video4: "../assets/4.mp4",
      video5: "../assets/5.mp4",
      video6: "../assets/6.mp4", 
      video7: "../assets/7.mp4",
      video8:"../assets/8.mp4",
      video9: "../assets/9.mp4",
      video10: "../assets/10.mp4",
      video11: "../assets/11.mp4",
      video12: "../assets/12.mp4",
      video13: "../assets/13.mp4",
    },
    {
      video0: '../assets/1-0.mp4',
      video1: '../assets/1-1.mp4',
      video2: '../assets/1-2.mp4',
      video3: "../assets/1-3.mp4",
      video4: "../assets/1-4.mp4",
      video5: "../assets/1-5.mp4",
      video6: "../assets/1-6.mp4", 
      video7: "../assets/1-7.mp4",
      video8:"../assets/1-8.mp4",
      video9: "../assets/1-9.mp4",
      video10: "../assets/1-10.mp4",
      video11: "../assets/1-11.mp4",
      video12: "../assets/1-12.mp4",
      video13: "../assets/1-13.mp4",
    },
    {
      video0: '../assets/3-0.mp4',
      video1: '../assets/3-1.mp4',
      video2: '../assets/3-2.mp4',
      video3: "../assets/3-3.mp4",
      video4: "../assets/3-4.mp4",
      video5: "../assets/3-5.mp4",
      video6: "../assets/3-6.mp4", 
      video7: "../assets/3-7.mp4",
      video8: "../assets/3-8.mp4",
      video9: "../assets/3-9.mp4",
      video10: "../assets/3-10.mp4",
      video11: "../assets/3-11.mp4",
      video12: "../assets/3-12.mp4",
      video13: "../assets/3-13.mp4",
    },
    {
      video0: '../assets/4-0.mp4',
      video1: '../assets/4-1.mp4',
      video2: '../assets/4-2.mp4',
      video3: "../assets/4-3.mp4",
      video4: "../assets/4-4.mp4",
      video5: "../assets/4-5.mp4",
      video6: "../assets/4-6.mp4", 
      video7: "../assets/4-7.mp4",
      video8:"../assets/4-8.mp4",
      video9: "../assets/4-9.mp4",
      video10: "../assets/4-10.mp4",
    },
    {
      video0: '../assets/5-0.mp4',
      video1: '../assets/5-1.mp4',
      video2: '../assets/5-2.mp4',
      video3: "../assets/5-3.mp4",
      video4: "../assets/5-4.mp4",
      video5: "../assets/5-5.mp4",
      video6: "../assets/5-6.mp4", 
      video7: "../assets/5-7.mp4",
      video8:"../assets/5-8.mp4",
      video9: "../assets/5-9.mp4",
      video10: "../assets/5-10.mp4",
    }
  ]
  public videos1 = [
    '../assets/0.mp4',
    '../assets/1.mp4',
    '../assets/2.mp4',
    "../assets/3.mp4",
    "../assets/4.mp4",
    "../assets/5.mp4",
    "../assets/6.mp4", 
    "../assets/7.mp4",
    "../assets/8.mp4",
    "../assets/9.mp4",
    "../assets/10.mp4",
    "../assets/11.mp4",
    "../assets/12.mp4",
    "../assets/13.mp4",
  ];
  public videos2 = [
    '../assets/1-0.mp4',
    '../assets/1-1.mp4',
    '../assets/1-2.mp4',
    "../assets/1-3.mp4",
    "../assets/1-4.mp4",
    "../assets/1-5.mp4",
    "../assets/1-6.mp4", 
    "../assets/1-7.mp4",
    "../assets/1-8.mp4",
    "../assets/1-9.mp4",
    "../assets/1-10.mp4",
    "../assets/1-11.mp4",
    "../assets/1-12.mp4",
    "../assets/1-13.mp4",
  ];
  public videos3 = [
    '../assets/3-0.mp4',
    '../assets/3-1.mp4',
    '../assets/3-2.mp4',
    "../assets/3-3.mp4",
    "../assets/3-4.mp4",
    "../assets/3-5.mp4",
    "../assets/3-6.mp4", 
    "../assets/3-7.mp4",
    "../assets/3-8.mp4",
    "../assets/3-9.mp4",
    "../assets/3-10.mp4",
    "../assets/3-11.mp4",
    "../assets/3-12.mp4",
    "../assets/3-13.mp4",
  ];
  public videos4 = [
    '../assets/4-0.mp4',
    '../assets/4-1.mp4',
    '../assets/4-2.mp4',
    "../assets/4-3.mp4",
    "../assets/4-4.mp4",
    "../assets/4-5.mp4",
    "../assets/4-6.mp4", 
    "../assets/4-7.mp4",
    "../assets/4-8.mp4",
    "../assets/4-9.mp4",
    "../assets/4-10.mp4",
  ];

  public videos5 = [
    '../assets/5-0.mp4',
    '../assets/5-1.mp4',
    "../assets/5-3.mp4",
    "../assets/5-4.mp4",
    "../assets/5-5.mp4",
    "../assets/5-6.mp4", 
    "../assets/5-7.mp4",
    "../assets/5-8.mp4",
    "../assets/5-9.mp4",
    "../assets/5-10.mp4",
  ]

  public videos6 = [
    '../assets/6-0.mp4',
    '../assets/6-1.mp4',
    "../assets/6-3.mp4",
    "../assets/6-4.mp4",
    "../assets/6-5.mp4",
    "../assets/6-6.mp4", 
    "../assets/6-7.mp4",
    "../assets/6-8.mp4",
    "../assets/6-9.mp4",
  ]

  public videosArray = [
    this.videos1,
    this.videos2,
    this.videos3,
    this.videos4,
    this.videos5
  ]
  public currentVideo: string | undefined;
  public opponents = ["../assets/opponents/opponent1.png", "../assets/opponents/opponent2.png"]

  allCards = [
    {
      label: '2he',
      value: 2,
      image: '../assets/cards/2_of_hearts.png',
    },
    {
      label: '3he',
      value: 3,
      image: '../assets/cards/3_of_hearts.png',
    },
    {
      label: '4he',
      value: 4,
      image: '../assets/cards/4_of_hearts.png',
    },
    {
      label: '5he',
      value: 5,
      image: '../assets/cards/5_of_hearts.png',
    },
    {
      label: '6he',
      value: 6,
      image: '../assets/cards/6_of_hearts.png',
    },
    {
      label: '7he',
      value: 7,
      image: '../assets/cards/7_of_hearts.png',
    },
    {
      label: '8he',
      value: 8,
      image: '../assets/cards/8_of_hearts.png',
    },
    {
      label: '9he',
      value: 9,
      image: '../assets/cards/9_of_hearts.png',
    },
    {
      label: '10he',
      value: 10,
      image: '../assets/cards/10_of_hearts.png',
    },
    {
      label: 'Jhe',
      value: 10,
      image: '../assets/cards/jack_of_hearts.png',
    },
    {
      label: 'Qhe',
      value: 10,
      image: '../assets/cards/queen_of_hearts.png',
    },
    {
      label: 'Khe',
      value: 10,
      image: '../assets/cards/king_of_hearts.png',
    },
    {
      label: 'Ahe',
      value: 11,
      image: '../assets/cards/ace_of_hearts.png',
    },
    {
      label: '2cl',
      value: 2,
      image: '../assets/cards/2_of_clubs.png',
    },
    {
      label: '3cl',
      value: 3,
      image: '../assets/cards/3_of_clubs.png',
    },
    {
      label: '4cl',
      value: 4,
      image: '../assets/cards/4_of_clubs.png',
    },
    {
      label: '5cl',
      value: 5,
      image: '../assets/cards/5_of_clubs.png',
    },
    {
      label: '6cl',
      value: 6,
      image: '../assets/cards/6_of_clubs.png',
    },
    {
      label: '7cl',
      value: 7,
      image: '../assets/cards/7_of_clubs.png',
    },
    {
      label: '8cl',
      value: 8,
      image: '../assets/cards/8_of_clubs.png',
    },
    {
      label: '9cl',
      value: 9,
      image: '../assets/cards/9_of_clubs.png',
    },
    {
      label: '10cl',
      value: 10,
      image: '../assets/cards/10_of_clubs.png',
    },
    {
      label: 'Jcl',
      value: 10,
      image: '../assets/cards/jack_of_clubs.png',
    },
    {
      label: 'Qcl',
      value: 10,
      image: '../assets/cards/queen_of_clubs.png',
    },
    {
      label: 'Kcl',
      value: 10,
      image: '../assets/cards/king_of_clubs.png',
    },
    {
      label: 'Acl',
      value: 11,
      image: '../assets/cards/ace_of_clubs.png',
    },
    {
      label: '2di',
      value: 2,
      image: '../assets/cards/2_of_diamonds.png',
    },
    {
      label: '3di',
      value: 3,
      image: '../assets/cards/3_of_diamonds.png',
    },
    {
      label: '4di',
      value: 4,
      image: '../assets/cards/4_of_diamonds.png',
    },
    {
      label: '5di',
      value: 5,
      image: '../assets/cards/5_of_diamonds.png',
    },
    {
      label: '6di',
      value: 6,
      image: '../assets/cards/6_of_diamonds.png',
    },
    {
      label: '7di',
      value: 7,
      image: '../assets/cards/7_of_diamonds.png',
    },
    {
      label: '8di',
      value: 8,
      image: '../assets/cards/8_of_diamonds.png',
    },
    {
      label: '9di',
      value: 9,
      image: '../assets/cards/9_of_diamonds.png',
    },
    {
      label: '10di',
      value: 10,
      image: '../assets/cards/10_of_diamonds.png',
    },
    {
      label: 'Jdi',
      value: 10,
      image: '../assets/cards/jack_of_diamonds.png',
    },
    {
      label: 'Qdi',
      value: 10,
      image: '../assets/cards/queen_of_diamonds.png',
    },
    {
      label: 'Kdi',
      value: 10,
      image: '../assets/cards/king_of_diamonds.png',
    },
    {
      label: 'Adi',
      value: 11,
      image: '../assets/cards/ace_of_diamonds.png',
    },
    {
      label: '2sp',
      value: 2,
      image: '../assets/cards/2_of_spades.png',
    },
    {
      label: '3sp',
      value: 3,
      image: '../assets/cards/3_of_spades.png',
    },
    {
      label: '4sp',
      value: 4,
      image: '../assets/cards/4_of_spades.png',
    },
    {
      label: '5sp',
      value: 5,
      image: '../assets/cards/5_of_spades.png',
    },
    {
      label: '6sp',
      value: 6,
      image: '../assets/cards/6_of_spades.png',
    },
    {
      label: '7sp',
      value: 7,
      image: '../assets/cards/7_of_spades.png',
    },
    {
      label: '8sp',
      value: 8,
      image: '../assets/cards/8_of_spades.png',
    },
    {
      label: '9sp',
      value: 9,
      image: '../assets/cards/9_of_spades.png',
    },
    {
      label: '10sp',
      value: 10,
      image: '../assets/cards/10_of_spades.png',
    },
    {
      label: 'Jsp',
      value: 10,
      image: '../assets/cards/jack_of_spades.png',
    },
    {
      label: 'Qsp',
      value: 10,
      image: '../assets/cards/queen_of_spades.png',
    },
    {
      label: 'Ksp',
      value: 10,
      image: '../assets/cards/king_of_spades.png',
    },
    {
      label: 'Asp',
      value: 11,
      image: '../assets/cards/ace_of_spades.png',
    },
  ];

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
      this.deckCards.push(this.allCards[this.getCardNumber()]);
      this.deckCards = Array.from(new Set(this.deckCards));
    }
    return this.deckCards;
  }

  public dealToPlayer() {
    while (this.playerCards.length < 2) {
      const cardNumber = this.getCardNumber();
      this.playerCards.push(this.allCards[cardNumber]);
      this.playerCards = Array.from(new Set(this.playerCards));
      this.removeCardsFromDeck(cardNumber);
    }

    for (const card of this.playerCards) {
      this.playerPoints = card.value + this.playerPoints;
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
      this.computerCards.push(this.allCards[cardNumber]);
      this.removeCardsFromDeck(cardNumber);
    }
    for (const card of this.computerCards) {
      this.computerPoints = card.value + this.computerPoints;
    }

    return this.computerCards;
  }

  public hitMe() {
    const cardNumber = this.getCardNumber();
    const receivedCard = this.allCards[cardNumber];
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
      const receivedCard = this.allCards[cardNumber];
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
    const receivedCard = this.allCards[cardNumber];
    this.playerCards.push(receivedCard);
    this.removeCardsFromDeck(cardNumber);
    this.playerPoints = this.playerPoints + receivedCard.value;
    this.playerCredits = this.playerCredits - this.standardBet;
    this.bettingPool = this.bettingPool + this.standardBet;
    this.playerStays();
  }

  public removeCardsFromDeck(cardNumber: number) {
    this.deckCards = this.deckCards.filter((x) => {
      return x !== this.allCards[cardNumber];
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

    if (this.deckCards.length < 10) {
      this.deckCards = [];
      this.createDeck();
    }
  }

  public dismissVideoFrame() {
    this.videoTime = false;
  }

  // public displayVideo() {
  //   if (this.opponent === 1) {
  //     if (this.playerWinCount === 3) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[1]);
  //     }
  //     if (this.playerWinCount === 6) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[2]);
  //     }
  //     if (this.playerWinCount === 9) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[3]);
  //     }
  //     if (this.playerWinCount === 12) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[4]);
  //     }
  //     if (this.playerWinCount === 15) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[5]);
  //     }
  //     if (this.playerWinCount === 18) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[6]);
  //     }
  //     if (this.playerWinCount === 21) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[7]);
  //     }
  //     if (this.playerWinCount === 24) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[8]);
  //     }
  //     if (this.playerWinCount === 27) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[9]);
  //     }
  //     if (this.playerWinCount === 30) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[10]);
  //     }
  //     if (this.playerWinCount === 33) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[11]);
  //     }
  //     if (this.playerWinCount === 36) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[12]);
  //     }
  //     if (this.playerWinCount === 39) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos[13]);
  //     }
  //   } else if (this.opponent === 2) {
  //     if (this.playerWinCount === 3) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[1]);
  //     }
  //     if (this.playerWinCount === 6) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[2]);
  //     }
  //     if (this.playerWinCount === 9) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[3]);
  //     }
  //     if (this.playerWinCount === 12) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[4]);
  //     }
  //     if (this.playerWinCount === 15) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[5]);
  //     }
  //     if (this.playerWinCount === 18) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[6]);
  //     }
  //     if (this.playerWinCount === 21) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[7]);
  //     }
  //     if (this.playerWinCount === 24) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[8]);
  //     }
  //     if (this.playerWinCount === 27) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[9]);
  //     }
  //     if (this.playerWinCount === 30) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[10]);
  //     }
  //     if (this.playerWinCount === 33) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[11]);
  //     }
  //     if (this.playerWinCount === 36) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[12]);
  //     }
  //     if (this.playerWinCount === 39) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos2[13]);
  //     }
  //   }
  //   else if (this.opponent === 3) {
  //     if (this.playerWinCount === 3) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[1]);
  //     }
  //     if (this.playerWinCount === 6) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[2]);
  //     }
  //     if (this.playerWinCount === 9) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[3]);
  //     }
  //     if (this.playerWinCount === 12) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[4]);
  //     }
  //     if (this.playerWinCount === 15) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[5]);
  //     }
  //     if (this.playerWinCount === 18) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[6]);
  //     }
  //     if (this.playerWinCount === 21) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[7]);
  //     }
  //     if (this.playerWinCount === 24) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[8]);
  //     }
  //     if (this.playerWinCount === 27) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[9]);
  //     }
  //     if (this.playerWinCount === 30) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[10]);
  //     }
  //     if (this.playerWinCount === 33) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[11]);
  //     }
  //     if (this.playerWinCount === 36) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[12]);
  //     }
  //     if (this.playerWinCount === 39) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos3[13]);
  //     }
  //   }
  //   else if (this.opponent === 4) {
  //     if (this.playerWinCount === 3) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos4[1]);
  //     }
  //     if (this.playerWinCount === 6) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos4[2]);
  //     }
  //     if (this.playerWinCount === 9) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos4[3]);
  //     }
  //     if (this.playerWinCount === 12) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos4[4]);
  //     }
  //     if (this.playerWinCount === 15) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos4[5]);
  //     }
  //     if (this.playerWinCount === 18) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos4[6]);
  //     }
  //     if (this.playerWinCount === 21) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos4[7]);
  //     }
  //     if (this.playerWinCount === 24) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos4[8]);
  //     }
  //     if (this.playerWinCount === 27) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos4[9]);
  //     }
  //     if (this.playerWinCount === 30) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos4[10]);
  //     }
  //   } 
  //   else if (this.opponent === 5) {
  //     if (this.playerWinCount === 3) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos5[1]);
  //     }
  //     if (this.playerWinCount === 6) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos5[2]);
  //     }
  //     if (this.playerWinCount === 9) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos5[3]);
  //     }
  //     if (this.playerWinCount === 12) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos5[4]);
  //     }
  //     if (this.playerWinCount === 15) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos5[5]);
  //     }
  //     if (this.playerWinCount === 18) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos5[6]);
  //     }
  //     if (this.playerWinCount === 21) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos5[7]);
  //     }
  //     if (this.playerWinCount === 24) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos5[8]);
  //     }
  //     if (this.playerWinCount === 27) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos5[9]);
  //     }
  //     if (this.playerWinCount === 30) {
  //       this.videoTime = true;
  //       return (this.currentVideo = this.videos5[10]);
  //     }
  //   } 
  //    return 0
  // }

  public displayVideo() {
    let opponentVideos: any
    if (this.opponent === 1) {
      opponentVideos = this.videos1
    }
    if (this.opponent === 2) {
      opponentVideos = this.videos2
    }
    if (this.opponent === 3) {
      opponentVideos = this.videos3
    }
    if (this.opponent === 4) {
      opponentVideos = this.videos4
    }
    if (this.opponent === 5) {
      opponentVideos = this.videos5
    }
    if (this.opponent === 6) {
      opponentVideos = this.videos6
    }
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

  public pickRightVideos(videoArray: any) {
    switch(videoArray) {
      case this.opponent === 1:
        return this.videosArray[0]
        case this.opponent === 2:
        return this.videosArray[1]
        case this.opponent === 3:
        return this.videosArray[2]
        case this.opponent === 4:
        return this.videosArray[5]
        case this.opponent === 5:
        return this.videosArray[4]
        default:
          return this.videosArray[0]
    }
  }
  // public displayVideo(wins: number) {
  //   const videos = this.pickRightVideos(this.videosArray)
  //     if (wins === 3) {
  //       this.videoTime = true,
  //       this.currentVideo = videos[1]
  //   }
  //   if (wins === 6) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[2]  
  //   }
  //   if (wins === 9) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[3]  
  //   } 
  //   if (wins === 12) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[4]  
  //   } 
  //   if (wins === 15) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[5]  
  //   } 
  //   if (wins === 18) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[6]  
  //   } 
  //   if (wins === 21) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[7]  
  //   }   
  //   if (wins === 24) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[8]  
  //   }
  //   if (wins === 27) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[9]  
  //   } 
  //   if (wins === 30) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[10]  
  //   } 
  //   if (wins === 33) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[11]  
  //   }
  //   if (wins === 36) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[12]  
  //   } 
  //   if (wins === 39) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[13]  
  //   } 
  //   if (wins === 42) {
  //     this.videoTime = true,
  //     this.currentVideo = videos[14]  
  //   }
  // }

  opponent1Selected() {
    this.opponentSelect = true
    this.opponent = 1
    this.videoTime = true
    this.currentVideo = this.videos1[0]
  }

  opponent2Selected() {
    this.opponentSelect = true
    this.opponent = 2
    this.videoTime = true
    this.currentVideo = this.videos2[0]
  }

  opponent3Selected() {
    this.opponentSelect = true
    this.opponent = 3
    this.videoTime = true
    this.currentVideo = this.videos3[0]
  }

  opponent4Selected() {
    this.opponentSelect = true
    this.opponent = 4
    this.videoTime = true
    this.currentVideo = this.videos4[0]
  }

  opponent5Selected() {
    this.opponentSelect = true
    this.opponent = 5
    this.videoTime = true
    this.currentVideo = this.videos5[0]
  }

  opponent6Selected() {
    this.opponentSelect = true
    this.opponent = 6
    this.videoTime = true
    this.currentVideo = this.videos6[0]
  }
}
