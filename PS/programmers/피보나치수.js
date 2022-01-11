// fibo(44)만 되어도 정수범위를 초과해버린다.그러므로
//(A + B) % C 는 (A%C)+(B%C)%C와 같다! 라는 성질을 이용해야한다.

function solution(n) {
    var answer = 0;
    const fiboarray = new Array(2);
    fiboarray[0] = 0
    fiboarray[1] = 1
    if(n>=2){
        for(let i=2; i<n+1; i++){
            fiboarray.push(fiboarray[i-1]%1234567+fiboarray[i-2]%1234567)
        }
    }
    else{
        answer = 1
    }
    answer = fiboarray[n]%1234567
    return answer;
}