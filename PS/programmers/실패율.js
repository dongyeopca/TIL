function solution(N, stages) {
    var answer = [];
    let person = stages.length;
    for(let i=1; i<N+1; i++){
        let challenger = stages.filter(e=>e==i).length;
        answer.push([i,challenger/person]);
        person -= challenger
    }
    answer.sort(function(a,b){return b[1]-a[1]});
    return answer.map((e)=>e[0]);
}