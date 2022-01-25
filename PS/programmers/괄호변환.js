function solution(p) {
    var answer = '';
    answer = recursion(p)
    console.log(answer)
    return answer;
}

const split = function(p){
    let count = 0;
    for(let i=0; i<p.length; i++){
    if(p[i] == "("){
        count ++;
    }else{
        count --;
    }
    if(count == 0){
        let u =p.substring(0,i+1)
        let v = p.substring(i+1)
        return [u,v]
    }
}
}

const check = function(u){
    const stack = [];
    for(const c of u){
        if(c == "("){
            stack.push(c)
        }else{

            if(stack.length == 0){
                return false
            }
            else{
                stack.pop()
            }
        }
    }
    if(stack.length !=0){
        return false
    }
    return true
}

const recursion = function(p){
    let result = ""
    if(p.length == 0){
        return ""
    }
    let [u,v] = split(p)
    if(check(u)){
        result = u + recursion(v)
    }
    else{
        let tmp = "("
        tmp += recursion(v)+")"
        u = u.slice(1,-1)
        for(const i of u){
            if(i == "("){
                tmp += ")"
            }else{
                tmp +="("
            }
        }
        result += tmp;
    }
    return result
}


solution("(()())()")