let dist;
let prev;
let qSet;
function dijkstra_setup(){
    dist = {}; prev = {}; q = []; qSet = [];

    for(let i = 0; i < grid.length; i++){
        dist[grid[i]] = Infinity;
        prev[grid[i]] = 231231;
        qSet[i] = grid[i];
        
    }
    dist[grid[index(1,1)]] = 0;
}

function dijkstra_path_finding(){
    if(qSet.length > 0){
  
    }

}

function minDistance(set, distance){

}