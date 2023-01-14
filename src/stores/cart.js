import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            items: [

            ]
        }
    },
    actions: {
        isInCart(itemIndex){
            if(itemIndex == undefined || itemIndex == null) return false;
            return this.items.findIndex(x => x.id == itemIndex) == -1 ? true : false
        },
        toggleItemFromCart(item){
            if(!item) return;
            let itemIndex = this.items.findIndex(x => x.id == item.id)
            if(itemIndex > 0){
                // item exists
                this.items.splice(itemIndex, 1)
            } else {
                // item doesn't exists
                this.items.push(item)
            }
        }
    }
})