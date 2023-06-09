import React from 'react'

import './style/SidebarButton.css'

const SidebarButton = props => (
<button className="sidebarButton" onClick={props.sidebarClickHandler}>
    <div className="sidebarButton__line" />
    <div className="sidebarButton__line" />
    <div className="sidebarButton__line" />
</button>
)

export default SidebarButton