const LEN = 15;

export function generateId(){
    let ans = "";
    const subset = "123456789abcdefghijklmnopqrstuvwxyz";
    for(let i=0; i<LEN; i++){
        ans += subset[Math.floor(Math.random() * subset.length)];
    }
    return ans;
}