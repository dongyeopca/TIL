function solution(lottos, win_nums) {
    var answer = [];
    let count0 = 0;
    let count = 0;
    for(let i=0; i<6; i++){
        if(lottos[i] === 0){
            count0+=1;
            continue;
        }
        if(win_nums.indexOf(lottos[i]) != -1){
            count +=1;
        }
    }
    let min = 7-count >= 6 ? 6 : 7-count;
    let max = min-count0 < 1 ? 1 : min-count0;
    
    answer = [max, min]
    return answer;
}