/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
  * @desc This class represents the board, contains methods that checks board state, insert a symbol, etc..
  * @param {Array} state - an array representing the state of the board
*/
var Board = function () {
    //Initializing the board
    function Board() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['', '', '', '', '', '', '', '', ''];

        _classCallCheck(this, Board);

        this.state = state;
    }
    //Logs a visualised board with the current state to the console

    //Checks if board has no symbols yet


    _createClass(Board, [{
        key: 'isEmpty',
        value: function isEmpty() {
            return this.state.every(function (cell) {
                return !cell;
            });
        }
        //Check if board has no spaces available

    }, {
        key: 'isFull',
        value: function isFull() {
            return this.state.every(function (cell) {
                return cell;
            });
        }
        /**
         * Inserts a new symbol(x,o) into
         * @param {String} symbol 
         * @param {Number} position
         * @return {Boolean} boolean represent success of the operation
         */

    }, {
        key: 'insert',
        value: function insert(symbol, position) {
            if (position > 8 || this.state[position]) return false; //Cell is either occupied or does not exist
            this.state[position] = symbol;
            return true;
        }
        //Returns an array containing available moves for the current state

    }, {
        key: 'getAvailableMoves',
        value: function getAvailableMoves() {
            var moves = [];
            this.state.forEach(function (cell, index) {
                if (!cell) moves.push(index);
            });
            return moves;
        }
        /**
         * Checks if the board has a terminal state ie. a player wins or the board is full with no winner
         * @return {Object} an object containing the winner, direction of winning and row number
         */

    }, {
        key: 'isTerminal',
        value: function isTerminal() {
            //Return False if board in empty
            if (this.isEmpty()) return false;

            //Checking Horizontal Wins
            if (this.state[0] == this.state[1] && this.state[0] == this.state[2] && this.state[0]) {
                return { 'winner': this.state[0], 'direction': 'H', 'row': 1 };
            }
            if (this.state[3] == this.state[4] && this.state[3] == this.state[5] && this.state[3]) {
                return { 'winner': this.state[3], 'direction': 'H', 'row': 2 };
            }
            if (this.state[6] == this.state[7] && this.state[6] == this.state[8] && this.state[6]) {
                return { 'winner': this.state[6], 'direction': 'H', 'row': 3 };
            }

            //Checking Vertical Wins
            if (this.state[0] == this.state[3] && this.state[0] == this.state[6] && this.state[0]) {
                return { 'winner': this.state[0], 'direction': 'V', 'row': 1 };
            }
            if (this.state[1] == this.state[4] && this.state[1] == this.state[7] && this.state[1]) {
                return { 'winner': this.state[1], 'direction': 'V', 'row': 2 };
            }
            if (this.state[2] == this.state[5] && this.state[2] == this.state[8] && this.state[2]) {
                return { 'winner': this.state[2], 'direction': 'V', 'row': 3 };
            }

            //Checking Diagonal Wins
            if (this.state[0] == this.state[4] && this.state[0] == this.state[8] && this.state[0]) {
                return { 'winner': this.state[0], 'direction': 'D', 'row': 1 };
            }
            if (this.state[2] == this.state[4] && this.state[2] == this.state[6] && this.state[2]) {
                return { 'winner': this.state[2], 'direction': 'D', 'row': 2 };
            }

            //If no winner but the board is full, then it's a draw
            if (this.isFull()) {
                return { 'winner': 'draw' };
            }

            //return false otherwise
            return false;
        }
    }]);

    return Board;
}();

exports.default = Board;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Board = __webpack_require__(0);

