let nameArray = ['A', 'B', 'C'];
console.log(nameArray);
console.log(nameArray[0]);

export function data_type_array() {
    accessAndModifyElement();
    lengthOfArray();
    stringtoArray();
    array2String();
    addItemToEnd();
    deleteItemFromEnd();
    addItemToStart();
    deleteItemFromStart();
}

function accessAndModifyElement() {
    let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
    console.log(shopping);      // (5) ["bread", "milk", "cheese", "hummus", "noodles"]
    console.log(shopping[0]);   // bread
    shopping[0] = 'Tom';
    console.log(shopping[0]);   // Tom

    let random = ['tree', 795, [0, 1, 2]];
    console.log(random);        // (3) ["tree", 795, Array(3)]
    console.log(random[2][1]);  //  1
}

function lengthOfArray() {
    let sequence = [1, 1, 2, 3, 5, 8, 13];
    console.log(sequence);      // (7) [1, 1, 2, 3, 5, 8, 13]
    console.log(sequence.length);   // 7
    console.log('--> loop')
    for (let i = 0; i < sequence.length; i++) {
        console.log(sequence[i]);
    }
    console.log('<-- loop')
}

// string -> array
function stringtoArray() {
    let str1 = 'Manchester,London,Liverpool';
    let myArray = str1.split(',');
    console.log(myArray);   // (3) ["Manchester", "London", "Liverpool"]
}

// array -> string
function array2String() {
    let myArray = ["Manchester", "London", "Liverpool"];
    let str2 = myArray.join(",");
    console.log(str2);      // Manchester,London,Liverpool
    let str3 = myArray.toString();
    console.log(str3);      // Manchester,London,Liverpool
}

function addItemToEnd() {
    let myArray = ['A', 'B',];
    myArray.push('C');
    console.log(myArray);   //  (3) ["A", "B", "C"]

    myArray.push('D', 'E');
    console.log(myArray);   // (5) ["A", "B", "C", "D", "E"]
}

function deleteItemFromEnd() {
    let myArray = ['A', 'B',];
    myArray.pop();
    console.log(myArray);   // ["A"]
}

function addItemToStart() {
    let myArray = ['A', 'B',];
    myArray.unshift('C');
    console.log(myArray);       // (3) ["C", "A", "B"]
}

function deleteItemFromStart() {
    let myArray = ['A', 'B',];
    myArray.shift();
    console.log(myArray);       // ["B"]

}