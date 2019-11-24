let stack = [];
let visited = [];

function depthFirstSearchPathFinding(){
    playDFSAnimation = true;
    startCell = grid[index(1,1)];
    targetCell = grid[index(rows-3,cols-3)];
    targetCell.red = true;
    stack.push(startCell);
}
function DFSiter(targetCell){
    if(stack.length > 0){
        current = stack.pop();
        current.highlightCell();
        current.green = true;
        if(current == targetCell){
            visited.push(current);
            noLoop();
            playDFSAnimation = false;
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