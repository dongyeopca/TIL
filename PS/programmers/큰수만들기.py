#스택에 넣고 뒤에오는

#수보다 작으면 제거
#number[i:len(number)-(k-1)]
#체크해서 최고수랑 변경
# def solution(number,k):
#     answer=""
#     start=0
#     max=0
#     max_index =0
#     for i in range(len(number)-k):
#         if len(number)-k == 1:
#             for index,num in enumerate(number[start:]):
#                 if int(num)>max:
#                     max = int(num)
#                     max_index = index
#             answer+=str(max)
#         else:
#             for index,num in enumerate(number[start:-(len(number)-k)+1]):
#                 if int(num)>max:
#                     max = int(num)
#                     max_index = index
#             k+=1
#             start += max_index+1
#             answer+=str(max)
#             max=0
#     return answer


# 두달전에 푼거랑 사고방식이 하나도 안바뀌었다...
# def solution(number,k):
#     # 몇개를 뽑아야하는가 => len(number)-k개를 뽑아야한다.
#     # 그러면 그중 가장 큰수를 선택하려면? => 앞자리가 가장커야한다 =>[시작점:-(뽑아야하는수 -1)]
#     # 뽑고나면 => stack.append(뽑은수),그리고 뽑아야하는수를 줄여준다.
#     # 시작점은 어떻게 체크할것인가=>뽑는 지점의 index + 이전 뽑은거 index +1
#     stack = []
#     must = len(number)-k-1
#     #1
#     start = 0
#     while must!= -1:
#         answer = 0
#         answer_key = 0
#         if must == 0:
#             for key,value in enumerate(number[start:]):
#                 if int(value)>answer:
#                     answer = int(value)
#                     answer_key = key
#         else:
#             for key,value in enumerate(number[start:-(must)]):
#                 if int(value)>answer:
#                     answer = int(value)
#                     answer_key = key
#         start = answer_key + start +1
#         stack.append(answer)
#         must-=1
#     return ("").join(list(map(str,stack)))

# 3트
def solution(number,k):
    stack = []
    for num in number:
        while stack and k>0 and stack[-1]<num:
            stack.pop()
            k-=1
        stack.append(num)
    return ('').join(stack[:len(number)-k])