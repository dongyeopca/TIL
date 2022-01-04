function solution(n, edge) {
    var answer = 0;
    let visited = new Array(n+1).fill(0);
    let node = new Array(n+1);
    let queue = new Array();
    for(let i=0; i<n+1; i++){
        node[i] = new Array();
    }
    //map을 써서 visited = new Array(n+1).fill(0).map(e=>new array());로 변경
    for(let i=0; i<edge.length; i++){
        node[edge[i][0]].push(edge[i][1])
        node[edge[i][1]].push(edge[i][0])
    }
    visited[1] = 1
    for(let i=0; i<node[1].length; i++){
        queue.push(node[1][i])
        visited[node[1][i]] = visited[1]+1
    }
    while(queue.length){
        let cur = queue.shift();
        for(let j=0; j<node[cur].length; j++){
            if(visited[node[cur][j]] == 0){
                queue.push(node[cur][j])
                visited[node[cur][j]] = visited[cur]+1
            }
        }
    }
    answer = visited.filter(el => el==Math.max(...visited)).length
    return answer;
}