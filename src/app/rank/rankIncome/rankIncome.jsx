import React from "react";
import PageContainer from "../../../components/pageContainer/pageContainer.jsx";

class RankIncome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <PageContainer
                className="rankIncomeArea"
                headerTitle="收入排行榜"
                history={this.props.history}
            >
                <h1>这是收入排行榜里面的内容</h1>
            </PageContainer>
        )
    }
}

export default RankIncome