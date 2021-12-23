#분할정복문제
# 2630번 문제와 똑같음
n = int(input())
board = [input() for _ in range(n)]

def recursion(x,y,n):
    if n == 1:
        print(board[y][x],end="")
        return
    flag = True
    for i in range(y,y+n):
        if not flag:
            break
        for j in range(x,x+n):
            if board[i][j] != board[y][x]:
                flag = False
                break
    if flag:
        print(board[y][x],end="")
    else:
        print("(",end="")
        recursion(x,y,n//2)
        recursion(x+n//2,y,n//2)
        recursion(x,y+n//2,n//2)
        recursion(x+n//2,y+n//2,n//2)
        print(")",end="")

recursion(0,0,n)
