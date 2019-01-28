/////// Constant Variables ////////

const tickTackToe = document.querySelector(".tickTackToe");
const a1 = document.querySelector(".a1");
const a1x = document.querySelector("#a1x");
const a1o = document.querySelector("#a1o");
const a2 = document.querySelector(".a2");
const a2x = document.querySelector("#a2x");
const a2o = document.querySelector("#a2o");
const a3 = document.querySelector(".a3");
const a3x = document.querySelector("#a3x");
const a3o = document.querySelector("#a3o");
const b1 = document.querySelector(".b1");
const b1x = document.querySelector("#b1x");
const b1o = document.querySelector("#b1o");
const b2 = document.querySelector(".b2");
const b2x = document.querySelector("#b2x");
const b2o = document.querySelector("#b2o");
const b3 = document.querySelector(".b3");
const b3x = document.querySelector("#b3x");
const b3o = document.querySelector("#b3o");
const c1 = document.querySelector(".c1");
const c1x = document.querySelector("#c1x");
const c1o = document.querySelector("#c1o");
const c2 = document.querySelector(".c2");
const c2x = document.querySelector("#c2x");
const c2o = document.querySelector("#c2o");
const c3 = document.querySelector(".c3");
const c3x = document.querySelector("#c3x");
const c3o = document.querySelector("#c3o");
const reset = document.querySelector("#reset");

/////////

let whoseTurn = true;
let cellStatus = {
    a: [null, null, null],
    b: [null, null, null],
    c: [null, null, null],
};

reset.addEventListener('click', function() {
    whoseTurn = true;
    cellStatus.a[0] = null;
    cellStatus.a[1] = null;
    cellStatus.a[2] = null;
    cellStatus.b[0] = null;
    cellStatus.b[1] = null;
    cellStatus.b[2] = null;
    cellStatus.c[0] = null;
    cellStatus.c[1] = null;
    cellStatus.c[2] = null;
    a1x.style.opacity = 0;
    a1o.style.opacity = 0;
    a2x.style.opacity = 0;
    a2o.style.opacity = 0;
    a3x.style.opacity = 0;
    a3o.style.opacity = 0;
    b1x.style.opacity = 0;
    b1o.style.opacity = 0;
    b2x.style.opacity = 0;
    b2o.style.opacity = 0;
    b3x.style.opacity = 0;
    b3o.style.opacity = 0;
    c1x.style.opacity = 0;
    c1o.style.opacity = 0;
    c2x.style.opacity = 0;
    c2o.style.opacity = 0;
    c3x.style.opacity = 0;
    c3o.style.opacity = 0;
    console.log("Reset!")
});

tickTackToe.addEventListener('click', function() {
    if (cellStatus.a[0] === 1 && cellStatus.a[1] === 1 && cellStatus.a[2] === 1) {
        return console.log("Player 1 Wins!");
    } else if (cellStatus.b[0] === 1 && cellStatus.b[1] === 1 && cellStatus.b[2] === 1) {
        return console.log("Player 1 Wins!");
    } else if (cellStatus.c[0] === 1 && cellStatus.c[1] === 1 && cellStatus.c[2] === 1) {
        return console.log("Player 1 Wins!");
    } else if (cellStatus.a[0] === 1 && cellStatus.b[0] === 1 && cellStatus.c[0] === 1) {
        return console.log("Player 1 Wins!");
    } else if (cellStatus.a[1] === 1 && cellStatus.b[1] === 1 && cellStatus.c[1] === 1) {
        return console.log("Player 1 Wins!");
    } else if (cellStatus.a[2] === 1 && cellStatus.b[2] === 1 && cellStatus.c[2] === 1) {
        return console.log("Player 1 Wins!");
    } else if (cellStatus.a[0] === 1 && cellStatus.b[1] === 1 && cellStatus.c[2] === 1) {
        return console.log("Player 1 Wins!");
    } else if (cellStatus.a[2] === 1 && cellStatus.b[1] === 1 && cellStatus.c[0] === 1) {
        return console.log("Player 1 Wins!");
    } else if (cellStatus.a[0] === 2 && cellStatus.a[1] === 2 && cellStatus.a[2] === 2) {
        return console.log("Player 2 Wins!");
    } else if (cellStatus.b[0] === 2 && cellStatus.b[1] === 2 && cellStatus.b[2] === 2) {
        return console.log("Player 2 Wins!");
    } else if (cellStatus.c[0] === 2 && cellStatus.c[1] === 2 && cellStatus.c[2] === 2) {
        return console.log("Player 2 Wins!");
    } else if (cellStatus.a[0] === 2 && cellStatus.b[0] === 2 && cellStatus.c[0] === 2) {
        return console.log("Player 2 Wins!");
    } else if (cellStatus.a[1] === 2 && cellStatus.b[1] === 2 && cellStatus.c[1] === 2) {
        return console.log("Player 2 Wins!");
    } else if (cellStatus.a[2] === 2 && cellStatus.b[2] === 2 && cellStatus.c[2] === 2) {
        return console.log("Player 2 Wins!");
    } else if (cellStatus.a[0] === 2 && cellStatus.b[1] === 2 && cellStatus.c[2] === 2) {
        return console.log("Player 2 Wins!");
    } else if (cellStatus.a[2] === 2 && cellStatus.b[1] === 2 && cellStatus.c[0] === 2) {
        return console.log("Player 2 Wins!");
    } else if (cellStatus.a[0] !== null && cellStatus.a[1] !== null && cellStatus.a[2] !== null && cellStatus.b[0] !== null && cellStatus.b[1] !== null && cellStatus.b[2] !== null && cellStatus.c[0] !== null && cellStatus.c[1] !== null && cellStatus.c[2] !== null) {
        return console.log("Cat's Game!")
    }
});

