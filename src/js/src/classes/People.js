class P1 {
  constructor() {
    this.name = "P1";
  }
}

class P2 {
  constructor(name) {
    this.name = name;
  }
}

class P3 {
  name;

  constructor(name) {
    this.name = name;
  }
}

class C3 extends P3 {
  height;

  //   Line 24:5:  Expected an assignment or function call and instead saw an expression  no-unused-expressions
  constructor(name) {
    super(name);
    this.height = "";
  }

  get info() {
    //   Line 26:26:  Unexpected use of 'innerWidth'  no-restricted-globals
    // return this.height * innerWidth;
    return this.name + "," + this.height;
  }

  setHeight(height) {
    this.height = height;
  }

  height(height) {
    this.height = height;
  }
}

class Bean {
  constructor(type) {
    this.type = type;
    this.array = [];
  }

  pushItems() {
    this.array.push(this.type + "_item_1");
    this.array.push(this.type + "_item_2");
    console.log(this.array);
  }
}

class Convertor {
  constructor(dataArray) {
    this.dataArray = dataArray;
  }

  buildData() {
    console.log("buildData");
    for (let i = 0; i < this.dataArray.length; i++) {
      console.log("i=" + i);
      this.dataArray[i].pushItems();
    }
  }
}

class Data {
  constructor() {
    this.str = "A";
    this.num = 10;
  }
}

export function test_classes() {
  // const p1 = new P1();
  // console.log(p1.name); // P1
  //
  // const p2 = new P2("P2");
  // console.log(p2.name); // P2
  //
  // const p3 = new P3("P3");
  // console.log(p3.name); // P3
  //
  // const c3 = new C3("C3");
  // console.log(c3.name); // C3
  // console.log(c3.info); // C3,undefined
  // c3.setHeight(31);
  // console.log(c3.info); // C3,31
  // c3.height = 32;
  // console.log(c3.info); // C3,32

  // const bean1 = new Bean("A");
  // const bean2 = new Bean("B");
  // const bean3 = new Bean("C");
  // const dataArray = [bean1, bean2, bean3];
  // const convertor = new Convertor(dataArray);
  /**
   * [
   * {
   *     type:"A",
   *     array:["A_item_1", "A_item_2"]
   * },
   * {
   *     type:"B",
   *     array:["B_item_1", "B_item_2"]
   * }
   * ,{
   *     type:"C",
   *     array:["C_item_1", "C_item_2"]
   * }
   * ]
   */
  // convertor.buildData();

  var data1 = new Data();
  var data2 = {
      str: 'A',
      num: 10
  };
  var data3 = new Data();
  // var data4 = {
  //     str: 'A',
  //     num: 10
  // };
  console.log(data1);
  console.log(data2);
  // console.log(data3);
  // console.log(data4);

  /**
   * Object: 即使包含的值完全一样，也是不相同
   * class 是一个 轻量的 object，性能更好
   * class vs object
   */
  // TODO:
  // console.log("typeof (data1):" + typeof (data1));    // object
  // console.log("typeof (data2):" + typeof (data2));    // object
  //
  // console.log('data1 === data2:' + (data1 === data2));    // false
  // console.log('data1 == data2:' + (data1 == data2));      // false
  //
  // console.log('data1 === data3:' + (data1 === data3));    // false
  // console.log('data1 == data3:' + (data1 == data3));      // false
  //
  // console.log('data2 === data4:' + (data2 === data4));    // false
  // console.log('data2 == data4:' + (data2 === data4));     // false
}
