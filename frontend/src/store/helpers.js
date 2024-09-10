function getUsersFromLocalStorage() {
    let users = localStorage.getItem('users') ?? "[]"
    return JSON.parse(users) // [...]
}

function addNewUserToLocalStorage(new_user) {
    let existingUsers = getUsersFromLocalStorage()

    if (userExistsInDB(new_user)) {
        return false
    } else {
        existingUsers.push(new_user)
        localStorage.setItem('users', JSON.stringify(existingUsers))
        return true
    }
}

function userExistsInDB({ username, password }) {
    let users = getUsersFromLocalStorage()
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
}

export {
    getUsersFromLocalStorage,
    addNewUserToLocalStorage,
    userExistsInDB,
    range,
}
