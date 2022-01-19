class minHeap{
    constructor(){
        this.heap = [];
    }
    swap(node,parent){
        const temp = this.heap[node]
        console.log(temp)
        this.heap[node] = this.heap[parent]
        this.heap[parent] = temp
    }
    getlength(){
        return this.heap.length;
    }

    push(node){
        this.heap.push(node)
        let index = this.heap.length-1
        let parent = Math.floor((node-1)/2);
        while(index>0 && this.heap[index]<this.heap[parent]){
            this.swap(index,parent);
            index = parent;
            parent = Math.floor((index-1)/2);
        }
    };

    pop(){
        if(this.heap.length === 1){
            return this.heap.pop();
        }
        const result = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while(this.heap[index*2+1] !== undefined && this.heap[index]>this.heap[index*2+1]){
            let smallerindex = this.heap[index*2+1];
            if(this.heap[index*2+2] !== undefined && this.heap[smallerindex] > this.heap[index*2+2]){
                smallerindex = this.heap[index*2+2]
            }
            this.swap(index,smallerindex);
            index = smallerindex;
        }
        return result
    }
}

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(el=>el.split(' ').map(Number))

const N = input.shift().pop()
const M = input.shift().pop()
const [S,E] = input.pop()

const graph = new Array(N+1).fill(0).map(el=>new Array());
const distance = new Array(N+1).fill(Infinity);
distance[S]=0
const heap = new minHeap();

for(let i=0; i<M; i++){
    const [a,b,c] = input[i];
    graph[a].push([b,c])
}

function extra(start){
    heap.push([0,start])
    while(heap.getlength()){
        const [d,c] = heap.pop();
        if(distance[c] < d){
            continue;
        }
        for(const i of graph[c]){
            if(distance[i[0]]>i[1]+d){
                distance[i[0]] = i[1]+d;
                heap.push([distance[i[0]],i[0]])
            }
        }
    }
}

extra(S);
console.log(distance[E])