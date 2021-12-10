from collections import deque
t = int(input())
dx = [2,2,-2,-2,1,1,-1,-1]
dy = [1,-1,1,-1,2,-2,2,-2]
for _ in range(t):
    q = deque()
    s = int(input())
    board = [[0]*s for _ in range(s)]
    y,x = map(int,input().split())
    board[y][x] = 1
    oy,ox = map(int,input().split())
    q.append([y,x])
    while q:
        y,x = q.popleft()
        if y==oy and x == ox:
            print(board[y][x]-1)
            break
        for i in range(8):
            nx = x + dx[i]
            ny = y +dy[i]
            if 0<= nx < s and 0<= ny < s and board[ny][nx] == 0:
                board[ny][nx] = board[y][x] + 1
                q.append([ny,nx])


