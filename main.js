
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



//       // const 
//       const sprite = {
//           "1" : "X",
//           "-1" : "O",
//           "null" : ''
//       };
//       const combo = [

//        [0,1,2],
//        [3,4,5],
//        [6,7,8],
//        [6,7,8],
//        [2,5,8],
//        [0,4,8],
//        [2,4,6],


//       ];
//       let board,turn,winner;

//       const message = document.querySelector(".h2")
//       const squares = document.querySelectorAll(".squares");

//  document.querySelector('button').addEventListener("click",init);
//  document.querySelector("game-board").addEventListener("click",handleMove);
//  function init (){
//      board = new Array(9).fill(null);
//      turn = 1;
//      winner = null;
//      render();
//  }
//  function handleMove(evt){
//    const moveIdx = parseInt(evt.target.dataset.square);
//    board[moveIdx] = turn;
//    turn *= -1;
//    winner = getWinner();
//      console.log(evt);

//  }

//  function render(){
//      board.forEach(function(elem,Idx){
//          squares[idx].textContent = sprite[elem];
     
         
//      });
//       getWinner(){
//         for(let i = 0, < combos.length){
//             if(math.abs(board[combos[i][0]] +
//                        (board[combos[i][1]] + 
//                        (board[combos[i][2]]) ===3) return board[combos[i][0]];
//         }
//          if(board.includes(null)) return null;
//          return "T"
// //       }

// //      if(!winner){
// //          message.textContent = "${sprite}'s turn "
// //      } else if (winner === "T"){
//          message.textContent " tie ";

// }


 // board = [null, null, null, null, null, null, null, null, null];
    //     // board = new Array(9).fill(null);
    //     turn = 1;
    //     winner = null;
    //     render();