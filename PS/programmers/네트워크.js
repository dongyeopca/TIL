
//bfs
// function solution(n, computers) {
//     var answer = 0;
//     let queue = new Array();
//     let visited = new Array();
//     for(let i=0; i<n; i++){
//         visited[i] = 0
//     }
//     while(visited.includes(0)){
//         queue.push(visited.indexOf(0))
//         while(queue.length != 0){
//             let node = queue.shift()
//             visited[node] = 1
//             for(let j=0; j<n; j++){
//                 if(computers[node][j] != 0 && visited[j] == 0){
//                     queue.push(j)
//                 }
//             }
//         }
//         answer+=1;
//     }
//     return answer;
// }


//dfs
function solution(n,computers){
    var answer = 0;
    let visited = new Array();
    for(let i=0; i<n; i++){
        visited[i] = 0
    }
    function recursion(node,visited){
        visited[node] = 1
        for(let i=0; i<n; i++){
            if(computers[node][i] == 1 && visited[i] != 0){
                recursion(i,visited)
            }
            else{
                return
            }
        }
    }
    for(let i=0; i<n; i++){
        if(visited[i] == 0){
            recursion(i,visited)
            answer++
        }
    }

    console.log(answer)
}

solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]])