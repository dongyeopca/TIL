# SELECT

ANIMAL_INS  테이블에서 ANIMAL_ID순으로 모든 컬럼 조회

```SQL
SELECT * FROM ANIMAL_INS ORDER BY ANIMAL_ID

```

테이블에서 NAME,DATETIME 컬럼 ANIMAL_ID 역순으로 조회

```SQL
SELECT NAME,DATETIME FROM ANIMAL_INS ORDER BY ANIMAL_ID DESC
```

테이블에서 아픈 동물의 아이디와 이름을 아이디 순으로 조회

```SQL
SELECT ANIMAL_ID,NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION = 'Sick' ORDER BY ANIMAL_ID
```

테이블에서 젊은 동물의 아이디와 이름을 아이디순으로 조회
```SQL
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION != 'Aged' ORDER BY ANIMAL_ID
```

테이블에서 모든 동물의 아이디와 이름을 아이디 순으로 조회

```SQL
SELECT ANIMAL_ID,NAME FROM ANIMAL_INS ORDER BY ANIMAL_ID
```

테이블에서 모든 동물의 아이디와 이름,보호 시작일을 이름 순으로 조회(단 이름이 같은 동물이면 보호를 나중에 시작한 동물을 먼저 보여줘야함)

```SQL
SELECT ANIMAL_ID,NAME,DATETIME FROM ANIMAL_INS ORDER BY NAME ASC, DATETIME DESC
```

테이블에서 가장 먼저 들어온 동물의 이름을 조회

```SQL
SELECT NAME FROM ANIMAL_INS ORDER BY DATETIME LIMIT 1
```
# SUM,MAX,COUNT,MIN
테이블에서 가장 최근에 들어온 동물이 언제 들어왔는지 조회
```SQL
SELECT DATETIME FROM ANIMAL_INS ORDER BY DATETIME DESC LIMIT 1

or

SELECT MAX(DATETIME) FROM ANIMAL_INS

```

테이블에서 가장 먼저 들어온 동물이 언제 들어왔는지 조회

```SQL
SELECT MIN(DATETIME) FROM ANIMAL_INS
```

동물 수 구하기
```SQL
SELECT COUNT(ANIMAL_ID) FROM ANIMAL_INS
```
테이블에서 동물의 이름이 몇개인지 조회하자. 이름이 null인 경우는 집계하지 않으며 중복되는 이름은 하나로 친다.
```SQL
SELECT COUNT(DISTINCT(NAME)) FROM ANIMAL_INS WHERE NOT NAME = 'NULL'
``` 

# GROUP BY
테이블에서 고양이와 개가 각각 몇마리인지 조회
단 고양이가 개보다 먼저 조회되어야한다.
```SQL
SELECT ANIMAL_TYPE,count(ANIMAL_ID) FROM ANIMAL_INS GROUP BY ANIMAL_TYPE ORDER BY ANIMAL_TYPE ASC
```

테이블에서 동물 이름 중 두번 이상 쓰인 이름과 해당 이름이 쓰인 횟수를 조회하라.단 이름이 없는 동물은 집계에서 제외하며 이름순으로 조회하라.

```SQL
SELECT NAME,COUNT(NAME) as COUNT WHERE NOT NAME = 'NULL' FROM ANIMAL_INS GROUP BY NAME HAVING COUNT > 1 ORDER BY NAME
```

테이블에서 각 시간대별로 입양이 몇건 발생했는지 조회하고 시간대 순으로 정렬하라.
```SQL
SELECT HOUR(DATETIME) as 'HOUR' ,COUNT(ANIMAL_ID) FROM ANIAML_OUTS WHERE HOUR(DATETIME)>=9 and HOUR(DATETIME)<20 GROUP BY HOUR ORDER BY HOUR
```

테이블에서 0시부터 23시까지 각 시간대별로 입양이 몇건이나 발생했는지 조회하라.결과는 시간대 순으로 정렬
```SQL
SET @HOUR_LIST : -1;
SELECT (@HOUR_LIST := @HOUR_LIST +1) AS HOUR,(SELECT COUNT(*) FROM ANIMAL_OUTS WHERE HOUR(DATETIME) = @HOUR_LIST) AS COUNT FROM ANIMAL_OUTS
WHERE @HOUR_LIST<23
```



# IS NULL
테이블에서 이름이 없는 채로 들어온 동물의 id를 조회하라 단 id는 오름차순 정렬되어야한다.

```SQL
SELECT ANIMAL_ID FROM ANIMAL_INS WHERE NAME IS NULL ORDER BY ANIMAL_ID
```

테이블에서 이름이 있는 동물의 id를 조회하라.단 id는 오름차순 정렬 되어야한다.

