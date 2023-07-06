/*
06/07/2023
Selected win, loss, tie elements from html. Tried query selecting outside of function but it gave null object. Called inside rps function and they initialised fine.

Counts update inside the winDecider function but not reflected back in the main function. Values remain 0 (except tie since it is changed inside main function itself). 

*/

let hands = ["rock", "paper", "scissor"]
let username = ""
// let winEl = document.querySelector("#name-input")
// console.log(winEl)
// let winCount = 0
// let lossEl = document.querySelector("#loss-el")
// console.log(lossEl)
// let lossCount = 0
// let tieEl = document.querySelector("#tie-el")
// console.log(tieEl)
// let tieCount = 0


function setName(){
    let nameEl = document.querySelector("#name-input")
    username = nameEl.value
    setTimeout(function() {
        let nameText = document.querySelector("#name-text")
        nameText.textContent = "Change name?"
        let buttonText = document.querySelector("#name-set")
        buttonText.textContent = "Change"
        nameEl.value = ""
    }, 300);
}
function rockPaperScissors() {
    let winEl = document.querySelector("#win-el")
    console.log(winEl)
    let winCount = 0
    let lossEl = document.querySelector("#loss-el")
    console.log(lossEl)
    let lossCount = 0
    let tieEl = document.querySelector("#tie-el")
    console.log(tieEl)
    let tieCount = 0
    console.log("Play button pressed!")
    console.log(username)
    while(username){
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
                tieCount += 1
                tieEl.textContent = "Ties: " + tieCount
                console.log("It's a tie.")
                console.log("----------------------------------")                
                continue
            }
            else{                
                console.log(winDecider(user, computer) + " wins!")
                console.log("----------------------------------")      
                console.log(winCount + "||" + lossCount)        
            }
        }
    }
}

function winDecider(A, B){
    if (A.selection == "rock") {
        if (B.selection == "paper") {
            lossCount += 1
            console.log(lossCount)
            return B.name
        }
        else {
            winCount += 1
            console.log(winCount)
            return A.name
        }
    }
    
    else if (A.selection == "paper") {
        if (B.selection == "scissor") {
            lossCount += 1
            console.log(lossCount)
            return B.name
        }
        
        else {
            winCount += 1
            console.log(winCount)
            return A.name
        }
    }
    
    else if (A.selection == "scissor") {
        if (B.selection == "rock") {
            lossCount += 1
            console.log(lossCount)
            return B.name
        }
        else {
            winCount += 1
            console.log(winCount)
            return A.name
        }
    }
    
    else return "Inconclusive"
    
}
