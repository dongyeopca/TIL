

const hanoi = function(n,start,middle,end){
    if(n == 1){
        return console.log(start,"=>",end)
    }
    hanoi(n-1,start,end,middle)
    hanoi(n-1,middle,start,end)
}
