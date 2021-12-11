
#숨바꼭질

from collections import deque
q = deque()
n,k = map(int,input().split())
dis = [0 for _ in range(100001)]
distance = k-n
answer = []
if distance == 0:
    print(0)
elif distance<0:
    print(-distance)
else:
    q.append(n)
    dis[n] = 1
    while q:
        s = q.popleft()
        for ns in [s-1,s+1,s*2]:
            if 0<= ns <=100000 and dis[ns] == 0:
                q.append(ns)
                dis[ns] = dis[s]+1
    print(dis[k]-1)