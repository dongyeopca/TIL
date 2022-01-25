
// class minHeap{
//     constructor(){
//         this.heap = [];
//     }

//     swap(node,parent){
//         let temp = this.heap[node]
//         this.heap[node] = this.heap[parent]
//         this.heap[parent] = temp;
//     }

//     pop(){
//         const result = this.heap[0];
//         if(this.heap.length == 1){
//             return result
//         }
//         this.heap[0] = this.heap.pop();
//         let index = 0;
//         while(this.heap[index*2+1] != undefined && this.heap[index*2+1]<this.heap[index]){
//             let smallerIndex = index*2+1
//             if(this.heap[index*2+2] != undefined && this.heap[index*2+2]<this.heap[smallerIndex]){
//                 smallerIndex = index*2+2
//             }
//             this.swap(index,smallerIndex)
//             index = smallerIndex
//         }
//         return result
//     }
//     getlength(){
//         return this.heap.length;
//     }
//     push(node){
//         this.heap.push(node)
//         let index = this.heap.length-1;
//         let parent = Math.floor((index-1)/2)
//         while(index>0 && this.heap[index]<this.heap[parent]){
//             this.swap(index,parent)
//             index = parent
//             parent = Math.floor((index-1)/2);
//         }
//     }
//     addtime(){
//         for(let i=0; i<this.getlength; i++){
//             this.heap[i]+=1
//         }
//     }
// }

// // 큐가 비어있으면 일단 넣음 => 최소힙
// // 작업의 요청부터 종료까지 걸린 시간의 평균
// function solution(jobs){
//     const heap = new minHeap();
//     let [answer, end, i] = [0,0,0];
//     let start = -1;
//     while(jobs.length>i){
//         for(const job of jobs){
//             if(start<job[0]<=end){
//                 heap.push([job[1],job[0]])
//             }
//         }
//         if(heap.getlength>0){
//             const now = heap.pop();
//             start = end;
//             end += now[0];
//             answer += (end-now[1]) //작업 소요시간 
//             i+=1
//         }
//         else{
//             end+=1
//         }
//     }
//     answer = Math.floor(answer/jobs.length)
//     console.log(answer)
// }

// solution([[0, 3], [1, 9], [2, 6]])
