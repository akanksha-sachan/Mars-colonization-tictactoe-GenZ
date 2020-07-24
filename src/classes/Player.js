import Board from './Board';

/**
  * @desc This class represents the computer player, contains a single method that uses minimax to get the best move
  * @param {Number} max_depth - limits the depth of searching
  * @param {Map} nodes_map - stores the heuristic values for each possible move
*/
class Player {
	constructor(max_depth = -1) {
        this.max_depth = max_depth;
        this.nodes_map = new Map();
    }
    
	getBestMove(board, alpha, beta, maximizing = true, callback = () => {}, depth = 0)
	{
		//Throw an error if the first argument is not a board
		if(board.constructor.name !== "Board") throw('The first argument to the getBestMove method should be an instance of Board class.');
		
		//clear nodes_map if the function is called for a new move
		if(depth == 0) this.nodes_map.clear();

		// //Checking for horizontal wins
		// 	var bestmov = 100;
  			
  // 			var lv1=0;
  			
  // 			for (lv1=0; lv1<9;lv1++)
  // 			{
  // 				if( board.state[lv1] == board.state[lv1 + 1] && board.state[lv1] ) 
  // 				{
  // 		      		if( lv1==0 || lv1==3 || lv1==6 && (board.state[lv1 + 2]=='') )
  // 		      		{
  // 		      			bestmov =  (lv1 + 2);
  // 		      			callback(bestmov);
  // 		      			return bestmov;
  // 					}

  // 		      		if( lv1==1 || lv1==4 || lv1==7 &&  (board.state[lv1 - 1]=='') )
  // 		      		{
  // 		      			bestmov =  (lv1 - 1);	
  // 		      			callback(bestmov);
  // 		      			return bestmov;
  // 		      		}
		//         }

		//         if( board.state[lv1] == board.state[lv1 + 2] && board.state[lv1] && (board.state[lv1+1]=='') ) 
  // 				{
  // 		      		if( lv1==0 || lv1==3 || lv1==6)
  // 		      		{
  // 		      			bestmov =  (lv1 + 1);
  // 		      			callback(bestmov);
  // 		      			return bestmov;
  // 		      		}
  // 		      	}
  // 			}		      
  		      

  // 		    //Checking for vertical wins

  // 		    var lv2 = 0;

  // 		    for (lv2=0; lv1<3;lv1++)
  // 			{
  // 				if( board.state[lv1] == board.state[lv1 + 3] && board.state[lv1] && (board.state[lv1+6]=='')) 
  // 				{
  // 		         	bestmov =  (lv1 + 6);
  // 		         	callback(bestmov);
  // 		      		return bestmov;
  // 				}

		//         if( board.state[lv1] == board.state[lv1 + 6] && board.state[lv1] && (board.state[lv1+3]=='')) 
  // 				{
  // 		      		bestmov =  (lv1 + 3); 
  // 		      		callback(bestmov);
  // 		      		return bestmov; 		      				      		
  // 		      	}
  // 			}
  		      
  // 		    if(board.state[3] == board.state[6] && board.state[3] && (board.state[0]==''))
  // 		    {
  // 		      	bestmov =  0; 
  // 		      	callback(bestmov);
  // 		      	return bestmov;		          
  // 		    }

  // 		    if(board.state[4] == board.state[7] && board.state[4] && (board.state[1]==''))
  // 		    {
  // 		      	bestmov =  1;
  // 		      	callback(bestmov);
  // 		      	return bestmov;	  		          
  // 		    }

  // 		    if(board.state[5] == board.state[8] && board.state[5] && (board.state[2]==''))
  // 		    {
  // 		      	bestmov =  2;
  // 		      	callback(bestmov);
  // 		      	return bestmov;	  		          
  // 		    }       
  		    
  // 		    //Checking for diagonal wins  		    

  // 		    if(board.state[0] == board.state[4] && board.state[0] && (board.state[8]=='')) {
  // 		          bestmov =  8;
  // 		          callback(bestmov);
  // 		      	return bestmov;	
  // 		    }
  // 		    if(board.state[0] == board.state[8] && board.state[0] && (board.state[4]=='')) {
  // 		          bestmov =  4;
  // 		          callback(bestmov);
  // 		      	return bestmov;	
  // 		    }
  // 		    if(board.state[4] == board.state[8] && board.state[4] && (board.state[0]=='')) {
  // 		          bestmov =  0;
  // 		          callback(bestmov);
  // 		      	return bestmov;	
  // 		    }
  // 		    if(board.state[2] == board.state[4] && board.state[2] && (board.state[6]=='')) {
  // 		          bestmov =  6;
  // 		          callback(bestmov);
  // 		      	return bestmov;	
  // 		    }
  // 		    if(board.state[2] == board.state[6] && board.state[2] && (board.state[4]=='')) {
  // 		          bestmov =  4;
  // 		          callback(bestmov);
  // 		      	return bestmov;	
  // 		    }
  // 		    if(board.state[4] == board.state[6] && board.state[4] && (board.state[2]=='')) {
  // 		          bestmov =  2;
  // 		          callback(bestmov);
  // 		      	return bestmov;	 
  // 		    }

		//If the board state is a terminal one, return the heuristic value
		if(board.isTerminal() || depth == this.max_depth ) {
			if(board.isTerminal().winner == 'x') {
				return 100 - depth;
			} else if (board.isTerminal().winner == 'o') {
				return -100 + depth;
			}
			return 0;
		}
		
		//Current player is maximizing
		if(maximizing) 
		{
			//Initializ best to the lowest possible value
			let best = -100;
			//Loop through all empty cells
			var avail = board.getAvailableMoves(); 
			var loopvar1;
			for (loopvar1 = 0; loopvar1 < avail.length; loopvar1++)
			{
				//Initialize a new board with the current state (slice() is used to create a new array and not modify the original)
				let child = new Board(board.state.slice());
				//Create a child node by inserting the maximizing symbol x into the current emoty cell
				child.insert('x', avail[loopvar1]);				

				//Recursively calling getBestMove this time with the new board and minimizing turn and incrementing the depth
				let node_value = this.getBestMove(child, alpha, beta, false, callback, depth + 1);
				//Updating best value
				best = Math.max(best, node_value);
				alpha = Math.max(alpha, best);
				if(alpha >= beta)
				{
					continue;
				}

				//If it's the main function call, not a recursive one, map each heuristic value with it's moves indicies
				if(depth == 0) {
					//Comma seperated indicies if multiple moves have the same heuristic value
					var moves = this.nodes_map.has(node_value) ? `${this.nodes_map.get(node_value)},${avail[loopvar1]}` : avail[loopvar1];
					this.nodes_map.set(node_value, moves);
				}


			}
			//If it's the main call, return the index of the best move or a random index if multiple indicies have the same value
			if(depth == 0) {
				if(typeof this.nodes_map.get(best) == 'string') {
					var arr = this.nodes_map.get(best).split(',');
					var rand = Math.floor(Math.random() * arr.length);
					var ret = arr[rand];
				} else {
					ret = this.nodes_map.get(best);
				}
				
				//run a callback after calculation and return the index
				callback(ret);
				return ret;
			}
			//If not main call (recursive) return the heuristic value for next calculation
			return best;
		}

		if(!maximizing) {
			//Initialise best to the highest possible value
			let best = 100;
			//Loop through all empty cells
			var avail2 = board.getAvailableMoves();
			var loopvar2;
			for (loopvar2 = 0; loopvar2 < avail2.length; loopvar2++)
			{
				//Initialize a new board with the current state (slice() is used to create a new array and not modify the original)
				let child = new Board(board.state.slice());
				//Create a child node by inserting the minimizing symbol o into the current emoty cell
				child.insert('o', avail2[loopvar2]);				

				//Recursively calling getBestMove this time with the new board and maximizing turn and incrementing the depth
				let node_value = this.getBestMove(child, alpha, beta, true, callback, depth + 1);
				//Updating best value
				best = Math.min(best, node_value);
				beta = Math.min(best, beta);
				if(beta <= alpha) {
					continue;
				}				

				//If it's the main function call, not a recursive one, map each heuristic value with it's moves indicies
				if(depth == 0) {
					//Comma seperated indicies if multiple moves have the same heuristic value
					var moves = this.nodes_map.has(node_value) ? this.nodes_map.get(node_value) + ',' + avail2[loopvar2] : avail2[loopvar2];
					this.nodes_map.set(node_value, moves);
				}

			}
			//If it's the main call, return the index of the best move or a random index if multiple indicies have the same value
			if(depth == 0) {
				if(typeof this.nodes_map.get(best) == 'string') {
					var arr = this.nodes_map.get(best).split(',');
					var rand = Math.floor(Math.random() * arr.length);
					var ret = arr[rand];
				} else {
					ret = this.nodes_map.get(best);
				}

				callback(ret);
				return ret;
			}
			//If not main call (recursive) return the heuristic value for next calculation
			return best;
		}

	}
}

export default Player;