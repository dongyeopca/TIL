function solution(board, moves) {
    let stack = [];
    var answer = 0;
    for(const i of moves){
        for(let j=0; j<board.length; j++){
            if(board[j][i-1] != 0){
                if(stack.length>0){
                    if(stack[stack.length-1] == board[j][i-1]){
                        answer+=2
                        stack.pop()
                    }
                    else{stack.push(board[j][i-1])}
                }
                else{
                    stack.push(board[j][i-1])
                }
                board[j][i-1] = 0
                break
            }
        }
    }
    return answer;
    }


    //js에서 indexerror=> undefined 할당