import { ofetch } from 'ofetch'
import { useCartStore } from '../stores/cart'
export default (
    products,
    firstname,
    lastname,
    email,
    phone,
    card_number,
    security_code,
    expiration) => {
        if(!products) return;
        const cartStore = useCartStore();
        return ofetch(`http://localhost:8080/orders/`, {
            method: 'POST',
            body:{
                products: products,
                firstname,
                lastname,
                email,
                phone,
                card_number,
                security_code,
                expiration,
                uuid: cartStore.sessionID
            }
        })
}