// how a worker works:
// how can we pass data to and from this and main.
// we use the post message api.
// the post message api raises an event that one script can listen to.

// we setup an event listener 

let stepCounter = 0;
let settings;
let timer;
self.onmessage = function ({ data }) {
    settings = data.settings;
    console.log(settings)
    if (settings.runState) {
        runTimer();
    } else {
        stopTimer();
    }
    // settings.runState ? runTimer() : stopTimer();
}

function runTimer() {
    stopTimer();
    incrementStep();
    timer = setInterval(() => {
        incrementStep();
    }, calcBPMmillis());
}

function stopTimer() {
    clearInterval(timer);
}

function calcBPMmillis() {
    return Math.round((60 / (settings.bpm * 16)) * 1000)

}

function incrementStep() {
    self.postMessage({ stepCounter: stepCounter })
    stepCounter < settings.steps - 1 ? stepCounter++ : stepCounter = 0;
}