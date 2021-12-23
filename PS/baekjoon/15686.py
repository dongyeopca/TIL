# 조합으로 풀어야 시간복잡도를 통과한다..


from itertools import combinations

n,m = map(int,input().split())
houses = []
shops = []
for i in range(n):
    for j,x in enumerate(list(map(int,input().split()))):
        if x == 1:
            houses.append((i,j))
        elif x == 2:
            shops.append((i,j))

result = []
for picked_shops in list(combinations(shops,m)):
    chicken_dist = 0
    for hy,hx in houses:
        dists = []
        for sy,sx in picked_shops:
            dist = abs(hy-sy)+abs(hx-sx)
            dists.append(dist)
        chicken_dist += min(dists)
    result.append(chicken_dist)

print(min(result))
        