a1.addEventListener('click', function() {
    if (whoseTurn === true && cellStatus.a[0] === null) {
        a1x.style.opacity = 1;
        cellStatus.a[0] = 1;
        whoseTurn = false;
    } else if (whoseTurn === false && cellStatus.a[0] === null) {
        a1o.style.opacity = 1;
        cellStatus.a[0] = 2;
        whoseTurn = true;
    };
    console.log("Click!1");
});

a2.addEventListener('click', function() {
    if (whoseTurn === true && cellStatus.a[1] === null) {
        a2x.style.opacity = 1;
        cellStatus.a[1] = 1;
        whoseTurn = false;
    } else if (whoseTurn === false && cellStatus.a[1] === null) {
        a2o.style.opacity = 1;
        cellStatus.a[1] = 2;
        whoseTurn = true;
    };
    console.log("Click!2");
});

a3.addEventListener('click', function() {
    if (whoseTurn === true && cellStatus.a[2] === null) {
        a3x.style.opacity = 1;
        cellStatus.a[2] = 1;
        whoseTurn = false;
    } else if (whoseTurn === false && cellStatus.a[2] === null) {
        a3o.style.opacity = 1;
        cellStatus.a[2] = 2;
        whoseTurn = true;
    };
    console.log("Click!3");
});

b1.addEventListener('click', function() {
    if (whoseTurn === true && cellStatus.b[0] === null) {
        b1x.style.opacity = 1;
        cellStatus.b[0] = 1;
        whoseTurn = false;
    } else if (whoseTurn === false && cellStatus.b[0] === null) {
        b1o.style.opacity = 1;
        cellStatus.b[0] = 2;
        whoseTurn = true;
    };
    console.log("Click!4");
});

b2.addEventListener('click', function() {
    if (whoseTurn === true && cellStatus.b[1] === null) {
        b2x.style.opacity = 1;
        cellStatus.b[1] = 1;
        whoseTurn = false;
    } else if (whoseTurn === false && cellStatus.b[1] === null) {
        b2o.style.opacity = 1;
        cellStatus.b[1] = 2;
        whoseTurn = true;
    };
    console.log("Click!5");
});

b3.addEventListener('click', function() {
    if (whoseTurn === true && cellStatus.b[2] === null) {
        b3x.style.opacity = 1;
        cellStatus.b[2] = 1;
        whoseTurn = false;
    } else if (whoseTurn === false && cellStatus.b[2] === null) {
        b3o.style.opacity = 1;
        cellStatus.b[2] = 2;
        whoseTurn = true;
    };
    console.log("Click!6");
});

c1.addEventListener('click', function() {
    if (whoseTurn === true && cellStatus.c[0] === null) {
        c1x.style.opacity = 1;
        cellStatus.c[0] = 1;
        whoseTurn = false;
    } else if (whoseTurn === false && cellStatus.c[0] === null) {
        c1o.style.opacity = 1;
        cellStatus.c[0] = 2;
        whoseTurn = true;
    };
    console.log("Click!7");
});

c2.addEventListener('click', function() {
    if (whoseTurn === true && cellStatus.c[1] === null) {
        c2x.style.opacity = 1;
        cellStatus.c[1] = 1;
        whoseTurn = false;
    } else if (whoseTurn === false && cellStatus.c[1] === null) {
        c2o.style.opacity = 1;
        cellStatus.c[1] = 2;
        whoseTurn = true;
    };
    console.log("Click!8");
});

c3.addEventListener('click', function() {
    if (whoseTurn === true && cellStatus.c[2] === null) {
        c3x.style.opacity = 1;
        cellStatus.c[2] = 1;
        whoseTurn = false;
    } else if (whoseTurn === false && cellStatus.c[2] === null) {
        c3o.style.opacity = 1;
        cellStatus.c[2] = 2;
        whoseTurn = true;
    };
    console.log("Click!9");
});