const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(el=>el.split(' ').map(Number))
const [N,M] = input.shift();

const result = [];
const graph = new Array(N+1).fill(0).map(el=>new Array());
const indegree = new Array(N+1).fill(0);
const q = [];

for(let i=0; i<M; i++){
    const lst = input[i];
    for(let j=0; j<lst.length-1; j++){
        graph[lst[j]].push(lst[j+1]);
        indegree[lst[j+1]] += 1;
    }
}

for(let i=1; i<N+1; i++){
    if(indegree[i] == 0){
        q.push(i)
    }
}

while(q.length){
    const num = q.shift();
    result.push(num);
    graph[num].forEach(next=>{
        indegree[next] -=1;
        if(indegree[next]==0){
            q.push(next);
        }
    })
}
console.log(result.join(' '))