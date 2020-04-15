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

    currentAlgorithmObject.runFunction = function(){
        if(dijkstra_path_finding()){
            getDijkstraPath();
        }
    }
}

/**
 * Performs the pathfinding from the startCell to the targetCell. 
 */
function dijkstra_path_finding(){
    if(Q.size > 0){
        // Get the index cell with the min distance.
        origin = getCellWithMinDistance(distance);

        /**
         * If origin is undefined. The remaining cells in Q set is inaccessible
         * meaning its impossible for the path to even access the cell. 
         * getCellWithMinDistance() can't find a cell that is in Q and has a min value.
         * and therefore the set should be cleared. 
         */
        if(!origin){
            Q.clear(); return;
        }else origin.highlightCell();

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

                if(distanceToAdjacent < distance.get(adjacentCell)){
                    distance.set(adjacentCell, distanceToAdjacent);
                    prev.set(adjacentCell, origin);
                }
            }
        }
        return false;
    }
    return true;
}

function getDijkstraPath(){
    dijkstra_setup();

    while(Q.size > 0){
        // Get the index cell with the min distance.
        origin = getCellWithMinDistance(distance);

        /**
         * If origin is undefined. The remaining cells in Q set is inaccessible
         * meaning its impossible for the path to even access the cell. 
         * getCellWithMinDistance() can't find a cell that is in Q and has a min value.
         * and therefore the set should be cleared. 
         */
        if(!origin){
            Q.clear(); break;
        }else origin.turnCellGrey();

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
function getCellWithMinDistance(map){
    tempMin = Number.MAX_VALUE;
    minCell = undefined;
    for(let[cell, dist] of map){
        if(Q.has(cell) && dist < tempMin){
            tempMin = dist;
            minCell = cell;
        }
    }
    return minCell;
}

function heuristic(cell){
    if(targetCell && cell) return getEuclideanDistance(cell, targetCell);
    return undefined;
}

var gScore;
var fScore;

function setupA_Star(){
    Q = new Set();
    prev = new Map();
    gScore = new Map();
    fScore = new Map();
    playA_StarAnimation = true;

    for(i = 0; i < grid.length; i++){
        cell = grid[i];
        if(!cell.isWall){
            // Set all distances to the largest possible value.
            gScore.set(cell, Infinity);
            fScore.set(cell, Infinity);
            // Set all previous to null.
            prev.set(cell, undefined);
            // Add cell to set.
            Q.add(cell);
        }
    }

    gScore.set(startCell, 0);
    fScore.set(startCell, heuristic(startCell));

    currentAlgorithmObject.runFunction = function(){
        if(aStarShortestPath()){
            this.runFunction = function() {
                console.log("Hello");
                getAStarShortestPath()
            };
        }
    }
}

function aStarShortestPath(){
    if(Q.size > 0){
        // Get the node with the lowest fScore value.
        current = getCellWithMinDistance(fScore);
        if(!current)return;
        current.highlightCell();
        if(current === targetCell){
            temp = targetCell;
            while(temp !== startCell){
                temp = prev.get(temp);
                if(!temp) return;
                if(temp !== startCell) temp.highlightCell();
            }
            return true;
        }

        // Remove origin from set Q.
        Q.forEach(function(cell){
            if(current.equals(cell)){
                Q.delete(cell);
            }
        })
        adjacentCells = current.adjacentCells();
        
        if(adjacentCells){
            for(i = 0; i < adjacentCells.length; i++){
                adjacentCell = adjacentCells[i];
                tentative_gScore = gScore.get(current) + getEuclideanDistance(current, adjacentCell);

                if(tentative_gScore < gScore.get(adjacentCell)){
                    prev.set(adjacentCell, current);
                    gScore.set(adjacentCell, tentative_gScore);
                    fScore.set(adjacentCell, gScore.get(adjacentCell) + heuristic(adjacentCell));
                    if(!Q.has(adjacentCell)){
                        Q.add(adjacentCell);
                    }
                }
            }
        }
        return false;
    }
    return true;
}

function getAStarShortestPath(){
    Q = new Set();
    prev = new Map();
    gScore = new Map();
    fScore = new Map();

    for(i = 0; i < grid.length; i++){
        cell = grid[i];
        if(!cell.isWall){
            // Set all distances to the largest possible value.
            gScore.set(cell, Infinity);
            fScore.set(cell, Infinity);
            // Set all previous to null.
            prev.set(cell, undefined);
            // Add cell to set.
            Q.add(cell);
        }
    }

    gScore.set(startCell, 0);
    fScore.set(startCell, heuristic(startCell));

    while(Q.size > 0){
        // Get the node with the lowest fScore value.
        current = getCellWithMinDistance(fScore);
        if(!current)return;
        current.turnCellGrey();
        if(current === targetCell){
            temp = targetCell;
            while(temp !== startCell){
                temp = prev.get(temp);
                if(!temp) return;
                if(temp !== startCell) temp.highlightCell();
            }
            return;
        }

        // Remove origin from set Q.
        Q.forEach(function(cell){
            if(current.equals(cell)){
                Q.delete(cell);
            }
        })
        adjacentCells = current.adjacentCells();
        
        if(adjacentCells){
            for(i = 0; i < adjacentCells.length; i++){
                adjacentCell = adjacentCells[i];
                tentative_gScore = gScore.get(current) + getEuclideanDistance(current, adjacentCell);

                if(tentative_gScore < gScore.get(adjacentCell)){
                    prev.set(adjacentCell, current);
                    gScore.set(adjacentCell, tentative_gScore);
                    fScore.set(adjacentCell, gScore.get(adjacentCell) + heuristic(adjacentCell));
                    if(!Q.has(adjacentCell)){
                        Q.add(adjacentCell);
                    }
                }
            }
        }
    }
}