// Constructor for Cell object 
function Cell(i, j){
    this.i = i;
    this.j = j;
    this.isWall = true;//Math.random()>=0.5;
    this.startingCell = false;

    this.show = function(){
        var x = this.i*w;
        var y = this.j*w;
        if(this.startingCell){
            fill(0,255,0);
            rect(x,y,w,w);
        }else if(this.isWall){
            fill(0);
            rect(x,y,w,w);
        }else{
            fill(color(255, 255, 255));
            rect(x,y,w,w);
        }
        // Draw lines. Stroke(0) is the color.
        stroke(color(0, 0, 0));
        line(x, y, x + w, y);
        line(x+w, y, x+w, y+w);
        line(x+w, y+w, x, y+w);
        line(x, y+w, x, y);
    }

    this.makeWall = function(){
        this.wall = !this.wall;
    }

    this.checkNeightbors = function(){
        var neightbors = [];
        
        var top = grid[index(i,j-2)];
        var right = grid[index(i+2, j)];
        var bottom = grid[index(i, j+2)];
        var left = grid[index(i-2, j)];
        if(top && top.isWall){
            neightbors.push(top);
        }
        if(right && right.isWall){
            neightbors.push(right);

        }
        if(bottom && bottom.isWall){
            neightbors.push(bottom);
        }
        if(left && left.isWall){
            neightbors.push(left);
        }
        if(neightbors.length > 0){
            var r = floor(random(0, neightbors.length));
            return neightbors[r];
        }else {
            return undefined;
        }
    }
}


function mouseIndex(mouseCorX, mouseCorY){
    let i = 0;
    let j = 0;
    let pixelX = 0;
    let pixelY = 0;
    while(pixelX < mouseCorX){
        pixelX += w;
        i++;
    }
    while(pixelY < mouseCorY){
        pixelY += w;
        j++;
    }
    return index(i-1, j-1);

}

function index(i, j){
    if(i < 1 || j < 1 || i >= cols-1 || j >= rows-1){
        return -1;
    }
    return i + j * cols;
}
