#유기농배추
#흰지렁이가 인접한 배추(상하좌우)로 이동할수 있고 해당되는 배추는 해충위협으로부터 안전

#섬 문제와 비슷한 문제다 연결된 배추의 영역이 몇개인지 구하면 된다.쉽다!
from collections import deque
t = int(input())
for i in range(t):
    w,h,k = map(int,input().split())
    matrix = [[0]*w for _ in range(h)]
    for j in range(k):
        x,y = map(int,input().split())
        matrix[y][x] = 1
    q = deque()
    dx = [-1,1,0,0]
    dy = [0,0,1,-1]
    count = 0
    for a in range(len(matrix)):
        for b in range(len(matrix[y])):
            if matrix[a][b] == 1:
                q.append([b,a])
                matrix[a][b] = 0
                count+=1
            while q:
                x,y = q.popleft()
                for k in range(4):
                    nx = x + dx[k]
                    ny = y + dy[k]
                    if 0<=nx<w and 0<=ny<h and matrix[ny][nx] == 1:
                        q.append([nx,ny])
                        matrix[ny][nx] = 0
    print(count)


