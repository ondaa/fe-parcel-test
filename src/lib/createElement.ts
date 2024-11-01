import classNameJoin, { ClassNameJoinParams } from "./classNameJoin";

export default function createElement(tag: keyof HTMLElementTagNameMap) {
  const element = document.createElement(tag);

  return {
    get() {
      return element;
    },
    text(text: string) {
      element.innerText = text;
    },
    className: {
      get() {
        return element.className;
      },
      set(className: ClassNameJoinParams[]) {
        element.className = classNameJoin(className);
      },
    },
    copy() {
      return element.cloneNode(true);
    },
  };
}
