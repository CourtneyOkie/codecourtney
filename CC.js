$(document).ready(function(){
  $('div.gameboard').html(drawGameBoard(gameboard));
  $(document).keydown(keyPress);
})


var PAC = 'pacman',
    COI = 'coin',
    EMP = 'empty',
    BRK = 'brick';

var gameboard = [
  [BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK],
  [BRK, PAC, COI, COI, COI, COI, COI, COI, COI, COI, COI, COI, BRK, COI, BRK],
  [BRK, COI, COI, COI, COI, BRK, BRK, BRK, BRK, COI, COI, COI, BRK, COI, BRK],
  [BRK, BRK, BRK, BRK, COI, BRK, COI, COI, BRK, BRK, BRK, COI, COI, COI, BRK],
  [BRK, COI, COI, BRK, COI, BRK, COI, COI, BRK, COI, BRK, COI, BRK, COI, BRK],
  [BRK, COI, COI, BRK, BRK, BRK, COI, COI, BRK, COI, BRK, COI, BRK, BRK, BRK],
  [BRK, COI, COI, COI, COI, COI, COI, COI, COI, COI, COI, COI, COI, COI, BRK],
  [BRK, COI, COI, BRK, BRK, BRK, BRK, COI, BRK, COI, BRK, COI, COI, COI, BRK],
  [BRK, COI, COI, BRK, COI, COI, COI, COI, BRK, COI, BRK, COI, COI, COI, BRK],
  [BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK, BRK],
]

var pacmanLocation = {
  x: 1,
  y: 1
}

function keyPress(keystrokeEvent){

  // gameboard[pacmanLocation.y][pacmanLocation.x] = EMP;
  var newPacManLocation = {
    x: pacmanLocation.x,
    y: pacmanLocation.y
  }

  switch (keystrokeEvent.key) {
    case "ArrowDown":
      newPacManLocation.y += 1;
      break;
    case "ArrowUp":
      newPacManLocation.y -= 1;
      break;
    case "ArrowRight":
      newPacManLocation.x += 1;
      break;
    case "ArrowLeft":
      newPacManLocation.x -= 1;
      break;
    default:
      console.log("Non-arrow key pressed...")
  }

  if (gameboard[newPacManLocation.y][newPacManLocation.x] === BRK) {
    return;
  } else {
    gameboard[pacmanLocation.y][pacmanLocation.x] = EMP;
    pacmanLocation = newPacManLocation
    gameboard[pacmanLocation.y][pacmanLocation.x] = PAC;
  }


  $('div.gameboard').html(drawGameBoard(gameboard));
}



function drawGameBoard(grid){
  var outputStr = "";

  for( var rowIdx = 0; rowIdx < grid.length; rowIdx += 1){
    outputStr += "<div class='row'>"
    // Creating the cell
    for ( colIdx = 0; colIdx < grid[rowIdx].length; colIdx += 1) {
      outputStr += `<div class='cell ${grid[rowIdx][colIdx]}'></div>`
    }
    outputStr += "</div>"
  }
  return outputStr;
};
$(document).ready(function(){
    $("#nav").click(function(){
        $("li").hide();
    });
    $("#show").click(function(){
        $("li").show();
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}