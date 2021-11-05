export default {
  state: {
    menu: [],
    currentMenu: null,
    tagList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ]
  },
  mutations: {
    selectMenu(state, val) {
      if (val.name != 'home') {
        state.currentMenu = val
        let result = state.tagList.findIndex((item) => val.name === item.name)
        if (-1 === result) {
          state.tagList.push(val)
        }
      } else {
        state.currentMenu = null
      }
    },
    closeTag(state, val) {
      let result = state.tagList.findIndex((item) => item.name === val.name)
      state.tagList.splice(result, 1)
    }
  },
  actions: {}
}
