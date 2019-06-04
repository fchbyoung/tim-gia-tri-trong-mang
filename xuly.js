function xuly() {
    let n = prompt("Enter a number : ");
    let arr = [26,5,97,8,12,96];
    for(let i = 0; i < arr.length; i++){
        if(n == arr[i]){
            alert("Value " + arr[i] + " found at " + i);
        }
    }
}
xuly();