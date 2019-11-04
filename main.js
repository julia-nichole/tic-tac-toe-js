

 const player = {
  '1': 'pink',
  '-1': 'purple',
  'null': 'white'
};

let winCom = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let board, turn, winner


let squares = document.querySelectorAll('td div');
let  message = document.querySelector('h1');


document.querySelector('table').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', initialize);



initialize();

function handleMove(evt) {
 
  let idx = parseInt(evt.target.id.replace('sq', ''));
  
  if (board[idx] || winner) return;
  
  board[idx] = turn;
  turn *= -1;
  winner = getWinner();
  render();
}

function getWinner() {
  for (let i = 0; i < winCom.length; i++) {
    if (Math.abs(board[winCom[i][0]] + board[winCom[i][1]] + board[winCom[i][2]]) === 3) return board[winCom[i][0]];
  }
 
  if (board.includes(null)) return null;
  return 'T';
}

function render() {
  board.forEach(function(sq, idx) {
    squares[idx].style.background = player[sq];
  });
  if (winner === 'T') {
    message.innerHTML = 'TIE';
  } else if (winner) {
    message.innerHTML = `CONGRATS  ${player[winner].toUpperCase()}!`;
  } else {
    message.innerHTML = `${player[turn]}'s Turn`;
  }
}

function initialize() {
board = new Array(9).fill(null);
turn = 1;
winner = null;
render();
 }

// /*----- constants -----*/ 
// const COLORS = { // define color object for player moves
//   'null': '',
//   '1': 'white',
//   '-1': 'blue' 
// };

// const winCombos = [

//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

// /*----- app's state (variables) -----*/ 
// let board, turn, winner; 

// /*----- cached element references -----*/ 
// const message = document.querySelector('h1');
// const squares = document.querySelectorAll('div')

// /*----- event listeners -----*/ 
// document.querySelector('button').addEventListener('click', init);
// document.querySelector('section').addEventListener('click', handleClick);

// /*----- functions -----*/
// init();

// function init() {

//   board = new Array(9).fill(null);
//   turn = 1;
//   winner = null;
//   render();
// }

// function handleClick(evt) {
 
//   let moveIdx = parseInt(evt.target.dataset.square);
//   if(board[moveIdx] || winner) return;
  
//   board[moveIdx] = turn;
//   turn *= -1;
//   winner = getWinner();
//  render();
// }

// function getWinner() {
//   for(let i = 0; i <winCombos.length; i++){
//       if(Math.abs(board[winCombos[i][0]] + 
//                   board[winCombos[i][1]] + 
//                   board[winCombos[i][2]] === 3)) return board[winCombos[i][0]];
//   }
//   if(board.includes(null)) return null;
//   return "T";
// }

// function render() {
  
//   board.forEach(function(elem, idx) {
      
//       squares[idx].textContent = COLORS[elem];
//   });
//   if(!winner) {
//       message.textContent = `${COLORS[turn]}'s Turn`;
//   } else if(winner === "T") {
//       message.textContent = 'Tie Game!';
//   } else {
//       message.textContent = `${COLORS[winner]} Wins!`;

//   }
//   }