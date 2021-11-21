import Cookie from 'js-cookie'
export default {
  state: {
    isCollapse: false,
    currentMenu: null,
    tagList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],
    menu: []
  },
  mutations: {
    clearIsCollapse(state) {
      state.isCollapse = false
    },
    clearCurrentMenu(state) {
      state.currentMenu = null
    },
    clearTagList(state) {
      state.tagList = []
    },
    setMenu(state, val) {
      state.menu = val
      Cookie.set('menu', JSON.stringify(val))
      console.log(val, 'vuex')
    },
    clearMenu(state) {
      state.menu = []
      Cookie.remove('menu')
    },
    addMenu(state, router) {
      if (!Cookie.get('menu')) {
        return
      }
      let menu = JSON.parse(Cookie.get('menu'))
      state.menu = menu
      let currentMenu = [
        {
          path: '/',
          component: () => import(`@/views/Main`),
          children: []
        }
      ]
      menu.forEach((item) => {
        if (item.children) {
          item.children = item.children.map((item) => {
            item.component = () => import(`@/views/${item.url}`)
            return item
          })
          currentMenu[0].children.push(...item.children)
        } else {
          item.component = () => import(`@/views/${item.url}`)
          currentMenu[0].children.push(item)
        }
        console.log(currentMenu, 'cur')
        router.addRoutes(currentMenu)
      })
    },
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
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
}
