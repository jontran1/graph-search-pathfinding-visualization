
var stack;
var visited;
var queue;  

function depthFirstSearchPathFinding(){
    visited = []; stack = [];
    playDFSAnimation = true;
    startCell = grid[index(1,1)];
    targetCell = grid[index(rows-3,cols-3)];
    targetCell.red = true;
    stack.push(startCell);
}

function DFSiter(){
    if(stack.length > 0){
        current = stack.pop();
        current.highlightCell();
        current.green = true;

        if(current == targetCell){
            visited.push(current);
            playDFSAnimation = false;
            noLoop();
        }
        if(!visited.includes(current)){
            visited.push(current);
            adjacentCells = current.adjacentCells();
            if(adjacentCells){
                for(let i = 0; i < adjacentCells.length; i++){
                    stack.push(adjacentCells[i]);
                }
            }
        }
    }
}

function breadthFirstSearchPathFinding(){
    visited = []; stack = [];
    queue = new Queue(w*w);
    playBFSAnimation = true;
    startCell = grid[index(1,1)];
    targetCell = grid[index(rows-3,cols-3)];
    queue.enqueue(startCell); 
    targetCell.red = true;
}

function BFSiter(){
    if(queue.container.length > 0){
        current = queue.dequeue();
        current.highlightCell();
        current.green = true;
        if(current == targetCell){
            visited.push(current);
            noLoop();
            playBFSAnimation = false;
        }
        if(!visited.includes(current)){
            visited.push(current);
            adjacentCells = current.adjacentCells();
            if(adjacentCells){
                for(let i = 0; i < adjacentCells.length; i++){
                    queue.enqueue(adjacentCells[i]);
                }
            }
        }
    }
}

