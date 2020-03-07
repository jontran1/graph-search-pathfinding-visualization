var distance;
var prev;
var Q;

/**
 * Sets up the dijkstra's algorthim data structures needed.
 */
function dijkstra_setup(){
    playDijkstraAnimation = true;
    distance = new Map(); prev = new Map(); Q = new Set();

    for(i = 0; i < grid.length; i++){
        
        cell = grid[i];
        if(!cell.isWall){
            // Set all distances to the largest possible value.
            distance.set(cell, Infinity);
            // Set all previous to null.
            prev.set(cell, undefined);
            // Add cell to set.
            Q.add(cell);
        }

    }
    // Set the starting startCell distance to 0.
    distance.set(startCell, 0);
}

/**
 * Performs the pathfinding from the startCell to the targetCell. 
 */
function dijkstra_path_finding(){
    console.log(Q.size);
    if(Q.size > 0){
        // Get the index cell with the min distance.
        origin = getCellWithMinDistance();

        /**
         * If origin is undefined. The remaining cells in Q set is inaccessible
         * meaning its impossible for the path to even access the cell. 
         * getCellWithMinDistance() can't find a cell that is in Q and has a min value.
         * and therefore the set should be cleared. 
         */
        if(!origin){
            Q.clear(); return;
        }
        // Remove origin from set Q.
        Q.forEach(function(cell){
            if(origin.equals(cell)){
                Q.delete(cell);
            }
        })

        // for each neighbor v of u...
        adjacentCells = origin.adjacentCells();

        if(adjacentCells){
            for(i = 0; i < adjacentCells.length; i++){
                adjacentCell = adjacentCells[i];
                distanceToAdjacent = distance.get(origin) + getEuclideanDistance(origin, adjacentCell);
                adjacentCell.highlightCell();
                if(distanceToAdjacent < distance.get(adjacentCell)){
                    distance.set(adjacentCell, distanceToAdjacent);
                    prev.set(adjacentCell, origin);
                }
            }
        }
    }
    if(Q.size == 0){
        temp = targetCell;
        while(temp !== startCell){
            temp = prev.get(temp);
            if(!temp) return;
            if(temp !== startCell) temp.highlightCell();
        }
    }
}

/**
 * Calcualate the distance between u and v cells.
 * Uses the euclidean distance formula.
 * @param {Cell} u 
 * @param {Cell} v 
 */
function getEuclideanDistance(u, v){
    return Math.sqrt(Math.pow(u.i - v.i, 2) + Math.pow(u.j - v.j,2));
}

/**
 * Uses a linear search to find the min dsitance. 
 * Should consider getting better performance with a min heap data structure. 
 */
function getCellWithMinDistance(){
    tempMin = Number.MAX_VALUE;
    minCell = undefined;
    for(let[cell, dist] of distance){
        if(Q.has(cell) && dist < tempMin){
            tempMin = dist;
            minCell = cell;
        }
    }
    return minCell;
}