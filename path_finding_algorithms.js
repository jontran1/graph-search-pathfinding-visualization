let dist;
let prev;
let qSet;
function dijkstra_setup(){
    dist = []; prev = []; q = []; qSet = [];

    for(let i = 0; i < grid.length; i++){
        dist.push(grid[i]);
        set['dist.' + dist.indexOf(grid[i])] = Number.MAX_VALUE;        
        prev[grid[i]] = 231231;
        qSet[i] = grid[i];
        
    }
    dist['one'] = Number.MAX_VALUE;;
    dist[grid[index(1,1)]] = 0;
    console.log(dist[grid[4]]);
    dijkstra_path_finding()
}

function dijkstra_path_finding(){
    if(qSet.length > 0){
        
    }

}

function minDistance(set, distance){

}