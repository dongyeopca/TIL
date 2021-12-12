n = int(input())
building = []
for _ in range(n):
    l,h,r = map(int,input().split())
    building.append([l,h,r])

sorted(building,key=lambda x:x[0])
start = building[0]
for i in building[1:]:
    if i[1]>=start[1]:
        print(i[0],i[1])
    
