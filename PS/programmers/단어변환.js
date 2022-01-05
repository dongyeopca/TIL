function solution(begin, target, words) {
    let answer =0;
    let q = [];
    q.push([begin,answer])
    let visited = new Array(words.length).fill(0);
    while(q.length){
        let [cur,cnt] = q.shift();
        if(cur == target){
            return cnt
        }
        words.forEach((word,idx)=>{
            let notequal = 0;
            for(let i=0; i<word.length; i++){
                if(word[i] != cur[i]){
                    notequal += 1;
                }
            }
            if(notequal == 1 && visited[idx] == 0){
                q.push([word,cnt+1])
                visited[idx] = 1
            }
        })
    }
    return answer
}