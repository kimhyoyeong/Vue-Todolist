import store from "@/store/index";

export function checkLocalStorages(to, from, next) {
  if (localStorage.getItem("todo-filter")) {
    store.dispatch("setFilter", localStorage.getItem("todo-filter"));
  }
  if (localStorage.getItem("todo-list")) {
    store.dispatch(
      "setTodoList",
      JSON.parse(localStorage.getItem("todo-list"))
    );
  }
  if (localStorage.getItem("todo-select")) {
    store.dispatch(
      "setSelect",
      JSON.parse(localStorage.getItem("todo-select"))
    );
  }
  next();
}
