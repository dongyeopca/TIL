const find = (parent,x)=>{
    if(parent[x] == x){
        return x
    }
    return find(parent,parent[x])
}

const union = (parent,a,b)=>{
    const n1 = find(parent,a);
    const n2 = find(parent,b);
    if(n1!==n2){
        if(n1<n2) parent[n2]=n1;
        else parent[n1]=n2;
        return false;
    }else{
        return true;
    }
}


function solution(n,costs){
    const parents = new Array();
    let answer = 0;
    for(let i=0; i<n; i++){
        parents.push(i);
    }
    costs.sort((a,b)=>a[2]-b[2]);
    for(const cost of costs){
        if(!union(parents,cost[0],cost[1])){
            answer+=cost[2];
        }
    }
    return answer
}