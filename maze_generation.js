var stack = [];

function depthFirstRecursiveBacktracking(){
    current.isWall = false;
    // Step 1
    var next = current.checkNeightbors();
    if(next){
        next.isWall = false;
        // Step 2
        stack.push(current);
        // Step 3
        removeWalls(current, next);
        // Step 4 
        current = next;
    }else if(stack.length > 0) {
        current = stack.pop();
    }
}

function removeWalls(a, b){
    var x = a.i - b.i;
    var y = a.j - b.j;
    console.log(a);
    console.log(b);
    console.log(x + ", " + y);
    if(x === 0 && y === 2){
        grid[index(a.i, a.j-1)].isWall = false;
    }else if (y === -2){
        grid[index(a.i, a.j+1)].isWall = false;
    }
    if(y === 0 && x === -2){
        grid[index(a.i+1, a.j)].isWall = false;
    }else if(x === 2){
        grid[index(a.i-1, a.j)].isWall = false;

    }


}