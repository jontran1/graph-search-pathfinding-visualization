var cols, rows;
var w = 5;
var grid = [];
var startingCell;
var targetCell;
function setup(){
    createCanvas(400,400);
    cols = floor(width/w);
    rows = floor(height/w);
    frameRate(1);
    for(var j = 0; j < rows; j++){
        for(var i = 0; i < cols; i++){
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    grid[index(1,1)].path = true;
    startingCell = grid[index(1,1)];
    targetCell = grid[index(rows-3,cols-3)];
    makeMazeButton = createButton("Make Maze");
    makeMazeButton.mousePressed(depthFirstRecursiveBacktracking);

    dfsButton = createButton("DFS");
    dfsButton.mousePressed(depthFirstSearchPathFinding);
}

function draw(){
    for(var i = 0; i < grid.length; i++){
        grid[i].show();
    }
}

function mouseClicked(){
    let index = mouseIndex(mouseX, mouseY);
    if(index >= 0) {
        grid[index].isWall = !grid[index].isWall;
    }
}
