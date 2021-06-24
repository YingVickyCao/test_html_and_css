export function assignment_op() {
    augmented_assignment_op();
    simple_assignment_op();
}

// +=
function augmented_assignment_op() {
    {
        // let name;
        // name += "say hello"; // ERROR:"undefinedsay hello"
        // console.log(name);
    }

    {
        let name = '';
        name += "say hello";
        console.log(name);  // say hello
    }


    {
        let name = null;
        name += "say hello";
        console.log(name);  // nullsay hello
    }

    {
        let x = 3;
        x += 3;
        console.log(x); // 6
    }
}

// =
function simple_assignment_op() {
    let str;
    str = 'A';
    console.log(str);   // A
}