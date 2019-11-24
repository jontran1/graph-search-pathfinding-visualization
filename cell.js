// Constructor for Cell object 
function Cell(i, j){
    this.i = i;
    this.j = j;
    this.isWall = true;//Math.random()>=0.5;
    this.green = false;
    this.red = false;

    var x = this.i*w;
    var y = this.j*w;
    this.show = function(){
        if(this.green){
            this.turnCellGreen();
        }else if(this.red){
            this.turnCellRed();
        }else if(this.isWall){
            fill(0);
            rect(x,y,w+2,w+2);
        }else{
            fill(color(255, 255, 255));
            rect(x,y,w,w);
        }
        // // Draw lines. Stroke(0) is the color.
        // stroke(color(0, 0, 0));
        // line(x, y, x + w, y);
        // line(x+w, y, x+w, y+w);
        // line(x+w, y+w, x, y+w);
        // line(x, y+w, x, y);
    }

    this.makeWall = function(){
        this.wall = !this.wall;
    }

    this.adjacentCells = function(){
        let neightbors = [];
        
        let top = grid[index(i,j-1)];
        let right = grid[index(i+1, j)];
        let bottom = grid[index(i, j+1)];
        let left = grid[index(i-1, j)];
        if(top && !top.isWall){
            neightbors.push(top);
        }
        if(right && !right.isWall){
            neightbors.push(right);
        }
        if(bottom && !bottom.isWall){
            neightbors.push(bottom);
        }
        if(left && !left.isWall){
            neightbors.push(left);
        }
        if(neightbors.length > 0){
            var r = floor(random(0, neightbors.length));
            return neightbors;
        }else {
            return undefined;
        }
    }

    this.turnCellRed = function(){
        fill(255,0,0);
        rect(x,y,w,w);      
    }
    
    this.highlightCell = function(){
        fill(255,0,255);
        rect(x,y,w,w);  
    }

    this.turnCellGreen = function(){
        fill(0,255,0);
        rect(x,y,w,w);
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