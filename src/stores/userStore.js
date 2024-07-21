import {defineStore} from "pinia";
export const useUser = defineStore('person' ,{
    state: () =>  {
        return {
        user: {
            agreed : '',
            birth :   '',
            city  :   '',
            first :   '',
            flat  :   '',
            house :   '',
            last  :   '',
            login :   '',
            password :'',
            second : '',
            street : '',
        },
        isAuthorized: { value: false}
        }
    },
    actions: {
        addPerson(customer) {
            this.user = customer
            this.isAuthorized.value = true
            console.log('actions: addPerson = ' , this.user)
        },
        logout(){
            return this.isAuthorized.value = false
        },
        authorize(){
            this.isAuthorized.value = true
            console.log('isAuthorized: ', this.isAuthorized.value)
        }
    },
    getters: {
        getCurrentUser: (state) => {
            console.log('getCurrentUser')
            return state.user
        }
        ,
        getUserLogin: (state) => {
            {
                console.log('getUserLogin', state.user.login)
                return state.user.login
            }
        },
        getUserPassword: (state) => {
            {
                console.log('getUserPassword:', state.user.password)
                return state.user.password
            }
        },
        isLogin: (state) => {
            console.log('isAuthorized: ', state.isAuthorized.value)
            return  state.isAuthorized.value
        }
    },

})