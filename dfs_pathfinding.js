function DFSiter(){
    if(stack.length > 0){
        current = stack.pop();
        current.highlight();
        if(current == targetCell){
            current.visited = true;
            // Fills in the color red at target.
            fill(255,0,0);
            rect(current.i*w,current.j*w,w,w);
            noLoop();
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