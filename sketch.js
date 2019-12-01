var cols, rows;
var w = 10;
var grid = [];
var start;
var targetCell;
var playDFSAnimation = false;
var playBFSAnimation = false;
var playMazeGenerationAnimation = false;
var stack;
var visited;
var queue;  

var mouseOnTarget = false;
var draggingTarget = false;

var mouseOnStartingCell = false;
var draggingStartingCell = false;

function setup(){
    createCanvas(400,400);
    cols = floor(width/w);
    rows = floor(height/w);
    frameRate(20);
    for(var j = 0; j < rows; j++){
        for(var i = 0; i < cols; i++){
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    makeMazeButton = createButton("Make Maze");
    makeMazeButton.mousePressed(activateMazeGenerationDFS);

    dfsButton = createButton("DFS");
    dfsButton.mousePressed(depthFirstSearchPathFinding);

    bfsButton = createButton("BFS");
    bfsButton.mousePressed(breadthFirstSearchPathFinding);

    resetButton = createButton("Reset");
    resetButton.mousePressed(reset);

    setupStartAndTarget();
}

function draw(){
    console.log(grid[mouseIndex(mouseX, mouseY)]);

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
}

function mouseClicked(){
    let index = mouseIndex(mouseX, mouseY);
    if(index >= 0) {
        if(grid[index] == targetCell || grid[index] == startCell){
            return;
        }
        grid[index].isWall = !grid[index].isWall;
    }
}

function mouseDragged(){
    let index = mouseIndex(mouseX, mouseY);
    if(index < 0){return;}
    if(grid[index].isWall){
        return;
    }
    if(draggingTarget){
        setCell(targetCell);
        return;
    }
    if(draggingStartingCell){
        setCell(startCell);
        return;
    }
    grid[index].isWall = !grid[index].isWall;
    
}


function mousePressed(){
    if(mouseIsOnTarget()){
        draggingTarget = true;
        console.log("mouse clicked on target");
        console.log(grid[mouseIndex(mouseX, mouseY)]);
    }
    if(mouseIsOnStartingCell()){
        draggingStartingCell = true;
    }
}

function mouseReleased() {
    if(draggingTarget){
        if(setCell(targetCell)){
            draggingTarget=false;
            console.log(grid[mouseIndex(mouseX, mouseY)]);
        }
    }
    if(draggingStartingCell){
        if(setCell(startCell)){
            draggingStartingCell=false;
            console.log(grid[mouseIndex(mouseX, mouseY)]);
        }
    }
  }
  

function setupStartAndTarget(){
    startCell = grid[index(1,1)];
    startCell.green = true;
    targetCell = grid[index(rows-3,cols-3)];
    targetCell.red = true;
}

function setCell(cell){
    let index = mouseIndex(mouseX, mouseY);
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

function reset(){
    playDFSAnimation = false;
    playBFSAnimation = false;
    playMazeGenerationAnimation = false;
    resetGrid();
    setupStartAndTarget();
    loop();
}

function mouseIsOnTarget(){
    if(grid[mouseIndex(mouseX, mouseY)] == targetCell){
        return true;
    }
    return false;
}

function mouseIsOnStartingCell(){
    if(grid[mouseIndex(mouseX, mouseY)] == startCell){
        return true;
    }
    return false;
}

function dragTarget(){
    if(grid[mouseIndex(mouseX, mouseY)] == targetCell && mouseOnTarget){
        return true;
    }}

Array.min = function(array){
    return Math.min.apply(Math, array);
}




