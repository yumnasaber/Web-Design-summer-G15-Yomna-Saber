let users = [];

function addUser() {
    let name = prompt("Enter User Name:");
    let id = prompt("Enter User ID:");
    let balance = Number(prompt("Enter User Balance:"));
    
    let isExist = users.find(user => user.id === id);

    if (isExist) {
        alert("This ID already exists!");
    } else {
        let user = {
            name: name,
            id: id,
            balance: balance
        };
        users.push(user);
    }
}

function editUserBalanceById() {
    let id = prompt("Enter User ID to edit:");
    let targetUser = users.find(user => user.id === id);

    if (!targetUser) {
        alert("User not found!");
    } else {
        let newBalance = Number(prompt("Enter New Balance:"));
        targetUser.balance = newBalance;
    }
}

function transferBalance() {
    let fromId = prompt("Enter Sender ID:");
    let toId = prompt("Enter Receiver ID:");
    let amount = Number(prompt("Enter Transfer Amount:"));

    let sender = users.find(user => user.id === fromId);
    let receiver = users.find(user => user.id === toId);

    if (!sender) {
        alert("Sender not found!");
    } else if (!receiver) {
        alert("Receiver not found!");
    } else if (fromId === toId) {
        alert("You cannot transfer money to yourself!");
    } else if (amount <= 0) {
        alert("Invalid amount!");
    } else if (sender.balance < amount) {
        alert("Insufficient balance!");
    } else {
        sender.balance -= amount;
        receiver.balance += amount;
    }
}

function deleteUserById() {
    let id = prompt("enter user id to delete:");
    let userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        alert("User not found!");
    } else {
        users.splice(userIndex, 1);
    }
}

addUser();
addUser();
addUser();
addUser();
console.table(users);

editUserBalanceById();
console.table(users);

transferBalance();
console.table(users);

deleteUserById();
console.table(users);