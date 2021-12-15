#숫자카드
# 시간제한 2초 메모리 제한 256mb
# n과 m이 각각 최대 5000000까지 가능
# 완전탐색으론 최대 25억번 연산 시간초과날것으로 예상
# 이진탐색 ㄱ ㄱ

n = int(input())
a = list(map(int,input().split()))
m = int(input())
b = list(map(int,input().split()))
a.sort()
for i in b:
    flag = True
    left = 0
    right = len(a)-1
    while left<=right:
        mid = (left+right)//2
        if a[mid] == i:
            flag = False
            print(1,end=' ')
            break
        elif a[mid]>i:
            right = mid-1
        else:
            left = mid+1
    if flag:
        print(0,end=' ')

