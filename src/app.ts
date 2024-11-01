import { list, getList } from "./js/state";

import * as classes from "./style/global.module.scss";

console.log(classes);

list.push("asdasd");

setTimeout(function () {
  console.log(getList());
}, 1000);
