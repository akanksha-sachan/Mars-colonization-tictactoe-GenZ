

import Board from './classes/Board';
import Player from './classes/Player';
import './style.scss';

var bestmov;
//Helpers (from http://jaketrent.com/post/addremove-classes-raw-javascript/)
function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className);
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
function addClass(el, className) {
  if (el.classList)
    el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
}
function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className=el.className.replace(reg, ' ');
  }
}

/*
Helper function that takes the object returned from isTerminal() and adds a
class to the board that will handle drawing the winning line's animation
*/
function drawWinningLine({ direction, row }) {
	let board = document.getElementById("board");
	board.className = `${direction}${row}`;
	setTimeout(() => { board.className += ' full'; }, 50);
}


//Starts a new game with a certain depth and a starting_player of 1 if human is going to start
function newGame(depth = -1, starting_player = 1) {
	//Instantiating a new player and an empty board
	let p = new Player(parseInt(depth));
	let b = new Board(['','','','','','','','','']);

	//Clearing all #Board classes and populating cells HTML
	let board = document.getElementById("board");
	board.className = '';
	board.innerHTML = '<div class="cell-0"></div><div class="cell-1"></div><div class="cell-2"></div><div class="cell-3"></div><div class="cell-4"></div><div class="cell-5"></div><div class="cell-6"></div><div class="cell-7"></div><div class="cell-8"></div>';

	//Clearing all celebrations classes
	removeClass(document.getElementById("charachters"), 'celebrate_human');
	removeClass(document.getElementById("charachters"), 'celebrate_robot');

	//Storing HTML cells in an array
	let html_cells = [...board.children];

	//Initializing some variables for internal use
	let starting = parseInt(starting_player),
		maximizing = starting,
		player_turn = starting;

	//If computer is going to start, choose a random cell as long as it is the center or a corner
	if(!starting) {

		let symbol = !maximizing ? 'x' : 'o';
		b.insert(symbol, 4);
		addClass(html_cells[4], symbol);
		player_turn = 1; //Switch turns
	}

	//Adding Click event listener for each cell
  	b.state.forEach((cell, index) =>
  	{
  		html_cells[index].addEventListener('click', () =>
  		{
  			//If cell is already occupied or the board is in a terminal state or it's not humans turn, return false
  			if(hasClass(html_cells[index], 'x') || hasClass(html_cells[index], 'o') || b.isTerminal() || !player_turn) return false;

  			let symbol = maximizing ? 'x' : 'o'; //Maximizing player is always 'x'

  			//Update the Board class instance as well as the Board UI
  			b.insert(symbol, index);
  			addClass(html_cells[index], symbol);

  			//If it's a terminal move and it's not a draw, then human won
  			if(b.isTerminal()) {
  				let { winner } = b.isTerminal();
				if(winner !== 'draw') addClass(document.getElementById("charachters"), 'celebrate_human');
  				drawWinningLine(b.isTerminal());
  			}

  			player_turn = 0; //Switch turns


  			//Get computer's best move and update the UI




  			//Checking for horizontal wins
  			bestmov = 100;
  			var lv1=0;

  			for (lv1=0; lv1<9;lv1++)
  			{
  				if( b.state[lv1] == b.state[lv1 + 1] && b.state[lv1] )
  				{
  		      		if( lv1==0 || lv1==3 || lv1==6 && (b.state[lv1 + 2]=='') )
  		      		{
  		      			bestmov = lv1 + 2;
  					}

  		      		if( lv1==1 || lv1==4 || lv1==7 &&  (b.state[lv1 - 1]=='') )
  		      		{
  		      			bestmov = lv1 - 1;
  		      		}
		        }

		        if( b.state[lv1] == b.state[lv1 + 2] && b.state[lv1] && (b.state[lv1+1]=='') )
  				{
  		      		if( lv1==0 || lv1==3 || lv1==6)
  		      		{
  		      			bestmov = lv1 + 1;
  		      		}
  		      	}
  			}


  		    //Checking for vertical wins

  		    var lv2 = 0;

  		    for (lv2=0; lv1<3;lv1++)
  			{
  				if( b.state[lv1] == b.state[lv1 + 3] && b.state[lv1] && (b.state[lv1+6]==''))
  				{
  		         	bestmov = lv1 + 6;
  				}

		        if( b.state[lv1] == b.state[lv1 + 6] && b.state[lv1] && (b.state[lv1+3]==''))
  				{
  		      		bestmov = lv1 + 3;
  		      	}
  			}

  		    if(b.state[3] == b.state[6] && b.state[3] && (b.state[0]==''))
  		    {
  		      	bestmov = 0;
  		    }

  		    if(b.state[4] == b.state[7] && b.state[4] && (b.state[1]==''))
  		    {
  		      	bestmov = 1;
  		    }

  		    if(b.state[5] == b.state[8] && b.state[5] && (b.state[2]==''))
  		    {
  		      	bestmov = 2;
  		    }

  		    //Checking for diagonal wins

  		    if(b.state[0] == b.state[4] && b.state[0] && (b.state[8]=='')) {
  		          bestmov = 8;
  		    }
  		    if(b.state[0] == b.state[8] && b.state[0] && (b.state[4]=='')) {
  		          bestmov = 4;
  		    }
  		    if(b.state[4] == b.state[8] && b.state[4] && (b.state[0]=='')) {
  		          bestmov = 0;
  		    }
  		    if(b.state[2] == b.state[4] && b.state[2] && (b.state[6]=='')) {
  		          bestmov = 6;
  		    }
  		    if(b.state[2] == b.state[6] && b.state[2] && (b.state[4]=='')) {
  		          bestmov = 4;
  		    }
  		    if(b.state[4] == b.state[6] && b.state[4] && (b.state[2]=='')) {
  		          bestmov = 2;
  		    }

  		    if(bestmov!=100)
  		    {

  		    	let symbol = !maximizing ? 'x' : 'o';
  		    	b.insert(symbol, bestmov);
  				addClass(html_cells[ bestmov ], symbol);

  				if(b.isTerminal())
  				{
	  				let { winner } = b.isTerminal();
					if(winner !== 'draw') addClass(document.getElementById("charachters"), 'celebrate_robot');
	  				drawWinningLine(b.isTerminal());
	  			}

  				player_turn = 1; //Switch turns


  		    }



  			if(bestmov == 100)
  			{
  				p.getBestMove(b, -100, 100, !maximizing, best =>
  				{

  					let symbol = !maximizing ? 'x' : 'o';
  					b.insert(symbol, best);
  					addClass(html_cells[best], symbol);

  					if(b.isTerminal()) 
  					{
	  					let { winner } = b.isTerminal();
						if(winner !== 'draw') addClass(document.getElementById("charachters"), 'celebrate_robot');
	  					drawWinningLine(b.isTerminal());
	  				}

  					player_turn = 1; //Switch turns
  				});
  			}
  			bestmov = 100;

  		}, false);
  		if(cell) addClass(html_cells[index], cell);
  	});
}

document.addEventListener("DOMContentLoaded", event => {

	//Start a new game when page loads with default values
	let depth = -1;
	let starting_player = 1;
	newGame(depth, starting_player);


	//Events handlers for depth, starting player options
	document.getElementById("depth").addEventListener("click", (event) => {
		if(event.target.tagName !== "LI" || hasClass(event.target, 'active')) return
		let depth_choices = [...document.getElementById("depth").children[0].children];
		depth_choices.forEach((choice) => {
			removeClass(choice, 'active');
		});
		addClass(event.target, 'active');
		depth = event.target.dataset.value;
	}, false);

	document.getElementById("starting_player").addEventListener("click", (event) => {
		if(event.target.tagName !== "LI" || hasClass(event.target, 'active')) return
		let starting_player_choices = [...document.getElementById("starting_player").children[0].children];
		starting_player_choices.forEach((choice) => {
			removeClass(choice, 'active');
		});
		addClass(event.target, 'active');
		starting_player = event.target.dataset.value;
	}, false);

	document.getElementById("newgame").addEventListener('click', () => {
		newGame(depth, starting_player);
	});

});
