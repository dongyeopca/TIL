from collections import deque
m,n,k = map(int,input().split())
board = [[0]*n for _ in range(m)]
for _ in range(k):
    a,b,c,d = map(int,input().split())
    for i in range(b,d):
        for j in range(a,c):
            board[i][j] = 1

dx = [1,-1,0,0]
dy = [0,0,1,-1]
q = deque()
answer = []
for i in range(len(board)):
    for j in range(len(board[i])):
        if board[i][j] == 0 :
            q.append([i,j])
            board[i][j]=1
            answer.append(1)
            while q:
                x,y=q.popleft()
                for z in range(4):
                    nx = x+dx[z]
                    ny = y+dy[z]
                    if 0<=nx<m and 0<=ny<n and board[nx][ny] ==0:
                        q.append([nx,ny])
                        board[nx][ny] = 1
                        answer[-1]=answer[-1]+1
print(len(answer))
for i in sorted(answer):
    print(i,end=' ')