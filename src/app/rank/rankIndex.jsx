import React from "react";
import PageContainer from "../../components/pageContainer/pageContainer.jsx";
import NavList from "../../components/navList/navList.jsx"

class RankIndex extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const navArr=[
            {
                text:"收入排行榜",
                url:"/rank/rankIncome"
            },
            {
                text:"订单排行榜",
                url:"/rank/rankOrder"
            },
            {
                text:"运单排行榜",
                url:"/rank/rankIncome"
            },
            {
                text:"送装一体排行榜",
                url:"/rank/rankIncome"
            }
        ];
        return(
            <PageContainer
                headerTitle="排行榜"
                history={this.props.history}
            >
               <NavList
                   navArr={navArr}
               />
            </PageContainer>
        )
    }
}

export default RankIndex