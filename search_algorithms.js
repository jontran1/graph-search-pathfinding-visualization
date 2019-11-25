
function depthFirstSearchPathFinding(){
    visited = []; stack = [];
    playDFSAnimation = true;
    setupStartAndTarget();
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
    queue = new Queue(rows*cols);
    playBFSAnimation = true;
    setupStartAndTarget();
    queue.enqueue(startCell); 
    targetCell.red = true;
}

function BFSiter(){
    if(!queue.isEmpty()){
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

