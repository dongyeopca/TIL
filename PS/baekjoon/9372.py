# 모든 노드를 탐색하는 최소 횟수 (백트래킹)
t = int(input())

def dfs(idx,count):
    visited[idx] = 1
    for i in array[idx]:
        if visited[i] == 0:
            count = dfs(i,count+1)
    return count

for _ in range(t):
    n,m = map(int,input().split())
    array = [[] for _ in range(n+1)]
    visited = [0]*(n+1)
    for i in range(m):
        a,b = map(int,input().split())
        array[a].append(b)
        array[b].append(a)


    print(dfs(1,0))
    


