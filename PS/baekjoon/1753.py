#다익스트라 알고리즘
V,E = map(int,input().split())
Start = int(input())
for _ in range(E):
    u,v,w = map(int,input().split())


# i 번째 노드까지의 최단 경로값 출력
# i 번이 자기자신일때는 0을 출력
# 경로가 없을시 INF 출력