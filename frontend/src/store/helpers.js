function globalReducer(state, action) {
    switch (action.type) {
        case "ACTIVATE_CURRENCY":
            let updatedCurrencies = state.currencies.map(curr => {
                curr.active = curr.code == action.payload ? true : false
                return curr
            })
            return { ...state, currencies: updatedCurrencies }
        // ------------------------------------------------------------------------------------
        // ------------------------------------------------------------------------------------
        case "SET_LANG":
            let updatedLanguages = state.languages.map(lang => {
                lang.active = lang.code == action.payload ? true : false
                return lang
            })
            return { ...state, languages: updatedLanguages }
        // ------------------------------------------------------------------------------------
        // --------------------- WISHLIST -----------------------------------------------------
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                selectedProducts: [...state.selectedProducts, action.payload]
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                selectedProducts: state.selectedProducts.filter(p_id => p_id != action.payload)
            }
        // ------------------------------------------------------------------------------------
        // --------------------- BASKET -------------------------------------------------------
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                basket: state.basket.filter(p => p.id != action.payload)
            }
        // ------------------------------------------------------------------------------------
        // --------------------- BASKET ITEM COUNT --------------------------------------------
        case "inc":
            return { ...state,  basket: action.payload}
        case "dec":
            return { ...state, basket: action.payload}
        // ------------------------------------------------------------------------------------
        // ------------------------------------------------------------------------------------
        default:
            return state; // Add a default case to return the current state
    }
}


function getFromLocalStorage(key, defaultValue = "[]") {
    let items = localStorage.getItem(key) ?? defaultValue
    return JSON.parse(items) // [...]
}

function addNewUserToLocalStorage(new_user) {
    let existingUsers = getFromLocalStorage('users')

    if (userExistsInDB(new_user)) {
        return false
    } else {
        existingUsers.push(new_user)
        localStorage.setItem('users', JSON.stringify(existingUsers))
        return true
    }
}

function userExistsInDB({ username, password }) {
    let users = getFromLocalStorage('users')
    for (let user of users) {
        if (user.username == username && user.password == password) {
            return true
        }
    }
    return false
}

function range(start, end = null) {
    if (end === null) {
        end = start
        start = 0
    }
    return Array(end - start).fill().map((_, idx) => start + idx)
    // range(10)  =>  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // range(5, 10)  =>  [5, 6, 7, 8, 9]
}

export {
    getFromLocalStorage,
    addNewUserToLocalStorage,
    userExistsInDB,
    range,
    globalReducer
}
