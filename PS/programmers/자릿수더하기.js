function solution(n)
{
    var answer = 0;
    for(let i=0; i<n.toString().length; i++){
        answer += +n.toString()[i]
    }
    return answer;
}