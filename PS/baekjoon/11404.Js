const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(str=>str.split(' ').map(Number));
const n = input.shift()[0];
const m = input.shift()[0];

function solution(n,m,list){
    let answer = new Array(n).fill(0).map(el=>new Array(n).fill(Infinity));
    for(let i=0; i<n; i++){
        answer[i][i] = 0
    }
    for(let i=0; i<m; i++){
        answer[list[i][0]-1][list[i][1]-1] = Math.min(answer[list[i][0]-1][list[i][1]-1],list[i][2])
    }

    for(let k=0; k<n; k++){
        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                if(answer[i][k]+answer[k][j] < answer[i][j]){
                    answer[i][j] = answer[i][k]+answer[k][j];
                }
                }
            }
        }

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(answer[i][j] == Infinity){
                answer[i][j] == 0
            }
        }
    }

    
    console.log(answer.map(el=>el.join(' ')).join('\n'))
}
solution(n,m,input)