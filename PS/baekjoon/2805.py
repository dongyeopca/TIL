n,m = map(int,input().split())
tree = list(map(int,input().split()))
tree.sort()
right = tree[-1]
left = 1
while(left<=right):
    mid = (left+right)//2
    sum = 0
    for i in tree:
        if i>=mid:
            sum+=i-mid
    if sum>=m:
        left = mid+1
    else:
        right = mid-1

print(right)

