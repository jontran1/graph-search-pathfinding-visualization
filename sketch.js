var cols, rows;
var w = 20;
var grid = [];

function setup(){
    createCanvas(400,400);
    cols = floor(width/w);
    rows = floor(height/w);
    //frameRate(5);
    for(var j = 0; j < rows; j++){
        for(var i = 0; i < cols; i++){
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    makeMazeButton = createButton("Make Maze");
    makeMazeButton.mousePressed(depthFirstRecursiveBacktracking);
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
