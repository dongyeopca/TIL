#N-queen 백트래킹하면 떠오르는 대표문제!라네요

#크기가 n*n인 체스판에 퀸 개를 서로 공격할수 없게 놓을수있는 방법의 수를 구하여라

def dfs(queen,n,row):
    count = 0

    if n == row:
        return 1
    for col in range(n):
        queen[row] = col

        for x in range(row):
            if queen[x] == queen[row]:
                break
            if abs(queen[x]-queen[row]) == (row-x):
                break
        else:
            count += dfs(queen,n,row+1)
    return count

n= int(input())
queen = [0]*n
print(dfs(queen,n,0))