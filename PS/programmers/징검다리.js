//이분탐색

//distane는 도착지까지의 거리
//rocks는 돌의 위치
//n은 지울 돌의 개수
//mid로 설정한 distance가 최소값이 되도록 돌을 제거
//제거되는 돌의 개수가 n보다 크면 mid값을 줄이고
//제거되는 돌의 개수가 n보다 작으면 mid값을 늘린다.
function solution(distance, rocks, n) {
    rocks.sort((a,b)=>a-b);
    var answer = 0;
    let left = 1;
    let right = distance;
    while(left<=right){
        let remove = 0;
        let prev = 0;
        let mid = Math.floor((left+right)/2);
        for(let i=0; i<rocks.length; i++){
            if(rocks[i]-prev<=mid){
                //mid보다 돌사이 거리가 가까우면 제거
                remove = remove+1;
            }else{
                prev = rocks[i];
            }
        }
        //제거된 수가 n보다 많으면 mid값이 너무 큰거 right값을 줄여야함
        if(remove>n){
            right = mid-1
        }else{
            left = mid+1
            answer = Math.max(answer,left);
        }
    }
    
    return answer;
}