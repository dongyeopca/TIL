## 테이블생성
__CREATE__   
_user_ 라는 이름을 가지고 _id, nickname, age_ 의 컬럼을 가지고 있는 테이블을 생성해보자

```SQL
CREATE TABLE users
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
        nickname TEXT,
        age INTEGER);
```
## 데이터 입력
__INSERT__
```SQL
INSERT INTO users VALUES(1,"차동엽",25);
INSERT INTO users VALUES(2,"동엽",25);
```
or
```SQL
INSERT INTO users(nickname) VALUES("동엽2")
```
컬럼명을 지정하지 않으면 지정되지 않은 값은 null로 처리된다.

## 데이터 불러오기

* 작성 순서
    > SELECT - FROM - WHERE - GROUP BY - HAVING - ORDER BY
* 실행 순서

    > FROM - WHERE - GROUP BY - HAVING - SELECT - ORDER BY

__SELECT__  
가져올 column명을 입력한다.
```SQL
SELECT * FROM 테이블명; //
SELECT 열1,열2 FROM 테이블명
```
__WHERE__
```SQL
SELECT 열1,열2, FROM 테이블명 WHERE 조건식;

SELECT * FROM users WHERE nickname = '동엽';
//닉네임이 동엽인 경우만 조회

SELECT * FROM users WHERE age IS NULL;
//age열이 NULL인 경우만 조회

SELECT * FROM users WHERE nickname = '동엽' AND age = 25;
//nickname이 동엽이고 age가 25인경우만 조회

SELECT * FROM users WHERE nickname = '동엽' or age = '25'
//nickname이 동엽이거나 age가 25인경우만 조회

SELECT * FROM users WHERE NOT age = 25;
//age가 25가 아닌경우만 조회
```

> AND는 OR에 비해 우선순위가 높다.괄호를 통해 우선순위를 바꿀수 있다.

__GROUP BY__  
그룹화(분할)하고자 하는 필드명
<br/>  

__HAVING__  
GROUP BY에 명시된 그룹에 대한 검색 조건
<br/>  

__ORDER BY__
정렬하고자 하는 기준 필드명

__DISTINCT__  
중복 제거!
```SQL
SELECT [DISTINCT] 필드명
FROM 테이블명
WHERE 조건
GROUP BY 필드명
HAVING 조건
ORDER BY 필드명;
```