```SQL
SELECT ANIMAL_ID FROM ANIMAL_INS WHERE NAME IS NOT NULL ORDER BY ANIMAL_ID
```
테이블에서 모든 동물 타입,성별,이름을 조회하라.단 null이면 'no name'으로 처리하라
```SQL
SELECT ANIMAL_TYPE, IFNULL(NAME,"No name") as NAME, SEX_UPON_INTAKE FROM ANIMAL_INS 
```

# JOIN
입양간 기록은 있는데 보호소에 들어온 기록이 없는 동물의 id와 이름을 id 순으로 조회하는 sql문을 작성하라.
```SQL
SELECT B.ANIMAL_ID,B.NAME FROM ANIMAL_OUTS B LEFT JOIN ANIMAL_INS A on B.ANIMAL_ID = A.ANIMAL_ID WHERE A.ANIMAL_ID IS NULL
```

보호 시작일보다 입양일이 더 빠른 동물의 아이디와 이름을 조회하는 sql문을 작성하라.보호 시작일이 빠른순으로 조회되어야한다.
```SQL
SELECT A.ANIMAL_ID, A.NAME FROM ANIMAL_INS as A JOIN ANIMAL_OUTS as B ON A.ANIMAL_ID = B.ANIMAL_ID where B.DATETIME<A.DATETIME ORDER BY A.DATETIME
```

아직 입양을 못간 동물중, 가장 오래 보호소에 있었던 동물 3마리의 이름과 보호 시작일을 조회하는 sql을 작성하라.결과는 보호 시작일 순으로 조회해야 한다.
```SQL
SELECT B.NAME,B.DATETIME FROM ANIMAL_INS as A LEFT JOIN ANIMAL_OUTS as B on A.ANIMAL_ID = B.ANIMAL_ID where B.ANIMAL_ID IS NULL ORDER BY A.DATETIME LIMIT 3
```

보호소에서 중성화 수술을 거친 동물 정보를 알아보려 한다.보호소에 들어올 당시에 중성화 되지 않았지만 보호소를 나갈 당시에 중성화된 동물의 아이디와 생물 종, 이름을 아이디 순으로 조회하는 sql문을 작성하라.

```SQL
SELECT B.ANIMAL_ID,B.ANIMAL_TYPE,B.NAME FROM ANIMAL_INS as A JOIN ANIMAL_OUTS as B on A.ANIMAL_ID = B.ANIMAL_ID where A.SEX_UPON_INTAKE != B.SEX_UPON_OUTCOME ORDER BY B.ANIMAL_ID
```

# STRING,DATE

동물 보호소에 들어온 동물 중 이름이 lucy,ella,pickle,rogan,sabrina,mitty인 동물의 아이디와 이름,성별 및 중성화 여부를 조회하는 sql문을 작성하라

```SQL
SELECT ANIMAL_ID,NAME,SEX_UPON_INTAKE FROM ANIMAL_INS WHERE NAME IN ("Lucy","Ella","Pickle","Rogan","Sabrina","Mitty") ORDER BY ANIMAL_ID
```

이름에 'el'이 들어가는 개의 아이디와 이름을 조회하는 sql문을 작성하라

```SQL
SELECT ANIMAL_ID,NAME FROM ANIMAL_INS WHERE NAME LIKE "%EL%" AND ANIMAL_TYPE = "Dog"
ORDER BY NAME
```

동물의 아이디와 이름,중성화 여부를 아이디 순으로 조회하는 sql문을 작성하라.이때 중성화 되어있다면 o,아니라면 x라고 표시하라

```SQL
SELECT ANIMAL_ID,NAME,CASE WHEN SEX_UPON_INTAKE LIKE "%spayed%" OR SEX_UPON_INTAKE LIKE "%neutered%" THEN "O" Else "X" END AS "중성화" FROM ANIMAL_INS
```

입양을 간 동물중,보호 기간이 가장 길었던 동물 두마리의 아이디와 이름을 조회하는 sql문을 작성하라.결과는 보호 기간이 긴 순으로 조회해야한다.

```SQL
SELECT A.ANIMAL_ID,A.NAME FROM ANIMAL_OUTS as A JOIN ANIMAL_INS as B on A.ANIMAL_ID = B.ANIMAL_ID ORDER BY DATEDIFF(A.DATETIME,B.DATETIME) DESC LIMIT 2
```

테이블에 등록된 모든 레코드에 대해, 각 동물의 아이디와 이름, 들어온 날짜를 조회하는 sql문을 작성해주세요.결과는 아이디 순으로 조회해야한다.

```SQL
SELECT ANIMAL_ID,NAME,DATE_FROMAT(DATETIME,'%Y-%m-%d') as 날짜 FROM ANIMAL_INS ORDER BY ANIMAL_ID
```