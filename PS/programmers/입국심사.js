//이분탐색

function solution(n, times) {
    //심사시간 순으로 정렬
    times.sort((a,b)=>a-b);
    //left 최소시간 right 최대시간
    let left = 1;
    let right = n*times[times.length-1];
    var answer = right;
    while(left<=right){
        let mid = Math.floor((right+left)/2);
        let count = 0;
        // mid시간일 경우 총 심사할수 있는 인원 계산
        times.map((value)=>{
            count += Math.floor(mid/value);
        })
        // n명보다 심사할수있는 인원이 많을시 조건 만족
        if(count>=n){
            answer = Math.min(mid,right);
            //mid시간이 인원을 충족시켜주므로 최소시간을 찾기 위해 right 감소
            right = mid-1;
        }
        //mid시간이 인원을 충족시켜주지 못하므로 left 증가
        else{
            left = mid +1;
        }
    }
    return answer;
}
