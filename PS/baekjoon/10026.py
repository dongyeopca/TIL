#적록색약
#bfs탐색문제  색약과 색약이 아닐경우 구분 영역 출력
import sys
from collections import deque

q = deque()
n = int(input())
dx = [-1,1,0,0]
dy = [0,0,1,-1]
graph = [list(map(str,input())) for _ in range(n)]
c = [[0]*n for _ in range(n)]
cnt = 0
def bfs(x,y):
    q.append([x,y])
    c[x][y] = 1
    while q:
        x,y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y+ dy[i]
            if 0<= nx <n and 0<= ny<n and graph[nx][ny] == graph[x][y] and c[nx][ny] == 0:
                q.append([nx,ny])
                c[nx][ny] = 1

#색약 아닐 때
for i in range(n):
    for j in range(n):
        if c[i][j] == 0:
            bfs(i,j)
            cnt+=1
print(cnt,end=' ')

#색약일 경우
for i in range(n):
    for j in range(n):
        if graph[i][j] == 'R':
            graph[i][j] = 'G'

c = [[0]*n for _ in range(n)]
cnt = 0
for i in range(n):
    for j in range(n):
        if c[i][j] == 0:
            bfs(i,j)
            cnt +=1
print(cnt)