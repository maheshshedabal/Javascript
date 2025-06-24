//function to check if array contains duplicate elements
//time complexity: O(n)
//space complexity: O(n)

function isDuplicate(array){
    //Slower (O(n) for includes())
    //let items=[];

    // Faster (O(1) average for has)
    let items = new Set([]); 

    for(let i=0; i< array.length; i++){
        if(items.has(array[i])){
           return true; 
        }
        items.add(array[i]);
    }

    return false;
}

console.log('Duplicate:'+isDuplicate([1,2,3,4,5,6]));