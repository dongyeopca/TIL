#로봇 청소기

n,m = map(int,input().split())
r,c,d = map(int,input().split())
board = [list(map(int,input().split())) for _ in range(n)]
count = 0
dx = [-1,0,1,0]
dy = [0,1,0,-1]

def robot(x,y,d):
    global count
    if board[x][y] == 0:#현재위치 탐색
        board[x][y] = 2
        count+=1
    for _ in range(4):#4방향 탐색
        nd = (d+3)%4
        nx = x + dx[nd]
        ny = y + dy[nd]
        if board[nx][ny] == 0:#청소가능시
            robot(nx,ny,nd)
            return
        d = nd 
    nd = (d+2) % 4 #4방향 모두 탐색 불가능시 후진가능여부
    nx =x + dx[nd]
    ny = y + dy[nd]
    if board[nx][ny] == 1:
        return  #뒤가 벽일시 종료
    robot(nx,ny,d)
    
robot(r,c,d)
print(count)
