#다리 놓기
# 동쪽에서 서쪽으로 연결 할 사이트 선택
# mCn

def combination(n,r):
    return factorial(n)//(factorial(r)*factorial(n-r))


def factorial(n):
    num = 1
    for i in range(1,n+1):
        num *= i
    return num

t = int(input())
for _ in range(t):
    n,m = map(int,input().split())
    print(combination(m,n))
    