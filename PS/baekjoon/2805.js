const fs = require('fs');
const [n,t] = fs.readFileSync('./input.txt').toString().trim().split('\n');

const m = n.split(' ')[1];
let tree = t.split(' ');

function solution(m,tree){
    tree.sort((a,b)=>a-b);
    let min = 0;
    let max = tree[tree.length-1]
    
    while(min<=max){
        let mid = Math.floor((min+max)/2);
        let sum = 0;
        for(let i=0; i<tree.length; i++){
            if(tree[i]-mid>0){
                sum+=tree[i]-mid
            }
        }
        if(sum>=m){
            answer = mid
            min = mid +1
        }else{
            max = mid -1
        }
    }
    console.log(answer);
}

solution(m,tree);

