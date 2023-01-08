import { ofetch } from 'ofetch'
export default () => {
    return ofetch('http://localhost:8080/products')
}