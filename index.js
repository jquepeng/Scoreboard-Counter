let homeScore = 0
let guestScore = 0

const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")

function add(addScore, team) {
    switch (team) {
        case "home":
            homeScore += addScore
            homeScoreEl.textContent = homeScore
            break;
        case "guest":
            guestScore += addScore
            guestScoreEl.textContent = guestScore
            break;
        default:
            console.log("something went terribly wrong")
            break;
    }
}