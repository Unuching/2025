let my_numbers = [2, 5, -7, -4, 77, -56, 77, 89, 120, -56, -33, 434, 77, 88];

const positive_numbers = remove_negetive(my_numbers, (x) => x >= 0);

console.log(positive_numbers);

function remove_negetive(numbers, callback){
    const my_array = []
    for (const x of numbers) {
        if (callback(x)){
            my_array.push(x)
        }
    }
    return my_array
}
