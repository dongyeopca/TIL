function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let on_bridge = new Array();
    for(let i=0; i<bridge_length; i++){
        on_bridge.push(0)
    }
    while(on_bridge.length != 0){
        answer +=1;
        on_bridge.shift()
        if(truck_weights.length !=0){
            if(on_bridge.reduce(function(prev,cur){return prev+cur},0)+truck_weights[0]<=weight){
                on_bridge.push(truck_weights.shift())
            }else{
                on_bridge.push(0)
            }
        }
    }
    return answer;
}