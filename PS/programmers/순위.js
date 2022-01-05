// 플루이드 와샬 알고리즘
// 다익스트라와의 차이점은 다익스트라는 하나의 노드에서 다른 모든 노드로 가는 최단 거리
// 플루이드 와샬은 모든 노드에서 모든 노드로 가는 최단 거리
function solution(n, results) {
    var answer = 0;
    const board = new Array(n).fill(0).map(e=>new Array(n).fill(0));
    for(const [win,lose] of results){
        board[win-1][lose-1] = 1;
        board[lose-1][win-1] = -1;
    }
    for(let k=0; k<n; k++){
        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                if(board[i][j] == 0){
                    if(board[i][k] == 1 && board[k][j] == 1 ){
                        board[i][j] = 1
                    }
                    else if(board[i][k] == -1 && board[k][j] == -1){
                        board[i][j] = -1
                    }
                }
            }
        }
    }
    for(const a of board){
        let len = a.filter(e=>e==0).length
        if(len == 1){
            answer+=1
        }
    }
    return answer;
}