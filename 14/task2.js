function isEvenArray(initialArray) {
    // Write code here

    for(let number of initialArray){
        if(number % 2 === 1){
            console.log('NO');
            return;
        }
    }
    console.log('YES');
}

isEvenArray([2,4,6])