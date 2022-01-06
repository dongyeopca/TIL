//이전에 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성
// 코스요리 메뉴는 최소 2가지 이상의 단품메뉴
//최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합


function getCombination(arr,n){
    const result = [];
    if(n===1) return arr.map(e =>[e]);
    arr.forEach((e,idx,origin)=>{
        const rest = origin.slice(idx+1);
        const combination = getCombination(rest,n-1);
        const attached = combination.map(combi =>[e,...combi]);
        result.push(...attached);
    })
    return result;
}

function solution(orders, course) {
    var answer = [];
    const candidate = {};
    
    orders.map((order)=>{
        const orderArr = order.split('').sort();
        for(let i=2; i<=orderArr.length; i++){
            if(!course.includes(i)) continue;
            const orderCombis = getCombination(orderArr,i);
            orderCombis.map((combi)=>{
                const strcombi = combi.join('')
                candidate[strcombi] = candidate[strcombi]? candidate[strcombi]+1:1;
            })
        }
    })
    
    const arrcandidate = Object.entries(candidate);
    course.map((i)=>{
        const candidate = arrcandidate.filter((e)=>{return e[0].length == i && e[1]>1});
        if(candidate.length>0){
            let max = Math.max(...candidate.map(e=>e[1]))
            candidate.map((e)=>{
                if(e[1] == max){
                    answer.push(e[0])
                }
            })
        }
    });
    answer.sort()
    return answer;
}