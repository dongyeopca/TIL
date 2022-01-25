# 투포인터
* 구간합 문제에서 자주 사용된다.
* 2중 포문으로 구하는것에 비해 선형시간복잡도를 가질수있다.
* 예를들어 [1,2,3,4,5]에서 연속된 수의 합이 m=4가 되는 배열의 개수 구하기.
* 적용하기
    * start,end 두개의 포인터를 시작점에 놓는다
    * s부터 e까지의 합이 m과 같다면 카운트한다.
    * s부터 e까지의 합이 m이 작거나 같으면 e를 1 증가시킨다.
    * m보다 크면 s를 1 중가시킨다.
    * 2~4번 과정을 반복한다.

```javascript
    let array = [1,2,3,4,5]
    const target = 5
    const e = 0
    const summary = 0
    const result = 0

    for(let s=0; s<array.length; s++){
        while(summary<target && e<array.length){
            summary += array[e]
            end += 1
        }
        if(summary == target){
            result += 1
        }
        summary -= array[s]
    }
    console.log(result)
 ```

 # prefix sum
 * 정해진 구간 내의 합을 구할때 사용한다.
 * prefixsum사용시 o(n^2){수열의 합 => n(n+1)/2}의 시간복잡도에서 선형시간복잡도를 가질수있다.

```javascript
    const array = [1,2,3,4,5]
    const prefix = [0];
    let summary = 0;
    for(const i of array){
        summary+=i
        prefix.push(summary)
    }
    // l이 3 r이 5라면
    const l = 3
    const r = 5
    console.log(prefix[r]-prefix[l-1])
```
