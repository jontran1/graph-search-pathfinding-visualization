var cols, rows;
var w = 20;
var grid = [];
var start;
var targetCell;
var playDFSAnimation = false;
var playBFSAnimation = false;
var playMazeGenerationAnimation = false;
let stack;
let visited;
let queue;  

function setup(){
    createCanvas(400,400);
    cols = floor(width/w);
    rows = floor(height/w);
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
        grid[index].isWall = !grid[index].isWall;
    }
}

function mouseDragged(){
    let index = mouseIndex(mouseX, mouseY);
    if(index >= 0) {
        grid[index].isWall = !grid[index].isWall;
    }
}

function setupStartAndTarget(){
    startCell = grid[index(1,1)];
    targetCell = grid[index(rows-3,cols-3)];
}

function reset(){
    playDFSAnimation = false;
    playBFSAnimation = false;
    playMazeGenerationAnimation = false;
    resetGrid();
    loop();
}

Array.min = function(array){
    return Math.min.apply(Math, array);
}


