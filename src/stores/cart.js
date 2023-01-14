import { defineStore } from "pinia";

import { v4 as uuidv4 } from 'uuid';

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            sessionID : null,
            isCartOpen : false,
            items: [

            ],
            orders: [

            ]
        }
    },
    actions: {
        innitCart(){
            if(this.sessionID) return this.sessionID;
            let uuid = uuidv4()
            this.sessionID = uuid
        },
        isInCart(itemIndex){
            if(itemIndex == undefined || itemIndex == null) return false;
            return this.items.findIndex(x => x.id == itemIndex) == -1 ? true : false
        },
        toggleItemFromCart(item){
            if(!item) return;
            let itemIndex = this.items.findIndex(x => x.id == item.id)
            if(itemIndex == -1){
                this.items.push({...item, quantity: 1})
            } else {
                this.items.splice(itemIndex, 1)
            }
        },
        calculateTotal(){
            let total = 0
            this.items.forEach((item)=>{
                total = total + (item.price * (item.quantity ?? 1));
            })
            return total;
        },
        removeFromCart(itemId){
            let itemIndex = this.items.findIndex(x => x.id == itemId)
            if(itemIndex != -1){
                this.items.splice(itemIndex, 1);
            }
        }
    },
    persist: {
        paths: ['items', 'sessionID', 'orders']
    },
})