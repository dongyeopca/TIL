function solution(genres, plays) {
    const answer = [];
    const songs = {};
    const playCount = {};
    
    genres.forEach((genre,idx)=>{
        if(!songs[genre]){
            songs[genre] = []
        }
        playCount[genre] = (playCount[genre] || 0)+ plays[idx]
        songs[genre].push({genre,play:plays[idx],index:idx})
    })
    const playCountArr = [];
    for(let key in playCount){
        playCountArr.push({
            genre: key,
            count: playCount[key]
        })
    }
    playCountArr.sort((a,b)=>{
        return b.count-a.count
    })
    
    playCountArr.forEach(el =>{
        const targetGenre = songs[el.genre]
        targetGenre.sort((a,b)=> b.play-a.play)
        targetGenre[0] && answer.push(targetGenre[0].index)
        targetGenre[1] && answer.push(targetGenre[1].index)
    })
    return answer
};
    


//다른사람의 풀이

function solution(genres, plays) {
    var dic = {};
    genres.forEach((t,i)=> {
        dic[t] = dic[t] ?  dic[t] + plays[i] :plays[i];        
    });

    var dupDic = {};
    return genres          
          .map((t,i)=> ({genre : t, count:plays[i] , index:i}))
          .sort((a,b)=>{               
               if(a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
               if(a.count !== b.count) return b.count - a.count;
               return a.index - b.index;
           })
           .filter(t=>  {
               if(dupDic[t.genre] >= 2) return false;
               dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre]+ 1 : 1;
               return true;
            })
           .map(t=> t.index);    
}

//sort를 아주고냥 기가막히게 잘쓰셨다...천잰가?