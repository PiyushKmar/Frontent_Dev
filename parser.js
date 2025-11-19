/*
Q1)

"use strict";


function simulateStep(stepName) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000; // 1–2 seconds

        console.log(`${stepName} started...`);

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(`${stepName} failed due to machine error!`);
            } else {
                console.log(`${stepName} completed!`);
                resolve();
            }
        }, delay);
    });
}


function boilWater() {
    return simulateStep("Boiling water");
}

function brewCoffee() {
    return simulateStep("Brewing coffee");
}

function pourCoffee() {
    return simulateStep("Pouring coffee");
}


boilWater()
    .then(brewCoffee)
    .then(pourCoffee)
    .then(() => {
        console.log("☕ Coffee ready for the team!");
    })
    .catch((err) => {
        console.log("❌ ERROR:", err);
    });

    Q2)
    "use strict";

console.log("Start");

Promise.resolve().then(() => {
    console.log("Microtask: Promise.then()");
});

setTimeout(() => {
    console.log("Macrotask: setTimeout()");
}, 0);

console.log("Middle");

console.log("End");

Q3)

"use strict";

function getBugs() {
    return new Promise((resolve, reject) => {
        const isFailed = Math.random() < 0.3; // 30% failure chance

        setTimeout(() => {
            if (isFailed) {
                reject("API failed to fetch bugs.");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

console.log("Fetching bugs...");

getBugs()
    .then((bugs) => {
        console.table(bugs);
    })
    .catch((err) => {
        console.log("❌ ERROR:", err);
    });
*/

"use strict";

function serverA() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.2;
        setTimeout(() => {
            fail ? reject("Server A failed") : resolve("Server A: Deployment done");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.2;
        setTimeout(() => {
            fail ? reject("Server B failed") : resolve("Server B: Deployment done");
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((err) => {
        console.log("❌ ERROR:", err);
    });

Promise.race([serverA(), serverB()])
    .then((fastest) => {
        console.log("Fastest response:", fastest);
    })
    .catch((err) => {
        console.log("❌ ERROR:", err);
    });



    