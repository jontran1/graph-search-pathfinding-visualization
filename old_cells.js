
// // Constructor for Cell object 
// function Cell(i, j){
//     this.i = i;
//     this.j = j;
//     // top, right, bottom, left
//     this.walls = [true, true, true, true];
//     this.visited = false;

//     this.checkNeightbors = function(){
//         var neightbors = [];
        
//         var top = grid[index(i, j-1)];
//         var right = grid[index(i+1, j)];
//         var bottom = grid[index(i, j+1)];
//         var left = grid[index(i-1,j)];

//         if(top && !top.visited){
//             neightbors.push(top);
//         }
//         if(right && !right.visited){
//             neightbors.push(right);
//         }
//         if(bottom && !bottom.visited){
//             neightbors.push(bottom);
//         }
//         if(left && !left.visited){
//             neightbors.push(left);
//         }  
//         if(neightbors.length > 0){
//             var r = floor(random(0, neightbors.length));
//             return neightbors[r];
//         }else {
//             return undefined;
//         }
//     }
//     this.highlight = function(){
//         var x = this.i*w;
//         var y = this.j*w;
//         noStroke();
//         fill(0, 0, 255, 100);
//         rect(x, y, w, w);

//     }

//     stroke(255);
//     this.show = function(){
//         var x = this.i*w;
//         var y = this.j*w;
//         stroke(255);
//         if(this.walls[0]){
//             line(x, y, x + w, y);
//         }
//         if(this.walls[1]){
//             line(x+w, y, x+w, y+w);
//         }
//         if(this.walls[2]){
//             line(x+w, y+w, x, y+w);
//         }
//         if(this.walls[3]){
//             line(x, y+w, x, y);
//         }
        
//         if(this.visited){
//             noStroke();
//             fill(255, 0, 255, 100);
//             rect(x,y,w,w);
//         }

//     }
// }
