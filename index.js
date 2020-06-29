var visualizeButton = document.getElementById("visualize");
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset);


function setVisualizeButtonAlgo(algorithm, algorithmName) {
    var oldVisualizeButton = visualizeButton;
    visualizeButton = oldVisualizeButton.cloneNode(true);
    oldVisualizeButton.parentNode.replaceChild(visualizeButton, oldVisualizeButton);
    visualizeButton.addEventListener("click", algorithm);
    visualizeButton.innerHTML = algorithmName;
}

const dfs_backtracking_maze_gen_button = document.getElementById("dfs-backtracking-maze-gen");
dfs_backtracking_maze_gen_button.addEventListener("click", () => {
    setVisualizeButtonAlgo(activateMazeGenerationDFS, dfs_backtracking_maze_gen_button.innerHTML);
});

const BFSButton = document.getElementById("BFSButton");
BFSButton.addEventListener("click", () => {
    setVisualizeButtonAlgo(breadthFirstSearchSetup, BFSButton.innerHTML);
});

const DFSButton = document.getElementById("DFSButton");
DFSButton.addEventListener("click", () => {
    setVisualizeButtonAlgo(depthFirstSearchSetup, DFSButton.innerHTML);
});

const dijkstraShortestPathButton = document.getElementById("dijkstraShortestPathButton");
dijkstraShortestPathButton.addEventListener("click", () => {
    setVisualizeButtonAlgo(dijkstra_setup, dijkstraShortestPathButton.innerHTML);
});

const aStarShortestPathButton = document.getElementById("aStarShortestPathButton");
aStarShortestPathButton.addEventListener("click", () => {
    setVisualizeButtonAlgo(setupA_Star, aStarShortestPathButton.innerHTML);
});

const greedyBestFirstSearchButton = document.getElementById("greedyBestFirstSearchButton");
greedyBestFirstSearchButton.addEventListener("click", () => {
    setVisualizeButtonAlgo(setupGreedyBestFirstSearch, greedyBestFirstSearchButton.innerHTML);
});

const biDirectionalSearchButton = document.getElementById("biDirectionalSearchButton");
biDirectionalSearchButton.addEventListener("click", () => {
    setVisualizeButtonAlgo(biDirectionalSetup, biDirectionalSearchButton.innerHTML);
})

const smallGridRadioButton = document.getElementById("smallGridRadioButton");
smallGridRadioButton.addEventListener("click", () => {
    drawCanvas(400);
    reset();
});

const mediumGridRadioButton = document.getElementById("mediumGridRadioButton");
mediumGridRadioButton.addEventListener("click", () => {
    drawCanvas(600);
    reset();
});

const largeGridRadioButton = document.getElementById("largeGridRadioButton");
largeGridRadioButton.addEventListener("click", () => {
    drawCanvas(800);
    reset();
});



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }