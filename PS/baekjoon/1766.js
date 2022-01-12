const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(el=>el.split(' ').map(Number));
const [N,M] = input.shift()
const graph = new Array(N+1).fill(0).map(el=>new Array());
const indegree = new Array(N+1).fill(0);
const result = new Array();

class MinHeap {
    constructor(){
        this.heap = [];
    }

    getLength(){
        return this.heap.length;
    }
    swap(node,parent){
        const temp = this.heap[node];
        this.heap[node] = this.heap[parent]
        this.heap[parent] = temp;
    }
    //최소힙구조
    push(node){
        this.heap.push(node);
        let i= this.heap.length -1;
        let parent = Math.floor((node-1)/2);
        //bubbleup
        while(i>0 && this.heap[parent] > this.heap[i]){
            this.swap(i,parent)
            i = parent;
            parent = Math.floor((i-1)/2);
        }
    };
    //
    pop(){
        if(this.heap.length == 1){
            return this.heap.pop();
        }
        const result = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while(this.heap[index*2+1] !== undefined && (this.heap[index*2+1] < this.heap[index] || this.heap[index*2+2]< this.heap[index])){
            let smallerIndex = this.heap[index*2+1];
            if(this.heap[index*2+2] !== undefined && this.heap[index*2+2]< this.heap[smallerIndex]){
                smallerIndex = this.heap[index*2+2];
            }
            this.swap(index,smallerIndex);
            index = smallerIndex;
        }

        return result;
    }
}

const q = new MinHeap();

for(let i=0; i<input.length; i++){
    let lst = input[i]
    for(let j=0; j<lst.length-1; j++){
        graph[lst[j]].push(lst[j+1])
        indegree[lst[j+1]] +=1
    }
}

for(let i=1; i<indegree.length; i++){
    if(indegree[i] == 0){
        q.push(i)
    }
}

while(q.getLength()){
    let num = q.pop();
    result.push(num)
    for(const next of graph[num]){
        indegree[next] -= 1;
        if(indegree[next] == 0){
            q.push(next)
        }
    }
}

console.log(result.join(' '));

