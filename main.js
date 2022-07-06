console.log("Runes");

const STEP_LENGTH = 8;
let sequence = [];

class Step {
  constructor(note, octave) {
    this.note = note;
    this.octave = octave;
  }

  play() {
    console.log(this.note, this.octave)
  }
};

// populate the sequence with steps
for (let i = 0; i < STEP_LENGTH; i++) {
    sequence.push(new Step("c", i));
  };

  for (let i = 0; i < STEP_LENGTH; i++) {
    setTimeout(function() {sequence[i].play()}, i * 600 );
  }

  