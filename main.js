/*
Runes.
WIP Runesuencer.

. X . . X . X .
. F . . A . C .
. 2 . . 8 . 1 .
. . N . . R . .

*/
console.log("Runes");
 
class Step {
    constructor(note, octave) {
      this.note = note;
      this.octave = octave;
    }
  
    play() {
      console.log(this.note, this.octave)
    }
  };

let Runes = {
    clockWorker: new Worker('./clock.js'),
    attr: {
    bpm: 50,
    steps: 16,
    runState: false,
    },
    pattern: [],
    init: function() {
        this.populatePattern();
        this.updateWorker();
    },
    updateBPM: function(bpm) {
        this.attr.bpm = bpm;
        this.updateWorker();
    },
    updateWorker: function() {
        this.clockWorker.postMessage({
            settings: this.attr,
        })
    },
    run: function() {
        this.attr.runState = true;
        this.updateWorker();
    },
    stop: function() {
        this.attr.runState = false;
        this.updateWorker();
    },
    populatePattern: function() {
        for (let i = 0; i < this.attr.steps; i++) {
            this.pattern.push(new Step("c", i));
          };
    }
}

Runes.clockWorker.onmessage = function({data}) { 
    Runes.pattern[data.stepCounter].play()
}

Runes.init();
// Runes.run();