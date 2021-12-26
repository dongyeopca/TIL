function solution(nums) {
    const n_choose = nums.length/2;
    let answer = [];
    let count = 0
    for(let i =0; i<nums.length; i++){
        if(answer.indexOf(nums[i]) == -1){
            if(answer.length == n_choose){
                break
            }
            else{
                answer.push(nums[i])
            }
        }
    }
    return answer.length
}
