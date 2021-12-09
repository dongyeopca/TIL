#토마토/ 이전 문제는 유기농 배추 오늘은 야채특집인가

#토마토 박스에 토마토가 있고 익은 토마토에 인접한 토마토는 하루가 지나면 익는다.
#박스안 모든 토마토가 익을때까지의 일수를 구하라!
# 모두 익지 못한다면 -1을 리턴하라!시작부터 모두 익어있다면 0을 출력하라!
from collections import deque
m,n = map(int,input().split())
matrix = []
dx = [-1,1,0,0]
dy = [0,0,1,-1]
q = deque()
for i in range(n):
    matrix.append(list(map(int,input().split())))
def bfs():
    while q:
        a,b = q.popleft()
        for i in range(4):
            nx = a+dx[i]
            ny = b+dy[i]
            if 0<=nx<n and 0<=ny<m and matrix[nx][ny] == 0:
                matrix[nx][ny] = matrix[a][b]+1
                q.append([nx,ny])

for i in range(n):
    for j in range(m):
        if matrix[i][j] == 1:
            q.append([i,j])
bfs()
day = 0
check = False
for i in matrix:
    for j in i:
        if j== 0:
            check = True
    day = max(day,max(i))

if check:
    print(-1)
elif day == 1:
    print(0)
else:
    print(day-1)

