import App from "./App.svelte"

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
})

export default app

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// 화면에 변경되었을 때 자동적으로 감지하여 화면이 새로고침되도록 해줌
if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
}
