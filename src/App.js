import './App.css';
import React, {Fragment} from "react";
import HistoricPlot from "./components/HistoricalPlot";
import { jsonTransactions } from "./mockdata";
import TransactionsInfo from "./Transaction"
import CategoryRadio from "./components/CategoryRadio";
import DoughnutTransPlot from "./components/DoughnutTransPlot";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.transactionsInfo = new TransactionsInfo(jsonTransactions)
        this.transactions = this.transactionsInfo.transactions
        this.transTypes = this.transactionsInfo.transTypes
        this.catTotals = this.transactionsInfo.totals
        this.balance =  this.transactionsInfo.balance
        let defaultCat
        if (this.transactionsInfo.categories.length > 0) defaultCat = this.transactionsInfo.categories[0]
        else defaultCat = null
        this.state = {
            category: defaultCat,
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
                {this.state.category ?
                    <Fragment>
                        <CategoryRadio category={this.state.category} onValueChange={this.handleCategoryChange}/>
                        <p>Balance: {this.formatBalance(this.balance, this.state.category)}</p>
                        <HistoricPlot transTypes={this.transTypes} category={this.state.category}/>
                        <DoughnutTransPlot totals={this.catTotals.get(this.state.category)}/>
                    </Fragment> :
                    <h2>Transaction list is empty</h2>
                }
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
