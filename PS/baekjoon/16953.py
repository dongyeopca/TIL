from collections import deque

a,b = map(int,input().split())
q = deque([[a,1]])
res = -1
while q:
    i,count = q.popleft()
    if i == b:
        res = count
        break

    if i*2<=b:
        q.append([i*2,count+1])
    if i*10+1<=b:
        q.append([i*10+1,count+1])

print(res)

