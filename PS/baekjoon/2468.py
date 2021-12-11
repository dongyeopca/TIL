from collections import deque
import copy
n= int(input())
board = [list(map(int,input().split())) for _ in range(n)]

dx = [-1,1,0,0]
dy = [0,0,1,-1]
answer = []
q = deque()
def bfs(i):
    cnt = 0
    copy_map = copy.deepcopy(board)
    for z in range(n):
        for x in range(n):
            if i<copy_map[z][x]<101:
                q.append([z,x])
                cnt+=1
                copy_map[z][x] = 101
                while q:
                    x,y = q.popleft()
                    for k in range(4):
                        nx = x+dx[k]
                        ny = y+dy[k]
                        if 0<=nx<n and 0<=ny<n and i<copy_map[nx][ny]<101:
                            copy_map[nx][ny] = 101
                            q.append([nx,ny])
    answer.append(cnt)
    return
                
                


for i in range(0,101):
    bfs(i)
print(max(answer))

    
    
