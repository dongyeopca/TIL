n = int(input())
a,b = map(int,input().split())
m = int(input())
array = [[] for _ in range(n+1)]
count = 0
check = [0]*(n+1)
for _ in range(m):
    x,y = map(int,input().split())# x는 y의 부모번호
    array[y].append(x)
    array[x].append(y)

def dfs(p):
    for i in array[p]:
        if check[i] == 0:
            check[i] = check[p]+1
            dfs(i)
dfs(a)
if check[b]>0:
    print(check[b])
else:
    print(-1)
