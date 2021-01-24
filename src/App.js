import './App.css';
import React from "react";
import HistoricPlot from "./HistoricalPlot";
import { jsonTransactions } from "./mockdata";
import { parseTransactions } from "./Transaction"
import CategoryRadio from "./CategoryRadio";

function defaultCategory(transactions) {
    if (transactions.get("check").length > 0) return "check"
    else if (transactions.get("natCred").length > 0) return "natCred"
    else return "intCred"
}

class App extends React.Component {
    constructor(props) {
        super(props);
        let transactions = parseTransactions(jsonTransactions)
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
