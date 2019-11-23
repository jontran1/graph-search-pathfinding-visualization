function depthFirstSearchPathFinding(){
    DFSiter(startingCell, grid);
}

function DFS(cell){
    cell.visited = true;
    var next = cell.adjacentCells();
    if(next && !next.visited){
        DFS(next, grid);

        if(next == targetCell){
            console.log("Target found");
            console.log(targetCell);
            return;
        }
    }
    return;
}

function DFSiter(cell){
    let stack = [];
    stack.push(cell);
    while(stack.length > 0){
        current = stack.pop();
        if(current == targetCell){
            current.visited = true;
            return;
        }
        if(!current.visited){
            current.visited = true;
            adjacentCells = current.adjacentCells();
            if(adjacentCells){
                for(let i = 0; i < adjacentCells.length; i++){
                    stack.push(adjacentCells[i]);
                }
            }
        }
    }

}