from collections import deque
# 1트 =>벽을 하나씩 부수고 매 경우마다 bfs실행 했는데 시간초과뜸

#2트 =>3차원 배열

dx = [1,-1,0,0]
dy = [0,0,1,-1]
n,m = map(int,input().split())
a = [list(map(int,input())) for _ in range(n)]
q = deque()

def bfs():
    visit = [[[0]*2 for _ in range(m)] for __ in range(n)]
    q.append([0,0,1])
    visit[0][0][1] = 1
    while q:
        x,y,w = q.popleft()
        if x == n -1 and y == m - 1:
            return visit[x][y][w]
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < m:
                if a[nx][ny] == 1 and w == 1:
                    visit[nx][ny][0] = visit[x][y][1] +1
                    q.append([nx,ny,0])
                elif a[nx][ny] == 0 and visit[nx][ny][w] == 0:
                    visit[nx][ny][w] = visit[x][y][w] +1
                    q.append([nx,ny,w])
    return -1

print(bfs())




