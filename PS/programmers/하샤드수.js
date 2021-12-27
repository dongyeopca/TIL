function solution(x) {
    var answer = true;
    let divide = 0;
    for(let i=0; i<x.toString().length; i++){
        divide += +x.toString()[i]
    }
    if(x%divide != 0){
        answer = false;
    }
    return answer;
}


function solution(x){
    return x%eval([...x.toString()].join('+'))? false : true;
}

