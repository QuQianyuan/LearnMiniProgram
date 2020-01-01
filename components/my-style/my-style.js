// components/my-style/my-style.js
Component({
  options: {
    // styleIsolation: "isolated" //默认不互相造成影响
    // styleIsolation: "apply-shared" //自定义组件对其他组件造成影响
    styleIsolation: "shared" //自定义组件被其他组件影响
  }
})
