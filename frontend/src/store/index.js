import { createContext } from 'react'
import { globalReducer } from './helpers'

const context = createContext()
const BASE_URL = "http://localhost:3000/"

const initialState = {
    counter: 0,
    color: '',
    first: 0,
    currencies: [
        { code: "USD", active: true },
        { code: "EUR", active: false },
        { code: "GBP", active: false },
        { code: "JPY", active: false },
        { code: "RUB", active: false },
        { code: "UZS", active: false }
    ]
}

export {
    context,
    BASE_URL,
    initialState,
    globalReducer
}
