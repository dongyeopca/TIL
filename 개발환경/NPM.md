# NPM(node package manager)
node.js 설치시 자동으로 함께 설치됨  
노드의 모듈을 관리해주는 패키지 매니저

## npm으로 외부 모듈 설치하기
```
    지역 설치

    npm install 패키지명
    or
    npm i 패키지명

    전역 설치
    npm install -g 패키지명
```

* package.json 생성 명령어 
```
    npm init
```
* npm버젼 5이상부터는 --save옵션을 붙이지 않아도 package.json의 dependency 항목에 자동으로 모듈을 추가한다.
* Package.json
    *  Dependencies  
        의존하는 모듈 및 버전
    * Devdependencies  
        개발용으로 필요한 패키지 ex) 개발시 테스트를 위해 필요한 모듈인데 실제 배포시에는 필요없는 모듈  
        dependencies와 분리함으로써 필요없는 모듈을 설치하지 않아 빌드시간을 단축시킬수있음
        ```
            npm i  패키지명 -D
        ```

## npm 커스텀 명령어
사용자가 임으로 명령어의 이름과 동작을 정의해서 사용할 수 있는 기능  
**npm 커스텀 명령어는 모두 'npm run 명령어 이름' 형식으로 실행 할수 있다**  
ex)
```
    //package.json
    {
        ...
        "scripts:{
            "start":"node index.js"
        }
    }
```
npm run start라고 명령어 입력시 node index.js가 실행된다.  
명령어가 길어질수록 편리한 기능!


npm 공식문서 : https://docs.npmjs.com/
