import React from "react";
import PageContainer from "../../../components/pageContainer/pageContainer.jsx";

class RankOrder extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <PageContainer
                className="rankIncomeArea"
                headerTitle="订单排行榜"
                history={this.props.history}
            >
                <h1>这是订单排行榜里面的内容123</h1>
            </PageContainer>
        )
    }
}

export default RankOrder