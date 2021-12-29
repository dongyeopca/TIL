function solution(clothes) {
    var answer = 1;
    let obj = {};
    for(const i of clothes){
        if(i[1] in obj){
            obj[i[1]] +=1
        }else{
            obj[i[1]] = 1
        }
    }
    for(const i of Object.values(obj)){
        answer = answer*(i+1)
    }
    
    return answer-1;
}