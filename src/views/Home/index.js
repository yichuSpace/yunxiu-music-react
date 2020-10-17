import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'

import './index.scss'

function Home (props) {
  const { route } = props

  return (
    <>
      <div className="m-header">
        <div className="icon "></div>
        <h1 className="text">云袖音乐</h1>
        <div className="mine">
          <i className=" icon-mine"></i>
        </div>
      </div>
      <div className="flex-align-center nav-tabs">
        <NavLink to="/recommend" activeClassName=" nav-tabs-item-select"
                 className="flex_1 nav-tabs-item"><span> 推荐 </span></NavLink>
        <NavLink to="/singers" activeClassName="nav-tabs-item-select" className="flex_1 nav-tabs-item"><span> 歌手 </span></NavLink>
        <NavLink to="/rank" activeClassName="nav-tabs-item-select"
                 className="flex_1 nav-tabs-item"><span> 排行榜 </span></NavLink>
      </div>
      {renderRoutes(route.routes)}
    </>
  )

}

export default React.memo(Home)
