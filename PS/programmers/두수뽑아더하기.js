function solution(numbers) {
    var answer = [];
    let result;
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            result = numbers[i]+numbers[j]
            if(!answer.includes(result)){
                answer.push(result)
            }
        }
    }
    
    answer.sort((a,b)=>{
        return a-b
    })
    
    return answer;
}