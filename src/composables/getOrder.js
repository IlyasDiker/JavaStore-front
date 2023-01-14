import { ofetch } from 'ofetch'
export default (id) => {
    return ofetch(`http://localhost:8080/invoices/${id}`)
}