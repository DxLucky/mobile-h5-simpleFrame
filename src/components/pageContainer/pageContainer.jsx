import React from "react";
import PropTypes from "prop-types";
import "./pageContainer.scss";

class PageContainer extends React.Component{
    static propTypes = {
        className: PropTypes.string,
        headerTitle: PropTypes.string,
        history: PropTypes.object,
        // column: PropTypes.array,
        // loading: PropTypes.bool,
        // hasBoder: PropTypes.bool,
        // tableWidth: PropTypes.string,
    };
    constructor(props){
        super(props)
    }
    render(){
        let {className,headerTitle,history}=this.props;

        return(
            <div className="pageContainer">
                <ul className="headerArea">
                    <li onClick={history.goBack}>
                        <i className="iconfont icon-fanhui"/>
                    </li>
                    <li>
                        <span className="title">{headerTitle}</span>
                    </li>
                    <li>
                        <i className="iconfont icon-caidan"/>
                    </li>
                </ul>
                <section className={className}>
                    {this.props.children}
                </section>
            </div>
        )
    }
}

export default PageContainer