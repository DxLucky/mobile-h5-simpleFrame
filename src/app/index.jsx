import React from "react";
import {NavLink} from "react-router-dom";
import PageContainer from "../components/pageContainer/pageContainer.jsx";
import "./index.scss";
class Index extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <PageContainer
                className="indexArea"
                headerTitle="移动端H5"
                history={this.props.history}
            >
                <ul className="navSign">
                    <li>
                        <NavLink to="/rank">
                            <img src={require("../asset/images/rank.png")}/>
                            <figcaption>排行榜</figcaption>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/operation">
                            <img src={require("../asset/images/rank.png")}/>
                            <figcaption>经营分析</figcaption>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/rank">
                            <img src={require("../asset/images/rank.png")}/>
                            <figcaption>运营分析</figcaption>
                        </NavLink>
                    </li>
                </ul>
                <ul className="navSign">
                    <li>
                        <NavLink to="/rank">
                            <img src={require("../asset/images/rank.png")}/>
                            <figcaption>风险管控</figcaption>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/rank">
                            <img src={require("../asset/images/rank.png")}/>
                            <figcaption>顾客评价</figcaption>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/rank">
                            <img src={require("../asset/images/rank.png")}/>
                            <figcaption>服务资源</figcaption>
                        </NavLink>
                    </li>
                </ul>
                <ul className="navSign">
                    <li>
                        <NavLink to="/rank">
                            <img src={require("../asset/images/rank.png")}/>
                            <figcaption>帮助</figcaption>
                        </NavLink>
                    </li>
                </ul>
            </PageContainer>
        )
    }
}

export default Index