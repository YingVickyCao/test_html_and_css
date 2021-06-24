import {comparison_op} from '../operator/comparison_op';
import {ternary_op} from '../operator/ternary_op';

export function conditional() {
    // if
    comparison_op();

    // switch
    setWeather('sunny');

    // 三目运算符
    ternary_op();
}

function setWeather(choice) {
    switch (choice) {
        // sunny
        case 'sunny':
            console.log("sunny");
            break;
        case 'rainy':
            console.log("rainy");
            break;
        case 'snowing':
            console.log("snowing");
            break;
        case 'overcast':
            console.log("overcast");
            break;
        default:
            console.log("not match");
    }
}