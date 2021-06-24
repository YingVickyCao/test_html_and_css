import { test_slice, test_delete } from "./test_es6";
import {
  test_scope_and_define_variables,
  test_return_global_var_twice
} from "../variables/test_scope";
import { functions } from "../functions/functions";
import { test_static_func } from "./test_class";

export function testEs6(key) {
  switch (key) {
    case "delete":
      test_delete();
      break;

    case "slice":
      test_slice();
      break;

    case "variable":
      test_scope_and_define_variables();
      break;

    case "func":
      functions();
      break;

    case "static_func":
      test_static_func();
      break;

    case "return_global_var_twice":
      test_return_global_var_twice();
      break;
  }
}
