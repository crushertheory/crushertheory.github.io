import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  public deckCards: any[] = [];
  public allCards = [
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

  public getCardNumber(): any {
    return Math.floor(Math.random() * (1 + 52 - 1) * 1);
  }

  public resetAces() {
    for (const card of this.allCards) {
      const aceToBeReset = this.allCards.find((card) => card.value === 1)
      if (aceToBeReset) {
        aceToBeReset.value = 11
      }
    }
  }

  public createDeck() {
    this.resetAces()
    const deck = this.allCards
    while (this.deckCards.length < 52) {
      this.deckCards.push(deck[this.getCardNumber()]);
      this.deckCards = Array.from(new Set(this.deckCards));
    }
    return this.deckCards;
  }
}
