let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function rockPaperScissors() {
    let username = prompt("Please enter your name")
    while(true){
        let user = {
            name: username,
            selection: prompt("Please enter your choice: rock, paper, or scissor? (x to stop).")
        }
        if (user.selection == "x"){
            break
        }
        else if (!(hands.includes(user.selection))){
            console.log("Not a valid input")
            continue        
        }
        else {
            console.log("Your choice: " + user.selection)
            let computer = {
                name: "Computer",
                selection: hands[Math.floor(Math.random() * 3)]
            }
            console.log("Computer's choice: " + computer.selection)
            if (user.selection == computer.selection){
                console.log("It's a tie.")
                console.log("----------------------------------")                
                continue
            }
            else{
                console.log(winDecider(user, computer) + " wins!")
                console.log("----------------------------------")                
            }
        }
    }
}

function winDecider(A, B){
    if (A.selection == "rock") {
        if (B.selection == "paper") {
            return B.name
        }
        else return A.name
    }
    
    else if (A.selection == "paper") {
        if (B.selection == "scissor") {
            return B.name
        }
        else return A.name
    }
    
    else if (A.selection == "scissor") {
        if (B.selection == "rock") {
            return B.name
        }
        else return A.name
    }
    
    else return "Inconclusive"
    
}
