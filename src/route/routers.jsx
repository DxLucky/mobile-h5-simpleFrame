import React from "react";
import {Route,BrowserRouter as Router,Switch,Redirect} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import "lib-flexible";//移动端rem适配
import thunk from 'redux-thunk';
import logger from "redux-logger";
import "../asset/style/common.scss";

import asyncComponent from "../route/asyncComponent/asyncComponent.jsx";//按需加载
const Index=asyncComponent(()=>import("../app/index.jsx"));//首页
const RankIndex=asyncComponent(()=>import("../app/rank/rankIndex.jsx"));//排行榜
const RankIncome=asyncComponent(()=>import("../app/rank/rankIncome/rankIncome.jsx"));//收入排行榜
const RankOrder=asyncComponent(()=>import("../app/rank/rankOrder/rankOrder.jsx"));//订单排行榜

import rootReducer from "../redux/indexRuducer.jsx";//引入Reducer 一般一个项目把所有redcer集中在一个Reducer返回
const store=createStore(//创建应用的唯一的store
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))// applyMiddleware(thunk,logger)
);

const Routers =()=>{
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/rank" component={RankIndex}/>
                    <Route path="/rank/rankIncome" component={RankIncome}/>
                    <Route path="/rank/rankOrder" component={RankOrder}/>
                </Switch>
            </Router>
        </Provider>
    )
};

export default Routers