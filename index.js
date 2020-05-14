const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset);

function setVisualizeButtonAlgo(algorithm) {
    var visualizeButton = document.getElementById("visualize");
    var oldVisualizeButton = visualizeButton;
    visualizeButton = oldVisualizeButton.cloneNode(true);
    oldVisualizeButton.parentNode.replaceChild(visualizeButton, oldVisualizeButton);
    visualizeButton.addEventListener("click", algorithm);
    
}

const dfs_backtracking_maze_gen_button = document.getElementById("dfs-backtracking-maze-gen");
dfs_backtracking_maze_gen_button.addEventListener("click", () => {
    setVisualizeButtonAlgo(activateMazeGenerationDFS);
});

const BFSButton = document.getElementById("BFSButton");
BFSButton.addEventListener("click", () => {
    setVisualizeButtonAlgo(breadthFirstSearchSetup);
});

const DFSButton = document.getElementById("DFSButton");
DFSButton.addEventListener("click", () => {
    setVisualizeButtonAlgo(depthFirstSearchSetup);
});

const dijkstraShortestPathButton = document.getElementById("dijkstraShortestPathButton");
dijkstraShortestPathButton.addEventListener("click", () => {
    setVisualizeButtonAlgo(dijkstra_setup);
});