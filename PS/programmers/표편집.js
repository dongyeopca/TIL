function solution(n,k,cmd){
    let answer = new Array(n);
    for(let i=0; i<n; i++){
        answer[i] = 'O';
    }
    
    let root = new Node(0);
    let curNode = root;
    let prevNode = root;
    for(let i=1; i<n; i++){
        const newNode = new Node(i,prevNode);
        prevNode.next = newNode;
        prevNode = newNode;
        //현재 가르키는 노드
        if(i===k){
            curNode = newNode;
        }
    }
    
    const history = [];
    
    cmd.map((el)=>{
        const [command,count] = el.split(' ')
        let i=0;
        
        switch(command){
            case 'U':
                while(i < count && curNode.prev){
                    curNode = curNode.prev;
                    i++;
                }
                break;
            case 'D':
                while(i < count && curNode.next){
                    curNode = curNode.next;
                    i++;
                }
                break;
            case 'C':
                history.push(curNode);
                const prev = curNode.prev;
                const next = curNode.next;
                //현재 노드의 앞뒤 노드가 존재할시
                if(prev && next){
                    prev.next = next;
                    next.prev = prev;
                    curNode = next;
                //현재 노드가 맨 뒤 노드일때
                }else if(prev){
                    prev.next = null;
                    curNode = prev;
                //현재 노드가 맨 앞일 때
                }else if(next){
                    next.prev = null;
                    curNode = next;
                }
              break;
            case 'Z':
                const node = history.pop();
                const prevNode = node.prev;
                const nextNode = node.next;
                if(prevNode){
                    prevNode.next = node;
                }
                if(nextNode){
                    nextNode.prev = node;
                }
                break;
        }
    })
    history.map(node=>{
        answer[node.idx] = 'X';
    })
    return answer.join('');
}

const Node = function(idx,prevNode){
    this.idx = idx;
    this.prev = prevNode;
    this.next;
}