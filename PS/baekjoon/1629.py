a,b,c = map(int,input().split())
#분할정복문제
def recursion(a,b):
    if b == 1:
        return a%c
    elif b%2 == 0:
        y = recursion(a,b//2)
        return y*y%c
    elif b%2 == 1:
        y = recursion(a,b//2)
        return y*y*a%c

print(recursion(a,b))


# 분배법칙을 잘 생각해보자.

