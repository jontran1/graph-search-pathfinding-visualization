var cols, rows;
var w = 25;
var grid = [];
var startCell;
var targetCell;

var stack;
var visited;
var queue;  

var mouseOnTarget = false;
var draggingTargetCell = false;

var mouseOnStartingCell = false;
var draggingStartingCell = false;

var currentAlgorithmObject = {
    
    runFunction : function(){console.log("Its running")},

    setFunction: function(functionObject){
        this.runFunction = functionObject;
    }
}



function setup(){
    var canvas = createCanvas(500,500);
    frameRate(20);
    drawCanvas(600);
    
    canvas.parent('sketch-holder');

    // Commented out testing buttons for now....
    // makeMazeButton = createButton("Make Maze");
    // makeMazeButton.mousePressed(activateMazeGenerationDFS);

    // dfsButton = createButton("DFS");
    // dfsButton.mousePressed(depthFirstSearchSetup);

    // bfsButton = createButton("BFS");
    // bfsButton.mousePressed(breadthFirstSearchSetup);

    // dijkstraButton = createButton("Dijkstra Algorithm");
    // dijkstraButton.mousePressed(dijkstra_setup);

    // a_StarButton = createButton("A Star Algorithm");
    // a_StarButton.mousePressed(setupA_Star);

    // BFSGreedyPathButton = createButton("Greedy Best First Search Path Finding");
    // BFSGreedyPathButton.mousePressed(setupGreedyBestFirstSearch);

    // BFSGreedyPathButton = createButton("this is actually bi-directional search");
    // BFSGreedyPathButton.mousePressed(biDirectionalSetup);

    setupStartAndTarget();
}

/**
 * Continously is called by p5.js to constantly update the user
 * on what is happening on screen. 
 */
function draw(){
    
    updateGrid();

    currentAlgorithmObject.runFunction();
    
    startCell.turnCellGreen();
    targetCell.turnCellRed();
}

/**
 * Draws an nxn grid using the argument n. 
 * And sets up the new start and target nodes.
 * @param {Number} n 
 */
function drawCanvas(n){
    resizeCanvas(n, n);
    cols = floor(width/w);
    rows = floor(height/w);
    grid = [];
    for(var j = 0; j < rows; j++){
        for(var i = 0; i < cols; i++){
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }

    setupStartAndTarget();
}

/**
 * Updates the grid. 
 */
function updateGrid(){
    for(var i = 0; i < grid.length; i++){
        grid[i].show();
    }  
}

/**
 * Black outs the cell. Making the cell inaccessible.
 * If the user clicks on a start cell or target, the function simply
 * returns. 
 */
function mouseClicked(){

    let cell = grid[mouseIndex(mouseX, mouseY)];

    if(!cell) return;
    if(cell == targetCell || cell == startCell)return;
    if(draggingTargetCell || draggingStartingCell) return;
    cell.isWall = !cell.isWall;
}

/**
 * Function checks for startCell or targetCell dragging. 
 * If either of these cells are dragged over a wall, the function simply returns.
 * Else if the the startCell or targetCell is moved to a new location.
 */
function mouseDragged(){
    let cell = grid[mouseIndex(mouseX, mouseY)];
    if(!cell){
        return;
    }
    if(cell.isWall){
        return;
    }
    if(draggingTargetCell && cell != startCell){
        setCell(targetCell);
        return;
    }
    if(draggingStartingCell && cell != targetCell){
        setCell(startCell);
        return;
    }
    setTimeout((cell) => {cell.isWall = !cell.isWall;}, 10, cell);
    
}

/**
 * Everytime the user's performs a mouse click hold on a cell.
 * 
 */
function mousePressed(){
    if(mouseIsOnTarget()){
        draggingTargetCell = true;
    }
    if(mouseIsOnStartingCell()){
        draggingStartingCell = true;
    }
}

function mouseReleased(){
    let cell = grid[mouseIndex(mouseX, mouseY)];
    
    if(!cell) return;

    if(draggingTargetCell && cell != startCell && !cell.isWall){
        if(setCell(targetCell)){
            draggingTargetCell=false;
        }
    }
    if(draggingStartingCell && cell != targetCell && !cell.isWall){
        if(setCell(startCell)){
            draggingStartingCell=false;
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
    resetGrid();
    setupStartAndTarget();
    currentAlgorithmObject.runFunction = function(){console.log("Its running")};
}

/**
 * Resets entire grid. Clearing all walls.
 */
function resetGrid(){
    for(var i = 0; i < grid.length; i++){
        grid[i].resetCell();
    }
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




