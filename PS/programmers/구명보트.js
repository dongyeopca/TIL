function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>a-b)
    while(people.length !=0){
        if(people[0]+people[people.length-1]<=limit){
            people.shift()
            people.pop()
            answer+=1;
        }else{
            people.pop()
            answer+=1;
        }
    }
    return answer;
}