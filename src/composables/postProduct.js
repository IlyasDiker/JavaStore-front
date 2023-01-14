import { ofetch } from 'ofetch'
export default (name, price, picture) => {
    return ofetch(`http://localhost:8080/products/`, {
        method: 'POST',
        body:{
            name: name,
            price: price,
            picture: picture,
        }
    })
}