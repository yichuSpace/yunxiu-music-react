import React from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'//renderRoutes 读取路由配置转化为 Route 标签
import routes from './routes/index.js'
import store from './store/index'
import { HashRouter } from 'react-router-dom'
import '@style/index.scss'

function App () {
  return (
    <Provider store={store}>
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  )
}

export default App
