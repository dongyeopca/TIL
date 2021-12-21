#기타줄
#그리디 알고리즘

n,m = map(int,input().split())
package_list = list()
normal_list = list()
for _ in range(m):
    s,a = map(int,input().split())
    package_list.append(s)
    normal_list.append(a)

mins = min(package_list)
mina = min(normal_list)

if mins < mina*6:
    if mins < (n%6)*mina:
        print((n//6)*mins + mins)
    else:
        print((n//6)*mins + (n%6)*mina)
elif mins >= mina*6:
    print(n*mina)