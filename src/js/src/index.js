import { test_map, test_foreach } from "./test_map_and_foreach";
import { test_json_vs_object } from "../json/test_json_vs_object";
import { test_async, test_sync } from "./test_sync_async_method";
import {
  test_async_callback_function,
  test_sync_callback_function,
  test_no_callback_function
} from "./callback_method/test_calllback_function";
import { test_promoise } from "./promise/test_promise";

export function testJS(key) {
  key = "promoise";
  switch (key) {
    case "json_vs_oibject":
      test_json_vs_object();
      break;

    case "map":
      test_map();
      break;

    case "foreach":
      test_foreach();

    case "async":
      test_async();
      break;

    case "sync":
      test_sync();
      break;

    case "sync_callback_function":
      test_async_callback_function();
      // test_sync_callback_function();
      // test_no_callback_function();
      break;

    case "promoise":
      test_promoise();
      break;

    default:
      break;
  }
}
