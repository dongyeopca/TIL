# Makrdown 사용법
# 1.헤더
h1~h6까지 지원한다.

    # this is h1
    ## this is h2
    ### this is h3
    #### this is h4
    ##### this is h5
    ###### this is h6
# this is h1
## this is h2
### this is h3
#### this is h4
##### this is h5
###### this is h6

# 2.block quote
 '>' 를 사용한다.

    > this is a first block quote
    >   > this is a second block quote
    >   >    > this is a third block quote
> this is a first block quote
>   > this is a second block quote
>   >    > this is a third block quote

안에서는 다른 마크다운 언어가 사용가능하다.
>  # Example 
>  * List
>
> <pre>codecode</pre>
>   > # got it

# 3.코드
 1.들여쓰기(4칸 공백 혹은 탭)

    ex)들여쓰기 시작입니다
            들여쓰기 입니다
        들여쓰기 끝입니다.
들여쓰기 시작입니다.

    들여쓰기 입니다

들여쓰기 끝입니다.

2.코드블럭<br>

    <pre>
    <code>
    print(hello world)
    </code>
    </pre>
<pre>
<code>
print(hello world)
</code>
</pre>

2-2.코드블럭("```")

    ```
    print(hello world)
    ```
깃헙에서 코드블럭("```")시작지점에 사용 언어를 선언하면 문법강조가 가능하다한다.
```python
print(hello world)
```
# 4.수평선 ```<hr/>```
    ***
    * * *
    *****
    - - -
    ----------------
* 예시
***
* * *
*****
- - -
----------------

# 5.링크
    [링크명][id]
    [id]: 링크주소 "alt"
    or
    [링크명](주소)
    ex)[구글](https://google.com)
    or
    <http://바로 주소>

[구글][id]

[id]:https://google.com "구글구글바로가기"

[구글](https://google.com)

구글: <https://google.com>
# 6.강조
    *single asterisks *
    **double**
    _single underscore_
    __double__
    ~~cancleline~~

*single asterisks*

**double**

_single underscore_

__double__

~~cancleline~~

# 7.줄바꿈
    문장 마지막에서 2칸 이상 띄어쓰고 엔터!
    or <br/>
    hello world
    음하하하하하하
    hello world<br/>
    음하하하하
hello world.   
음하하하하하하  
hello world<br/>
음하하하하

# 8.이미지추가
    ![Alt text](경로)
    ![Alt text](경로  "Optional title")
    or
    <img width="" size="" src=""></img>

# 9.요약하기
    <details>
    <summary>요약하기</summary>
    음하하하하하하후
    </details>
<details>
<summary>요약하기</summary>
음하하하히하하하하하하하하하
</details>














