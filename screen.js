// This is a palceholder file for the screen drawing & updating logic
// I am also including some notes and sample scripts for ideas i have about how to implement it.

// sample script developed in jsfiddle. 
// this code explains the basic idea behind 2d array looping and drawing of the screen content.

/* legend:
T: trigger
N: note
O: octave
M: multiplier (time)
D: direction
J: jumpto
P: probability
C: channel (midi)
*/
/*
let screenmap = [
['T','N','O','M','D','J','P','C'],
[1,1,1,1,1,1,1,1],
[2,2,2,2,2,2,2,2],
[3,3,3,3,3,3,3,3],
[3,3,3,3,3,3,3,3],
[3,3,3,3,3,3,3,3],
[3,3,3,3,3,3,3,3],
[3,3,3,3,3,3,3,3],
[3,3,3,3,3,3,3,3]
];
*/
let screenmap = [
['t','n','o','m','d','j','p','c'],
['-','-','-','-','-','-','-','-'],
['-','-','-','-','-','-','-','-'],
['-','-','-','-','-','-','-','-'],
['-','-','-','-','-','-','-','-'],
['-','-','-','-','-','-','-','-'],
['-','-','-','-','-','-','-','-'],
['-','-','-','-','-','-','-','-'],
['-','-','-','-','-','-','-','-'],
];


function draw() {
	for (let y = 0; y < screenmap.length; y++) {
    	for (let x = 0; x < screenmap[y].length; x++) {
        console.log(y, x);
        let yPos = y + 20;
        console.log(yPos);
        	ctx.fillText(screenmap[y][x], y * 20 + 20,x * 20+ 20);
        }
    }
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "20px monospace";
draw();


/*
Notes on the structure of screen drawing and updating:

When drawing a screen in a program, we need to establish a design pattern such as:

1- create a "screen container" (aka buffer or 2d array..etc) this will be the entire screen contents contained in that single place.
2- create a redraw function that will start by clearing the screen and redrawing the entire of the screen from that container.
  - this is the only way because you cannot "update" a partial section of the screen. every screen update is a full redraw.
3- whenever there is anything to update on the screen, we first go and update it into that container, then we call teh redraw function that will clear the screen and redraw completely.

*/
