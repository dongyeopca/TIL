const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(el=>el.split(' ').map(Number));
const [n,m] = input.shift()
const graph = new Array(n+1).fill(0).map(el=>new Array());
const answer = new Array();
const indegree = new Array(n+1).fill(0);
const queue = new Array();
for(let i=0; i<m; i++){
    let lst = input[i];
    for(let j=1; j<lst[0]; j++){
        graph[lst[j]].push(lst[j+1])
        indegree[lst[j+1]] +=1;
    }
}

for(let i=1; i<n+1; i++){
    if(indegree[i] ==0){
        queue.push(i)
    }
}

while(queue.length){
    num = queue.shift();
    answer.push(num);
    for(const i of graph[num]){
        indegree[i] -=1;

        if(indegree[i] == 0){
            queue.push(i)
        }
    }
}

if(answer.length != n){
    console.log(0)
}
else{
    for(const i of answer){
        console.log(i)
    }
}