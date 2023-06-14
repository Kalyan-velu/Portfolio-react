import React from 'react'
import { NavLink as NaL, Link as L } from 'react-router-dom'
import './Link.css'

export const NavLink = ({ title, className, to, children }) => {
  return (
    <NaL to={`${to}`} className={({ isActive }) => isActive ? `${className} active navlink` : `${className} navlink`} >
      {children}
    </NaL>
  )
}

export const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
}

export const Link = ({ link, title, style, className, secClass, to, children }) => {
  return (
    <L onClick={() => openInNewTab(link)} title={title} style={style} className={`${className} ${secClass} navlink`}>
      {children}
    </L>
  )
}

