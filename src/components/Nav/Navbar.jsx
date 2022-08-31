import React from "react";
import { Header } from "../../Header.jsx";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";



export class NavBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="w-full h-16 bg-white">
        <div className="flex flex-row justify-between w-full h-full items-center">
          <Header title={this.props.title} />
          <div className="flex flex-row justify-center items-center space-x-4 mt-2 pl-6 pr-6 font-bold text-base bg-gray-200 h-full rounded-t-lg">
            {this.props.links.map((link, linkIdx) => {
              return (
                <div key={`nav-link-${linkIdx}`} className="flex flex-row items-center justify-center space-x-4" >
                  <NavLink exact={true} to={link.to} className={isActive => isActive ? "flex border-b-2 border-orange-400 h-12 justify-center items-center" : ""}>
                    {link.name}
                  </NavLink>
                  <div className="border-l-[1.5px] border-dashed border-gray-400 h-4"></div>
                </div>
              )
            })}

            <FontAwesomeIcon icon={faGears} />


          </div>
        </div>
      </div >
    )
  }

}
