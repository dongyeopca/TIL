function solution(numbers, target) {
    var answer = 0;
    const length = numbers.length;
    function recursion(n,sum){
        if(n === length){
            if(sum === target){
                answer+=1
            }
            return
        }
        else{
            recursion(n+1,sum+numbers[n])
            recursion(n+1,sum-numbers[n])
        }
    }
    recursion(0,0)
    console.log(answer)
    return answer;
}