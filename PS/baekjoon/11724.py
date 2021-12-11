#연결된 노드 뭉치의 갯수를 구하여라~

n,m = map(int,input().split())
array = [[] for _ in range(n+1)]
visited = [0]*(n+1)
answer = 0
def dfs(idx):
    visited[idx] = 1
    for i in array[idx]:
        if visited[i] == 0:
            dfs(i)
    return answer

for _ in range(m):
    u,v = map(int,input().split())
    array[u].append(v)
    array[v].append(u)
for i in range(1,n+1):
    if visited[i] == 0:
        dfs(i)
        answer+=1
print(answer)
