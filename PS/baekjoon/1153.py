#에라토스테네스의 체
#골드바흐 추측
n = int(input())
def prime(n):
    board = [0]*(n+1)
    for i in range(2,n+1):
        board[i] = i

    for i in range(2,n+1):
        if board[i]==0:
            continue
        for j in range(i*2,n+1,i):
            board[j] =0
    return board

if n<8:
    print(-1)
if n >=8 and n%2 == 1:
    answer = '2 3 '
    n-=5
elif n>=8 and n%2 == 0:
    answer = '2 2 '
    n-=4

board = prime(n)
for i in range(2,n+1):
    if board[i] != 0 and board[n-i]!=0:
        answer += str(i) + ' ' + str(n-i)
        print(answer)
        break
