// function solution(info, query) {
//     var answer = new Array(query.length).fill(0);
//     let strquery = [];
//     let strinfo = [];
//     for(let i=0; i<query.length; i++){
//         let str = query[i].split(' ');
//         for(let j=0; j<str.length; j++){
//             if(str[j] == 'and'){
//                 str.splice(j,1)
//             }
//         }
//         strquery.push(str)
//     }
//     for(let i=0; i<info.length; i++){
//         let arrinfo = info[i].split(' ');
//         strinfo.push(arrinfo)
//     }
//     for(let i=0; i<strquery.length; i++){
//         for(let j=0; j<strinfo.length; j++){
//             let flag = true;
//             for(let k=0; k<4; k++){
//                 if(strquery[i][k] != strinfo[j][k]){
//                     if(strquery[i][k] != '-'){
//                         flag = false
//                         break
//                     }
//                 }
//             }
//             if(strinfo[j][4]-strquery[i][4]>=0){
//                 if(flag){
//                     answer[i]+=1;
//                 }

//             }
//         }
//     }
//     return answer;
// }

//효율성 검사 통과 실패
