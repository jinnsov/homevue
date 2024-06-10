import {defineStore} from "pinia";
export const useMyStore = defineStore('counter' ,{
    state: () =>  {
        return {
            cards: [],
            card: {
                        id: 0,
                        sel: 0,
                        title: '',
                        price: 0.00,
                        description: '',
                        category:'',
                        image:'',
                        rating: {
                            rate:0.00,
                            count:0
                        }
                    },
            login: undefined
                }
    },
    actions: {
      addCard(card) {
          const index = this.cards.indexOf(card)
          if (index !== -1)
              card.inCartCount += 1
          else {
              card.inCartCount = 1
          }
          this.cards.push(card)

      },
      removeCard(card) {
          const index = this.cards.indexOf(card)

          if (index !== -1)
            card.inCartCount -= 1
            this.cards.splice(index, 1)
      },
      removeAllCard() { this.cards.length = 0},
      selectCard(card) { this.card = card},
      setLogin(login)  {this.login = login}
    },
    getters: {
        cardsCount: (state) => state.cards.length,
        sum: (state) => state.cards.map(f => f.price).reduce(function (acc, num) { return acc + num; }, 0),
    },
})