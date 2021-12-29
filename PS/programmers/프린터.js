/// stack
function solution(priorities, location) {
    var answer = 0;
    let stack = new Array(priorities.length)
    for(let i=0; i<stack.length; i++){
        stack[i] = new Array(2);
        stack[i][0] = priorities[i]
        if(i == location){
            stack[i][1] = true
        }else{
            stack[i][1] = false
        }
    }

    //   var list = priorities.map((t,i)=>({
    //     my : i === location,
    //     val : t
    // }));

    while(stack.length !=0 ){
        let flag = false;
        for(let i=1; i<stack.length; i++){
            if(stack[i][0]>stack[0][0]){
                flag = true;
            }
        }
        if(flag){
            stack.push(stack.shift())
        }else{
            if(stack.shift()[1]){
                return answer+1
            }
            else{
                answer+=1
            }
        }
    }
}