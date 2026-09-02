let users = [];

function startSystem() {
    let running = true;
    
    while (running) {
        let choice = prompt(
            "Choose an operation:\n" +
            "1. Add User\n" +
            "2. Edit Balance\n" +
            "3. Transfer Money\n" +
            "4. Delete User\n" +
            "5. Show All Users (Console)\n" +
            "6. Exit"
        );

        if (choice === null) {
            alert("Exiting system. Goodbye!");
            break;
        }

        let formattedChoice = choice.trim().toLowerCase();

        if (formattedChoice === "6" || formattedChoice === "exit") {
            alert("Exiting system. Goodbye!");
            running = false;
        } else if (formattedChoice === "1" || formattedChoice === "add" || formattedChoice === "add user") {
            addUser();
        } else if (formattedChoice === "2" || formattedChoice === "edit" || formattedChoice === "edit balance") {
            editUserBalanceById();
        } else if (formattedChoice === "3" || formattedChoice === "transfer" || formattedChoice === "transfer money") {
            transferBalance();
        } else if (formattedChoice === "4" || formattedChoice === "delete" || formattedChoice === "delete user") {
            deleteUserById();
        } else if (formattedChoice === "5" || formattedChoice === "show" || formattedChoice === "show all users") {
            console.clear();
            console.table(users);
            alert("Check the console to view all users table.");
        } else {
            alert("Invalid choice, please try again.");
        }
    }
}

function addUser() {
    let name = prompt("Enter User Name:");
    if (!name || name.trim() === "") {
        alert("Name cannot be empty!");
        return;
    }

    let id = prompt("Enter User ID:");
    if (!id || id.trim() === "") {
        alert("ID cannot be empty!");
        return;
    }
    
    let balanceInput = prompt("Enter User Balance:");
    let balance = Number(balanceInput);
    
    if (isNaN(balance) || balance < 0) {
        alert("Invalid balance amount!");
        return;
    }

    let cleanId = id.trim().toLowerCase();
    let isExist = users.find(user => user.id.toLowerCase() === cleanId);

    if (isExist) {
        alert("This ID already exists!");
    } else {
        users.push({
            name: name.trim(),
            id: id.trim(),
            balance: balance
        });
        alert("User added successfully!");
    }
}

function editUserBalanceById() {
    let id = prompt("Enter User ID to edit:");
    if (!id) return;
    
    let cleanId = id.trim().toLowerCase();
    let targetUser = users.find(user => user.id.toLowerCase() === cleanId);

    if (!targetUser) {
        alert("User not found!");
    } else {
        let newBalance = Number(prompt("Enter New Balance:"));
        if (isNaN(newBalance) || newBalance < 0) {
            alert("Invalid balance amount!");
            return;
        }
        targetUser.balance = newBalance;
        alert("Balance updated successfully!");
    }
}

function transferBalance() {
    let fromId = prompt("Enter Sender ID:");
    let toId = prompt("Enter Receiver ID:");
    let amount = Number(prompt("Enter Transfer Amount:"));

    if (!fromId || !toId) return;

    let sender = users.find(user => user.id.toLowerCase() === fromId.trim().toLowerCase());
    let receiver = users.find(user => user.id.toLowerCase() === toId.trim().toLowerCase());

    if (!sender) {
        alert("Sender not found!");
    } else if (!receiver) {
        alert("Receiver not found!");
    } else if (sender.id.toLowerCase() === receiver.id.toLowerCase()) {
        alert("You cannot transfer money to yourself!");
    } else if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount!");
    } else if (sender.balance < amount) {
        alert("Insufficient balance!");
    } else {
        sender.balance -= amount;
        receiver.balance += amount;
        alert(`Successfully transferred ${amount} from ${sender.name} to ${receiver.name}!`);
    }
}

function deleteUserById() {
    let id = prompt("Enter user ID to delete:");
    if (!id) return;

    let cleanId = id.trim().toLowerCase();
    let userIndex = users.findIndex(user => user.id.toLowerCase() === cleanId);

    if (userIndex === -1) {
        alert("User not found!");
    } else {
        let deletedUser = users.splice(userIndex, 1);
        alert(`User ${deletedUser[0].name} deleted successfully!`);
    }
}

startSystem();