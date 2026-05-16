document.addEventListener("DOMContentLoaded", () => {

    /* HERO BUTTON */

    const heroBtn = document.querySelector(".hero-btn");

    heroBtn.addEventListener("click", () => {
        alert("Welcome to Cricket Premier League 2026!");
    });

    /* TEAM CARD HOVER EFFECT */

    const cards = document.querySelectorAll(".team-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.boxShadow =
                "0 15px 35px rgba(37,99,235,0.25)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.08)";
        });

    });

    /* LIVE SCORE SIMULATION */

    const score1 = document.getElementById("score1");
    const score2 = document.getElementById("score2");

    let team1 = 120;
    let team2 = 115;

    setInterval(() => {

        team1 += Math.floor(Math.random() * 7);
        team2 += Math.floor(Math.random() * 6);

        score1.innerText = `${team1}/4`;
        score2.innerText = `${team2}/5`;

    }, 4000);

    /* POINTS TABLE HIGHLIGHT */

    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {

        row.addEventListener("mouseover", () => {
            row.style.background = "#dbeafe";
            row.style.transition = "0.3s";
        });

        row.addEventListener("mouseout", () => {
            row.style.background = "white";
        });

    });

    /* LIVE CLOCK */

    function updateClock() {

        const now = new Date();

        const time =
            now.toLocaleTimeString();

        const clock =
            document.getElementById("clock");

        if(clock){
            clock.innerText = time;
        }

    }

    setInterval(updateClock,1000);

    /* AUTO MATCH STATUS */

    const status =
        document.getElementById("match-status");

    const statuses = [
        "LIVE",
        "Strategic Timeout",
        "Innings Break",
        "Powerplay",
        "Match Resumed"
    ];

    let i = 0;

    setInterval(() => {

        if(status){
            status.innerText = statuses[i];
            i = (i + 1) % statuses.length;
        }

    },5000);

});
