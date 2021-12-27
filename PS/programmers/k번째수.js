function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length; i++){
        answer.push(array.slice(commands[i][0]-1,commands[i][1]).sort(function(a,b){
            return a-b
        })[commands[i][2]-1])
        }
    return answer;
}

function solution(array, commands) {
    return commands.map((e)=>{
        const newArray = array.slice(e[0]-1,e[1]).sort((a,b)=>a-b)
        return newArray[e[2]-1]
    })
}