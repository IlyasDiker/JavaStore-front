import { ofetch } from 'ofetch'
import { useCartStore } from '../stores/cart'
export default (
    product_id,
    firstname,
    lastname,
    email,
    phone,
    card_number,
    security_code,
    expiration) => {
        const cartStore = useCartStore();
    return ofetch(`http://localhost:8080/orders/`, {
        method: 'POST',
        body:{
            product: {
                id: product_id
            },
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