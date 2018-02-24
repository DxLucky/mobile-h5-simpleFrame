import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import "./navList.scss";

class NavList extends React.Component{
    static propTypes = {
        navArr: PropTypes.array
    };
    constructor(props){
        super(props)
    }
    render(){
        let {navArr}=this.props;
        return(
            <ul className="navList">
                {
                    navArr.map((item,i)=>{
                        return(
                            <li key={i}>
                                <NavLink to={item.url} className="navLink">
                                    <span>{item.text}</span>
                                    <i className="iconfont icon-arrow-right-copy"/>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default NavList