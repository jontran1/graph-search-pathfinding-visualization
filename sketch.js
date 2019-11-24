var cols, rows;
var w = 20;
var grid = [];
var start;
var targetCell;
var playDFSAnimation = false;
var playBFSAnimation = false;
var playMazeGenerationAnimation = false;

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
    for(var i = 0; i < grid.length; i++){
        grid[i].show();
    }
    if(playMazeGenerationAnimation){
        depthFirstRecursiveBacktracking();
    }
    if(playDFSAnimation){
        DFSiter();
    }
    if(playBFSAnimation){
        BFSiter();
    }
    console.log(grid[mouseIndex(mouseX, mouseY)]);
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

function reset(){
    playDFSAnimation = false;
    playBFSAnimation = false;
    playMazeGenerationAnimation = false;
    resetGrid();
    loop();
}


