const visualizeButton = document.getElementById("visualize");
const dfs_backtracking_maze_gen_button = document.getElementById("dfs-backtracking-maze-gen");

dfs_backtracking_maze_gen_button.addEventListener("click", () => {
    visualizeButton.addEventListener("click", activateMazeGenerationDFS);
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", reset);


const BFSButton = document.getElementById("BFSButton");

BFSButton.addEventListener("click", () => {

});

