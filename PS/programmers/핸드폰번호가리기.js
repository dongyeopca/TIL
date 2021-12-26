function solution(phone_number) {
    var answer = '';
    for(let i=0; i<phone_number.length-4; i++){
        answer+='*'
    }
    for(let i=4; i>=1;i--){
        answer+=phone_number[phone_number.length-i]
    }
    return answer;
}