# f = [0,1]
# for i in range(2,50):
#     c = f[i-2]+f[i-1]
#     f.append(c)
# for j in range(50):
#     print(j,'번쨰',f[j])
#문제에서 n이 100000000까지 가능하다 하였으므로 피보나치 44까지 가능하다.
#하지만 편의상 0,1을 제외하여 피보나치 2부터 피보나치 46까지로 범위를 지정하도록하자.
# 피보나치
# 피보나치 수를 더하여 주어진 정수와 같도록 하는 최소 개수의
#피보나치 수들을 구하라
# 그리디 유형인듯하다. 가장 큰 피보나치 수를 사용하고 정수에서
# 빼나가며된다.
# 제켄도프 정리에 의하면 임의의 양수는 연속하지 않은 여러개의 피보나치
# 수들의 합으로 표현할 수 있다.
p = [1,2]
for i in range(2,46):
    p.append(p[i-2]+p[i-1])
T = int(input())

for j in range(T):
    n = int(input())
    result = []
    while(n):
        for k in range(46):
            if(p[k]<=n):
                t = p[k]
        n-=t
        result.append(t)
    result.sort()
    for z in range(len(result)):
        print(result[z],end=" ")
