const visualizeButton = document.getElementById("visualize");
const dfs_backtracking_maze_gen_button = document.getElementById("dfs-backtracking-maze-gen");

dfs_backtracking_maze_gen_button.addEventListener("click", () => {
    console.log("clicked")
    visualizeButton.addEventListener("click", activateMazeGenerationDFS);
})

