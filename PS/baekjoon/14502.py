import copy
from collections import deque
n,m = map(int,input().split())
board = [list(map(int,input().split())) for _ in range(n)]
dx = [1,-1,0,0]
dy = [0,0,-1,1]
answer = 0

def spread_virus():# 벽 다세우고 나서 바이러스 퍼뜨리기
    q = deque()
    count = 0
    global answer
    copy_board = copy.deepcopy(board)
    for i in range(len(copy_board)):
        for j in range(len(copy_board[i])):
            if copy_board[i][j] == 2:
                q.append([i,j])
                while q:
                    x,y = q.popleft()
                    for k in range(4):
                        nx = x + dx[k]
                        ny = y + dy[k]
                        if 0<= nx < n and 0<= ny <m and copy_board[nx][ny] == 0:
                            copy_board[nx][ny]= 2
                            q.append([nx,ny])
    
    for i in range(len(copy_board)):# 바이러스가 퍼지지않은 영역 췤췤
        for j in range(len(copy_board[i])):
            if copy_board[i][j] == 0:
                count+=1
    if count>answer:
        answer = count

def build_wall(count): #벽을 하나씩 세워봄
    if count == 3:
        spread_virus()
        return
    for i in range(len(board)):
        for j in range(len(board[i])):
            if board[i][j] == 0:
                board[i][j]=1
                build_wall(count+1)
                board[i][j]=0

build_wall(0)
print(answer)