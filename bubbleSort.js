function sortArray(arr) {
    let n = arr.length;

    // Outer loop to traverse the array
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
        
            // If the current element is greater
            // than the next element
            if (arr[j] > arr[j + 1]) {
            
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true; 
            }
        }

        // If no two elements were swapped by inner loop,
        // then break the loop
        if (!swapped)
            break;
    }
}

// Driver code
let arr = [64, 34, 25, 12, 22, 11, 90];
sortArray(arr);
console.log("Sorted array:", arr.join(" "));
