import './App.css';
import React from "react";
import HistoricPlot from "./components/HistoricalPlot";
import { jsonTransactions } from "./mockdata";
import TransactionsInfo from "./Transaction"
import CategoryRadio from "./components/CategoryRadio";
import DoughnutTransPlot from "./components/DoughnutTransPlot";

function defaultCategory(transactions) {
    if (transactions.get("check").length > 0) return "check"
    else if (transactions.get("natCred").length > 0) return "natCred"
    else return "intCred"
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.transactionsInfo = new TransactionsInfo(jsonTransactions)
        this.state = {
            category: 'check',
            transactions: this.transactionsInfo.transactions,
            transTypes: this.transactionsInfo.transTypes,
            catTotals: this.transactionsInfo.totals,
            balance: this.transactionsInfo.balance,
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
    }
    formatBalance(balance, category) {
        let formatter
        if (category === "intCred") formatter = new Intl.NumberFormat('en-US')
        else formatter = new Intl.NumberFormat('de-DE')
        let result
        if (category === "intCred") result = "US "
        else result = "CLP "
        result += (balance.get(category) < 0) ? "-" : ""
        return result + "$" +  formatter.format(Math.abs(balance.get(category)))
    }
    render() {
        return (
            <div className="App">
                <CategoryRadio category={this.state.category} onValueChange={this.handleCategoryChange}/>
                <p>Balance: {this.formatBalance(this.state.balance, this.state.category)}</p>
                <HistoricPlot transTypes={this.state.transTypes} category={this.state.category}/>
                <DoughnutTransPlot totals={this.state.catTotals.get(this.state.category)}/>
            </div>
        );
    }
    handleCategoryChange(selectedCategory) {
        this.setState({
            category: selectedCategory
        })
    }
}

export default App;
