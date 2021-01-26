import React from "react";
import { Doughnut } from "react-chartjs-2";
import * as consts from "../consts";


class DoughnutTransPlot extends React.Component {
    categoryTypes(category) {
        if (category === "check")
            return Array.from(consts.CHECK_CATEGORIES)
        if (category === "natCred")
            return Array.from(consts.NAT_CRED_CATEGORIES)
        return Array.from(consts.INT_CRED_CATEGORIES)
    }
    render() {
        let pieData = {
            datasets: [{
                backgroundColor: consts.colorArray,
                data: Array.from(this.props.totals.values())
            }],
            labels: Array.from(this.props.totals.keys())
        }
        return (
            <div>
                <Doughnut height={50} data={pieData}/>
            </div>
        )
    }

}

export default DoughnutTransPlot;