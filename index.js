var visualizeButton = document.getElementById("visualize");
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset);

function setVisualizeButtonAlgo(algorithm) {
    var oldVisualizeButton = visualizeButton;
    visualizeButton = oldVisualizeButton.cloneNode(true);
    oldVisualizeButton.parentNode.replaceChild(visualizeButton, oldVisualizeButton);
    visualizeButton.addEventListener("click", algorithm);
    visualizeButton.style.background=getRandomColor();
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

const aStarShortestPathButton = document.getElementById("aStarShortestPathButton");
aStarShortestPathButton.addEventListener("click", () => {
    setVisualizeButtonAlgo(setupA_Star);
});

const greedyBestFirstSearchButton = document.getElementById("greedyBestFirstSearchButton");
greedyBestFirstSearchButton.addEventListener("click", () => {
    setVisualizeButtonAlgo(setupGreedyBestFirstSearch);
});

const biDirectionalSearchButton = document.getElementById("biDirectionalSearchButton");
biDirectionalSearchButton.addEventListener("click", () => {
    setVisualizeButtonAlgo(biDirectionalSetup);
})
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }