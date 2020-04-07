var cols, rows;
var w = 25;
var grid = [];
var startCell;
var targetCell;

var playDFSAnimation = false;
var playBFSAnimation = false;
var playMazeGenerationAnimation = false;
var playDijkstraAnimation = false;
var playA_StarAnimation = false;

var stack;
var visited;
var queue;  

var mouseOnTarget = false;
var draggingTarget = false;

var mouseOnStartingCell = false;
var draggingStartingCell = false;

function setup(){
    var canvas = createCanvas(500,500);
    cols = floor(width/w);
    rows = floor(height/w);
    frameRate(60);
    for(var j = 0; j < rows; j++){
        for(var i = 0; i < cols; i++){
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }

    canvas.parent('sketch-holder');

    makeMazeButton = createButton("Make Maze");
    makeMazeButton.mousePressed(activateMazeGenerationDFS);

    dfsButton = createButton("DFS");
    dfsButton.mousePressed(depthFirstSearchPathFinding);

    bfsButton = createButton("BFS");
    bfsButton.mousePressed(breadthFirstSearchPathFinding);

    dijkstraButton = createButton("Dijkstra Algorithm");
    dijkstraButton.mousePressed(dijkstra_setup);

    a_StarButton = createButton("A Star Algorithm");
    a_StarButton.mousePressed(setupA_Star);

    resetButton = createButton("Reset");
    resetButton.mousePressed(reset);

    setupStartAndTarget();
}

/**
 * Continously is called by p5.js to constantly update the user
 * on what is happening on screen. 
 */
function draw(){
    //console.log(grid[mouseIndex(mouseX, mouseY)]);

    for(var i = 0; i < grid.length; i++){
        grid[i].show();
    }    
    if(playMazeGenerationAnimation){
        depthFirstRecursiveBacktracking();
        return;
    }
    if(playDFSAnimation){
        DFSiter();
        return;
    }
    if(playBFSAnimation){
        BFSiter();
        return;
    }
    if(playDijkstraAnimation){
        dijkstra_path_finding();
        return;
    }
    if(playA_StarAnimation){
        aStar();
        return;
    }
}

/**
 * Black outs the cell. Making the cell inaccessible.
 * If the user clicks on a start cell or target, the function simply
 * returns. 
 */
function mouseClicked(){
    if(playDijkstraAnimation) return;

    let index = mouseIndex(mouseX, mouseY);
    if(index >= 0) {
        if(grid[index] == targetCell || grid[index] == startCell){
            return;
        }
        grid[index].isWall = !grid[index].isWall;
    }
}

/**
 * Function checks for startCell or targetCell dragging. 
 * If either of these cells are dragged over a wall, the function simply returns.
 * Else if the the startCell or targetCell is moved to a new location.
 */
function mouseDragged(){
    let index = mouseIndex(mouseX, mouseY);
    let cell = grid[index];
    if(index < 0){
        return;
    }
    if(cell.isWall){
        return;
    }
    if(draggingTarget && cell != startCell){
        setCell(targetCell);
        return;
    }
    if(draggingStartingCell && cell != targetCell){
        setCell(startCell);
        return;
    }
    cell.isWall = !cell.isWall;
    
}

/**
 * Everytime the user's performs a mouse click hold on a cell.
 * 
 */
function mousePressed(){
    if(mouseIsOnTarget()){
        draggingTarget = true;
        console.log("mouse clicked on target");
        console.log(grid[mouseIndex(mouseX, mouseY)]);
    }
    if(mouseIsOnStartingCell() && !playDijkstraAnimation){
        draggingStartingCell = true;
    }
}

function mouseReleased(){
    let cell = grid[mouseIndex(mouseX, mouseY)];
    
    if(!cell) return;

    if(draggingTarget && !cell.isWall){
        if(setCell(targetCell)){
            draggingTarget=false;
            console.log(grid[mouseIndex(mouseX, mouseY)]);
        }
    }
    if(draggingStartingCell && !cell.isWall){
        if(setCell(startCell)){
            draggingStartingCell=false;
            console.log(grid[mouseIndex(mouseX, mouseY)]);
        }
    }
  }
  

function setupStartAndTarget(){
    if(startCell){startCell.resetCell();}
    if(targetCell){targetCell.resetCell();}

    startCell = grid[index(1,1)];
    startCell.green = true;
    targetCell = grid[index(rows-1,cols-1)];
    targetCell.red = true;
}

/**
 * Setting the targetCell and the startCell.
 * @param {Cell} cell 
 */
function setCell(cell){
    var index = mouseIndex(mouseX, mouseY);
    console.log(index)
    if(index >= 0){
        if(cell == targetCell){
            targetCell.resetCell();
            targetCell = grid[index];
            targetCell.red = true; 
            return true; 
        }else if(cell == startCell){
            startCell.resetCell();
            startCell = grid[index];
            startCell.green = true; 
            return true;
        }
 
    }
    return false;
}

/**
 * Resets the entire game. 
 */
function reset(){
    playDFSAnimation = false;
    playBFSAnimation = false;
    playMazeGenerationAnimation = false;
    playDijkstraAnimation = false;
    resetGrid();
    setupStartAndTarget();
    loop();
}

/**
 * Checks if mouse is on targetCell.
 */
function mouseIsOnTarget(){
    if(grid[mouseIndex(mouseX, mouseY)] == targetCell){
        return true;
    }
    return false;
}

/**
 * Checks if mouse is on startingCell.
 */
function mouseIsOnStartingCell(){
    if(grid[mouseIndex(mouseX, mouseY)] == startCell){
        return true;
    }
    return false;
}


function dragTarget(){
    if(grid[mouseIndex(mouseX, mouseY)] == targetCell && mouseOnTarget){
        return true;
    }
    return false;
}

Array.min = function(array){
    return Math.min.apply(Math, array);
}




