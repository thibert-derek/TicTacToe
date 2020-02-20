"use strict";
/*
	WEB 230
	Assignment 8
	{Derek Thibert}
*/


var playerX = document.querySelector("#X");
playerX.classList.add('current-player');
var playerO = document.querySelector("#O");
//playerO.classList.add('current-player');

function move(event){
    var square = document.querySelector(".current-player").id;
    var player = event.target;
    console.log("Your move. " + square);
    playerX.classList.toggle('current-player');
    playerO.classList.toggle('current-player');
    if (square == "X") {
        player.classList.add("X-marker");
    }
    else {
        player.classList.add("O-marker");
    }
    player.removeEventListener("click", move);
    checkWin(square + "-marker");
}

var cell = document.querySelectorAll('td');
for (var i = 0; i<cell.length; i++){
    cell[i].addEventListener("click", move);
}

var wins = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8], [2, 4, 6] ];
function checkWin(player1) {
    console.log()
    var grid = Array.from(cell, function(quad){
        return quad.classList.contains(player1);
});
    for (var win of wins) {
        if (grid[win[0]] && grid[win[1]] && grid[win[2]]){
            for (var sq of win) {
              cell[sq].style.backgroundColor = "lightgreen";
            }
            for (var sq = 0; sq < 9; sq++){
            cell[sq].removeEventListener("click", move);
                       }
            alert(player1 + " Wins!");
            return true;
        }
    }
    return false;
}

function reset(){
    for (var i = 0; i < cell.length; i++){
        cell[i].removeAttribute("class");
        cell[i].style.backgroundColor = "transparent";
        for (var sq = 0; sq < 9; sq++){
        cell[sq].addEventListener("click", move);
        }
        playerO.classList.toggle('current-player');
        playerX.classList.toggle('current-player');
 }
}
var reset2 =
document.querySelector(".button");
reset2.addEventListener("click", reset);
