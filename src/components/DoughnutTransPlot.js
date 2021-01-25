import React from "react";
import { Doughnut } from "react-chartjs-2";


class DoughnutTransPlot extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        let pieData = {
            datasets: [{
                backgroundColor: ['Red', 'Yellow', 'Blue'],
                data: [10, 20, 30]
            }],
            labels: ['Red', 'Yellow', 'Blue']
        }
        return (
            <div>
                <Doughnut data={pieData}/>
            </div>
        )
    }

}

export default DoughnutTransPlot;