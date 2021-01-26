import React from "react";
import { Scatter } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import * as Zoom from "chartjs-plugin-zoom";
import * as consts from "../consts.js";
import {categoryTransSign} from "../consts.js";

class HistoricPlot extends React.Component {
    constructor(props) {
        super(props);
        this.divStyle = {
            maxWidth: "80%",
            margin: "auto"
        }
        this.plotOptions = this.plotOptions.bind(this)
        this.getDatasets = this.getDatasets.bind(this)
    }
    transactionToPlotData(transactions, category) {
        let data = transactions.get(category)
        let categories = this.categoryTypes(category)
        return data.map((t) => ({x: t.mail_dtime, y: categories.indexOf(t.type)}))
    }
    categoryTypes(category) {
        if (category === "check")
            return Array.from(consts.CHECK_CATEGORIES)
        if (category === "natCred")
            return Array.from(consts.NAT_CRED_CATEGORIES)
        return Array.from(consts.INT_CRED_CATEGORIES)
    }
    plotOptions() {
        return {
            aspectRatio: 4.5,
            plugins: {
                zoom: {
                    zoom: { enabled: true, mode: "x", sensitivity: 3}
                }
            },
            legend: { display: false },
            scales: {
                yAxes: [{
                        type: "category",
                        labels: this.categoryTypes(this.props.category),
                        offset: true
                    }],
                xAxes: [{
                        type: "time",
                        time: { minUnit: "day" },
                    }]
            }
        }
    }
    getDatasets(transTypes, category) {
        let datasets = []
        let categories = this.categoryTypes(category)
        console.log(categories)
        for (let [type, trans] of transTypes.get(category)) {
            let color = categoryTransSign.get(category).get(type) > 0 ? "green" : "red"
            let rotation = categoryTransSign.get(category).get(type) > 0 ? 0 : 180
            datasets.push({
                label: type,
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 1,
                pointBackgroundColor: color,
                pointStyle: 'triangle',
                pointRotation: rotation,
                pointRadius: 5,
                data: trans.map((t) => ({x: t.mail_dtime, y: categories.indexOf(t.type)}))
            })
        }
        return datasets
    }
    render() {
        let scatterData = {
            datasets: this.getDatasets(this.props.transTypes, this.props.category)
        }
        return (
            <div style={this.divStyle}>
                <Scatter height={null} width={null}
                    data={scatterData}
                    options={this.plotOptions()}
                />
            </div>
        );
    }
}

export default HistoricPlot;
