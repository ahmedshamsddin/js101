class ia_User {
    static numOfUsers = 0;

    constructor(username) {
        this.username = username;
        ia_User.numOfUsers++;
    }
}

// Test case:
// const u1 = new ia_User("ibtikar")
// const u2 = new ia_User("ali")
// const u3 = new ia_User("ahmad")
// console.log(ia_User.numOfUsers);

// Expected output: 3