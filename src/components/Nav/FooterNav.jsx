import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faTableCells, faGear, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom"

const routes = [
  { name: 'Feed', path: '/', icon: faPhone },
  { name: 'Detail', path: '/detail', icon: faUser },
  { name: 'Numpad', path: '/numpad', icon: faTableCells },
  { name: 'Settings', path: '/settings', icon: faGear },
  { name: 'Dot', path: '/dot', icon: faCircleDot },

]

export const CustomLink = ({ toLink, icon }) => {
  return (
    <NavLink
      className={
        isActive => "flex w-1/5 h-full justify-center items-center" +
          (isActive ? "flex justify-center items-center h-10 border-b-2 border-green-400" : "")}
      to={toLink}
    >
      <FontAwesomeIcon icon={icon} />
    </NavLink>
  )
}

export const FeedLink = ({ toLink, icon, totalCalls }) => {
  return (
    <NavLink exact={true}
      className={
        isActive => "flex w-1/5 h-full justify-center items-center" +
          (isActive ? "flex justify-center items-center h-10 border-b-2 border-green-400" : "")}
      to={toLink}
    >
      <FontAwesomeIcon icon={icon} />

      {totalCalls > 0 ?
        <sup className="flex justify-center items-center w-6 h-4 rounded-full bg-red-400 text-white">{totalCalls}</sup>
        : null
      }
    </NavLink>
  )
}

export const NumpadLink = ({ toLink, icon }) => {
  return (
    <div className="inline-block w-1/5">
      <Link className="absolute flex w-16 h-16 border-4 rounded-full bg-green-500 justify-center items-center bottom-4 left-[42%] right-[50%]" to={toLink}>
        <FontAwesomeIcon icon={icon} />
      </Link>
    </div>
  )
}

export const FooterNav = ({ totalCalls }) => {
  return (
    <div className="absolute w-full h-14 bg-white">
      <nav className="static flex flex-row space-x-2 w-full h-full justify-between items-center pl-6 pr-6 text-xl text-center">
        {routes.map((item, idx) => {
          return (
            item.name === "Numpad" ?
              <NumpadLink key={`footer-nav-${idx}`} toLink={item.path} icon={item.icon} />
              :
              item.name === "Feed" ?
                <FeedLink key={`footer-nav-${idx}`} toLink={item.path} icon={item.icon} totalCalls={totalCalls} />
                :
                <CustomLink key={`footer-nav-${idx}`} toLink={item.path} icon={item.icon} />
          )
        })
        }
      </nav>
    </div>
  )
}
