# 크루스칼 알고리즘 문제

v,e = map(int,input().split())

tree = [list(map(int,input().split())) for _ in range(e)]
tree.sort(key=lambda x:x[2])

parent = list(range(v+1))

def find(a):
    if a == parent[a]:
        return a
    parent[a] = find(parent[a])
    return parent[a]

def union(a,b):
    a = find(a)
    b = find(b)
    if b<a:
        parent[a] = b
    else:
        parent[b] = a
    
sum = 0

for s,e,w in tree:
    if find(s) != find(e):
        union(s,e)
        sum += w

print(sum)
