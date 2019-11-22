var cols, rows;
var w = 10;
var grid = [];

function setup(){
    createCanvas(400,400);
    cols = floor(width/w);
    rows = floor(height/w);
    //frameRate(5);
    for(var j = 0; j < rows; j++){
        for(var i = 0; i < cols; i++){
            var cell = new Cell(i, j);
            // if(i == 0 || j == cols-1 || i == cols-1 || j == 0){
            //     cell.isWall=true;
            // }
            grid.push(cell);
        }
    }
    current = grid[0];
}

function draw(){
    background(51);
    for(var i = 0; i < grid.length; i++){
        grid[i].show();
    }
    depthFirstRecursiveBacktracking();
}

function mouseClicked(){
    let index = mouseIndex(mouseX, mouseY);
    if(index >= 0) {
        grid[index].isWall = !grid[index].isWall;
    }
}