var _Board2 = _interopRequireDefault(_Board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
  * @desc This class represents the computer player, contains a single method that uses minimax to get the best move
  * @param {Number} max_depth - limits the depth of searching
  * @param {Map} nodes_map - stores the heuristic values for each possible move
*/
var Player = function () {
	function Player() {
		var max_depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

		_classCallCheck(this, Player);

		this.max_depth = max_depth;
		this.nodes_map = new Map();
	}

	_createClass(Player, [{
		key: 'getBestMove',
		value: function getBestMove(board, alpha, beta) {
			var maximizing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
			var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
			var depth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

			//Throw an error if the first argument is not a board
			if (board.constructor.name !== "Board") throw 'The first argument to the getBestMove method should be an instance of Board class.';

			//clear nodes_map if the function is called for a new move
			if (depth == 0) this.nodes_map.clear();

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
			if (board.isTerminal() || depth == this.max_depth) {
				if (board.isTerminal().winner == 'x') {
					return 100 - depth;
				} else if (board.isTerminal().winner == 'o') {
					return -100 + depth;
				}
				return 0;
			}

			//Current player is maximizing
			if (maximizing) {
				//Initializ best to the lowest possible value
				var best = -100;
				//Loop through all empty cells
				var avail = board.getAvailableMoves();
				var loopvar1;
				for (loopvar1 = 0; loopvar1 < avail.length; loopvar1++) {
					//Initialize a new board with the current state (slice() is used to create a new array and not modify the original)
					var child = new _Board2.default(board.state.slice());
					//Create a child node by inserting the maximizing symbol x into the current emoty cell
					child.insert('x', avail[loopvar1]);

					//Recursively calling getBestMove this time with the new board and minimizing turn and incrementing the depth
					var node_value = this.getBestMove(child, alpha, beta, false, callback, depth + 1);
					//Updating best value
					best = Math.max(best, node_value);
					alpha = Math.max(alpha, best);
					if (alpha >= beta) {
						continue;
					}

					//If it's the main function call, not a recursive one, map each heuristic value with it's moves indicies
					if (depth == 0) {
						//Comma seperated indicies if multiple moves have the same heuristic value
						var moves = this.nodes_map.has(node_value) ? this.nodes_map.get(node_value) + ',' + avail[loopvar1] : avail[loopvar1];
						this.nodes_map.set(node_value, moves);
					}
				}
				//If it's the main call, return the index of the best move or a random index if multiple indicies have the same value
				if (depth == 0) {
					if (typeof this.nodes_map.get(best) == 'string') {
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

			if (!maximizing) {
				//Initialise best to the highest possible value
				var _best = 100;
				//Loop through all empty cells
				var avail2 = board.getAvailableMoves();
				var loopvar2;
				for (loopvar2 = 0; loopvar2 < avail2.length; loopvar2++) {
					//Initialize a new board with the current state (slice() is used to create a new array and not modify the original)
					var _child = new _Board2.default(board.state.slice());
					//Create a child node by inserting the minimizing symbol o into the current emoty cell
					_child.insert('o', avail2[loopvar2]);

					//Recursively calling getBestMove this time with the new board and maximizing turn and incrementing the depth
					var _node_value = this.getBestMove(_child, alpha, beta, true, callback, depth + 1);
					//Updating best value
					_best = Math.min(_best, _node_value);
					beta = Math.min(_best, beta);
					if (beta <= alpha) {
						continue;
					}

					//If it's the main function call, not a recursive one, map each heuristic value with it's moves indicies
					if (depth == 0) {
						//Comma seperated indicies if multiple moves have the same heuristic value
						var moves = this.nodes_map.has(_node_value) ? this.nodes_map.get(_node_value) + ',' + avail2[loopvar2] : avail2[loopvar2];
						this.nodes_map.set(_node_value, moves);
					}
				}
				//If it's the main call, return the index of the best move or a random index if multiple indicies have the same value
				if (depth == 0) {
					if (typeof this.nodes_map.get(_best) == 'string') {
						var arr = this.nodes_map.get(_best).split(',');
						var rand = Math.floor(Math.random() * arr.length);
						var ret = arr[rand];
					} else {
						ret = this.nodes_map.get(_best);
					}

					callback(ret);
					return ret;
				}
				//If not main call (recursive) return the heuristic value for next calculation
				return _best;
			}
		}
	}]);

	return Player;
}();

exports.default = Player;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Board = __webpack_require__(0);

var _Board2 = _interopRequireDefault(_Board);

var _Player = __webpack_require__(1);

var _Player2 = _interopRequireDefault(_Player);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//Helpers (from http://jaketrent.com/post/addremove-classes-raw-javascript/)
function hasClass(el, className) {
		if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
function addClass(el, className) {
		if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += " " + className;
}
function removeClass(el, className) {
		if (el.classList) el.classList.remove(className);else if (hasClass(el, className)) {
				var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
				el.className = el.className.replace(reg, ' ');
		}
}

/*
Helper function that takes the object returned from isTerminal() and adds a
class to the board that will handle drawing the winning line's animation
*/
function drawWinningLine(_ref) {
		var direction = _ref.direction,
		    row = _ref.row;

		var board = document.getElementById("board");
		board.className = '' + direction + row;
		setTimeout(function () {
				board.className += ' full';
		}, 50);
}

//Starts a new game with a certain depth and a starting_player of 1 if human is going to start, single player 
function newGame() {
		var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
		var starting_player = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
		var game_type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

		//Instantiating a new player and an empty board
		var p = new _Player2.default(parseInt(depth));
		var b = new _Board2.default(['', '', '', '', '', '', '', '', '']);
		var gametype = parseInt(game_type);
		//Clearing all #Board classes and populating cells HTML
		var board = document.getElementById("board");
		board.className = '';
		board.innerHTML = '<div class="cell-0"></div><div class="cell-1"></div><div class="cell-2"></div><div class="cell-3"></div><div class="cell-4"></div><div class="cell-5"></div><div class="cell-6"></div><div class="cell-7"></div><div class="cell-8"></div>';

		//Clearing all celebrations classes
		removeClass(document.getElementById("charachters"), 'celebrate_human'); //add celebrate human 1 and 2
		removeClass(document.getElementById("charachters"), 'celebrate_robot');

		//Storing HTML cells in an array
		var html_cells = [].concat(_toConsumableArray(board.children));

		//for single player
		if (gametype) {
				//Initializing some variables for internal use
				var starting = parseInt(starting_player),
				    maximizing = starting,
				    player_turn = starting;

				var move0 = -1;
				var cell_number = '';

				//If computer is going to start, choose center
				if (!starting) {
						//let center_and_corners = [0,2,4,6,8];
						//let first_choice = center_and_corners[Math.floor(Math.random()*center_and_corners.length)];
						var symbol = !maximizing ? 'x' : 'o';
						b.insert(symbol, 4);
						addClass(html_cells[4], symbol);
						player_turn = 1; //Switch turns
				}

				//Adding Click event listener for each cell on the board
				b.state.forEach(function (cell, index) {
						html_cells[index].addEventListener('click', function () {
								//If cell is already occupied or the board is in a terminal state or it's not humans turn, return false
								if (hasClass(html_cells[index], 'x') || hasClass(html_cells[index], 'o') || b.isTerminal() || !player_turn) return false;

								var symbol = maximizing ? 'x' : 'o'; //Maximizing player is always 'x'

								//Update the Board class instance as well as the Board UI
								b.insert(symbol, index);
								addClass(html_cells[index], symbol);

								//If it's a terminal move and it's not a draw, then human won
								if (b.isTerminal()) {
										var _b$isTerminal = b.isTerminal(),
										    winner = _b$isTerminal.winner;

										if (winner !== 'draw') addClass(document.getElementById("charachters"), 'celebrate_human');
										drawWinningLine(b.isTerminal());
								}
								player_turn = 0; //Switch turns

								//Get computer's best move and update the UI
								p.getBestMove(b, -100, 100, !maximizing, function (best) {
										var symbol = !maximizing ? 'x' : 'o';
										b.insert(symbol, best);
										addClass(html_cells[best], symbol);
										if (b.isTerminal()) {
												var _b$isTerminal2 = b.isTerminal(),
												    _winner = _b$isTerminal2.winner;

												if (_winner !== 'draw') addClass(document.getElementById("charachters"), 'celebrate_robot');
												drawWinningLine(b.isTerminal());
										}
										player_turn = 1; //Switch turns
								});

								//call get best move for the new board state for the hint
								p.getBestMove(b, -100, 100, maximizing, function (best) {
										move0 = best + 1;
								});
								//convert integer to string 
								cell_number = move0.toString();
								//update the UI with the hint for the best move
								document.getElementById("move").innerHTML = cell_number;
						}, false);
						if (cell) addClass(html_cells[index], cell);
				});
		}
		//for multiplayer
		else if (!gametype) {

						//make other buttons unclickable if multiplayer is chosen !?
						//Initializing some variables for internal use
						var currentPlayer = "x"; //stores player turns

						//Adding Click event listener for each cell
						b.state.forEach(function (cell, index) {
								html_cells[index].addEventListener('click', function () {
										//If cell is already occupied or the board is in a terminal state, return false
										if (hasClass(html_cells[index], 'x') || hasClass(html_cells[index], 'o') || b.isTerminal()) return false;

										var symbol = currentPlayer;

										//Update the Board class instance as well as the Board UI
										b.insert(symbol, index);
										addClass(html_cells[index], symbol);

										//change player turns
										currentPlayer = currentPlayer == "x" ? "o" : "x";

										//changes player's turn label text on bottom of the game 
										document.getElementById("player").innerHTML = currentPlayer.toUpperCase();

										//If it's a terminal move and it's not a draw, then X won
										if (b.isTerminal()) {
												var _b$isTerminal3 = b.isTerminal(),
												    winner = _b$isTerminal3.winner;

												if (winner !== 'draw') addClass(document.getElementById("charachters"), 'celebrate_human');
												drawWinningLine(b.isTerminal());
										}
								}, false);
								if (cell) addClass(html_cells[index], cell);
						});
				}
}

document.addEventListener("DOMContentLoaded", function (event) {

		//Start a new game when page loads with default values

		var depth = -1;
		var starting_player = 1; //human
		var game_type = 1; //singlePlayer
		newGame(depth, starting_player, game_type); //gametype argument

		//event listener for game type
		document.getElementById("game_type").addEventListener("click", function (event) {
				if (event.target.tagName !== "LI" || hasClass(event.target, 'active')) return;
				var game_type_choices = [].concat(_toConsumableArray(document.getElementById("game_type").children[0].children));
				game_type_choices.forEach(function (choice) {
						removeClass(choice, 'active');
				});
				addClass(event.target, 'active');
				game_type = event.target.dataset.value;
		}, false);

		//Events handlers for depth, starting player options
		document.getElementById("depth").addEventListener("click", function (event) {
				if (event.target.tagName !== "LI" || hasClass(event.target, 'active')) return;
				var depth_choices = [].concat(_toConsumableArray(document.getElementById("depth").children[0].children));
				depth_choices.forEach(function (choice) {
						removeClass(choice, 'active');
				});
				addClass(event.target, 'active');
				depth = event.target.dataset.value;
		}, false);

		document.getElementById("starting_player").addEventListener("click", function (event) {
				if (event.target.tagName !== "LI" || hasClass(event.target, 'active')) return;
				var starting_player_choices = [].concat(_toConsumableArray(document.getElementById("starting_player").children[0].children));
				starting_player_choices.forEach(function (choice) {
						removeClass(choice, 'active');
				});
				addClass(event.target, 'active');
				starting_player = event.target.dataset.value;
		}, false);

		document.getElementById("newgame").addEventListener('click', function () {
				newGame(depth, starting_player, game_type);
		});
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map