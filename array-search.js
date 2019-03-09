// Linear Search Function
/* function search(array, item) {
    let index = null;

    for (let i = 0; i < array.length; i++) {
        if (item === array[i]) {
            index = i;
            break
        }
    }
    return index;
} */

// Binary Search Function
function search(array, item) {
    let min = 0; // 1
    let max = array.length - 1; // 1

    while (true) { // lg n
        const middleIndex = Math.floor((min + max)/2.0); // lg n
        const currentItem = array[middleIndex]; // lg n

        if (currentItem === item) { //lg n
            // We found it!
            return middleIndex;
        } else if (currentItem < item) { // lg n
            // Look at the right side
            min = middleIndex + 1;
        } else {
            // Look at the left side
            max = middleIndex -1; // lg n
        }

        if (min > max) { //lg n
            return null; //1 
        }
    }
}