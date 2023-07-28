/*
06/07/2023
Selected win, loss, tie elements from html. Tried query selecting outside of function but it gave null object. Called inside rps function and they initialised fine.

Counts update inside the winDecider function but not reflected back in the main function. Values remain 0 (except tie since it is changed inside main function itself). 
*/

// function setName(){
    
//     let nameEl = document.querySelector("#name-input")
//     username = nameEl.value
//     setTimeout(function() {
//         let nameText = document.querySelector("#name-text")
//         nameText.textContent = "Change name?"
//         let buttonText = document.querySelector("#name-set")
//         buttonText.textContent = "Change"
//         nameEl.value = ""
//     }, 300);
// }

const hands = ["rock", "paper", "scissor"]


let winCount = 0
let lossCount = 0
let tieCount = 0

function rockPaperScissors() {
    console.log("Play button pressed!")
    //Initialising Counters and username variables.
    let winEl = document.getElementById("win-el")
    console.log(winEl)
    let lossEl = document.querySelector("#loss-el")
    console.log(lossEl)
    let tieEl = document.querySelector("#tie-el")
    console.log(tieEl)
    
    let leftHand = document.getElementById("left-hand")
    let rightHand = document.getElementById("right-hand")
    
    
    
    while(true){
        let user = {
            name: "Player",
            selection: prompt("Please enter your choice: rock, paper, or scissor? (x to stop).")
        }
        let computer = {
            name: "Computer",
            selection: hands[Math.floor(Math.random() * 3)]
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
            console.log("Computer's choice: " + computer.selection)              
            console.log(winDecider(user, computer))
            console.log("----------------------------------")      
            console.log(winCount + "||" + lossCount)        
            }
        winEl.textContent = "Wins: " + winCount
        lossEl.textContent = "Losses: " + lossCount
        tieEl.textContent = "Ties: " + tieCount

        leftHand.textContent = user.selection
        rightHand.textContent = computer.selection

        }
    }

function winDecider(A, B){
    if (A.selection == B.selection){
            tieCount += 1
            console.log("It's a tie.")
            console.log("----------------------------------")
            return "It's a tie"
    }
    if (A.selection == "rock" && B.selection == "paper") {
            lossCount += 1
            console.log(lossCount)
            return B.name + "wins!"
        }
    
    else if (A.selection == "paper" && B.selection == "scissor") {
            lossCount += 1
            console.log(lossCount)
            return B.name + "wins!"
    }
    
    else if (A.selection == "scissor" && B.selection == "rock") {
            lossCount += 1
            console.log(lossCount)
            return B.name + "wins!"
        }
    else {
        winCount += 1
        console.log(winCount)
        return A.name + "wins!"
    }
    }
    
    
