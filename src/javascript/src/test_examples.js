import {var_hoisting as var_var_hoisting, redeclared as var_redeclared} from "./variables/example_var";
import {var_hoisting as let_var_hoisting, redeclared as let_redeclared} from "./variables/example_let";
import {dynamicTyping} from "./basic_types/dynamic_typing";
import {data_type_number} from "./basic_types/t_number";
import {data_type_string} from "./basic_types/t_string";
import {data_type_array} from "./basic_types/t_array";
import {arithmetic_op} from './operator/arithmetic_op';
import {increment_op} from './operator/increment_op';
import {assignment_op} from './operator/assignment_op';
import {comparison_op} from './operator/comparison_op';
import {logical_op} from './operator/logical_op';
import {test_classes} from "./classes/People";
import {conditional} from './conditional/conditional';
import {loop} from './loop/loop';
import {functions} from './functions/functions';
import {scope} from './functions/scope';
import {json} from './json/example';

export function test_examples() {
    // test_variable();
    // test_dataType();
    // test_operator()
    // test_if();
    // test_conditional();
    // test_loop();
    // test_functions();
    test_Json();
}

function test_variable() {
    var_var_hoisting();
    let_var_hoisting();

    var_redeclared();
    let_redeclared();

    dynamicTyping();
}

function test_dataType() {
    // data_type_number();
    // data_type_string();
    data_type_array();
}

function test_operator() {
    // arithmetic_op();
    // increment_op();
    // assignment_op();
    // comparison_op();
    logical_op();
}

function test_conditional() {
    conditional();
}

function test_loop() {
    loop();
}

function test_functions() {
    functions();
    scope();
}

function test_Json() {
    json();
}