var cols, rows;
var w = 20;
var grid = [];
var start;
var targetCell;
var playDFSAnimation = false;

function setup(){
    createCanvas(400,400);
    cols = floor(width/w);
    rows = floor(height/w);
    frameRate(120);
    for(var j = 0; j < rows; j++){
        for(var i = 0; i < cols; i++){
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    whiteOutGrid();
    makeMazeButton = createButton("Make Maze");
    makeMazeButton.mousePressed(depthFirstRecursiveBacktracking);

    dfsButton = createButton("DFS");
    dfsButton.mousePressed(depthFirstSearchPathFinding);
}

function draw(){
    for(var i = 0; i < grid.length; i++){
        grid[i].show();
    }
    if(playDFSAnimation){
        DFSiter(targetCell);
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
