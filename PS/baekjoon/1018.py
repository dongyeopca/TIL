n,m = map(int,input().split())
board = [input() for _ in range(n)]
answer = []
for i in range(n-7):
    for j in range(m-7):
        num = 0
        num2 = 0
        for a in range(i,i+8):
            for b in range(j,j+8):
                if (a+b)%2 == 0:
                    if board[a][b] != 'W':
                        num+=1
                    else:
                        num2+=1
                else:
                    if board[a][b] != 'B':
                        num+=1
                    else:
                        num2+=1
        answer.append(num)
        answer.append(num2)

print(min(answer))

