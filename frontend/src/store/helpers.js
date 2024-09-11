function getFromLocalStorage(key) {
    let items = localStorage.getItem(key) ?? "[]"
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

function range(start, end=null) {
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
}
