import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend, Tooltip);


const ChartJs = ({ dataNum, duration }) => {

    const data = {

        datasets: [{
            data: [dataNum[0], dataNum[1]],
            backgroundColor: ['#ffc107', '#191923'],
            borderColor: ['#ffc107', '#191923'],

        }]
    }

    const options = {
        cutoutPercentage: 70,
        cutout: 70,
        animation: {
            duration,
            easing: 'linear',
        },
    }

    return (
        <div style={{ width: '60px' }}>
            <Doughnut data={data} options={options} width={"100%"} />
        </div>
    )
}



export default ChartJs
