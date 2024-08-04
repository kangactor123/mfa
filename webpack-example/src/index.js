import { join } from "lodash-es";

const component = () => {
  const ele = document.createElement("div");
  ele.innerHTML = join(["hello", "webpack!!"], ", ");
  console.log("아무말 대잔치");
  return ele;
};

document.body.appendChild(component());
