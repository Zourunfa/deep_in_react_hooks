// 手写useState

let index = -1;
const currentStateBoxs = [];
const useState = initialState => {
  index++;
  const currentIndex = index;
  currentStateBoxs[currentIndex] = currentStateBoxs[currentIndex] || initialState;
  const setState = newState => {
    currentStateBoxs[currentIndex] = newState;
    render(); // 这个 render 可以理解为触发了整个 react app 渲染，就像 ReactDOM.render();
  };
  return [ currentStateBoxs[currentIndex], setState ];
};




