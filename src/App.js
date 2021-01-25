import './App.css';
import React from "react";
import HistoricPlot from "./components/HistoricalPlot";
import { jsonTransactions } from "./mockdata";
import { parseTransactions, transactionBalance } from "./Transaction"
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
        let transactions = parseTransactions(jsonTransactions)
        let balance = transactionBalance(transactions)
        console.log(balance)
        let category = defaultCategory(transactions)
        this.state = {
            category: category,
            transactions: transactions
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
    }
    render() {
        return (
            <div className="App">
                <CategoryRadio category={this.state.category} onValueChange={this.handleCategoryChange}/>
                <HistoricPlot transactions={this.state.transactions} category={this.state.category}/>
                <DoughnutTransPlot/>
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
