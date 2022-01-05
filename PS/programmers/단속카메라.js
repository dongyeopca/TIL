function solution(routes) {
    var answer = 0;
    routes.sort((a,b)=>{
        return a[1]-b[1]
    })
    let prev_camera = -30001;
    for(let i=0; i<routes.length; i++){
        if(prev_camera<routes[i][0]){
            answer+=1
            prev_camera = routes[i][1]
        }
    }
    return answer
}