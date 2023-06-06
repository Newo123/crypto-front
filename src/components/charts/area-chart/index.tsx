import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	ScriptableContext,
	Title,
	Tooltip,
} from 'chart.js';
import moment from 'moment';
import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { IAreaChartProps } from '../../../common/types/assets';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
);

const AreaChart: FC<IAreaChartProps> = ({
	data,
}: IAreaChartProps): JSX.Element => {
	const options = {
		responsive: true,
		scales: {
			x: {
				display: false,
				grid: {
					display: false,
				},
			},
			y: {
				display: false,
				grid: {
					display: false,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	const values = {
		labels: data.map((element: number[]): string =>
			moment(element[0]).format('DD.MM.YY'),
		),
		datasets: [
			{
				label: 'Цена',
				data: data.map((element: number[]): number => {
					return element[1] as number;
				}),
				fill: 'start',
				backgroundColor: (context: ScriptableContext<'line'>) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(0, 0, 0, 180);
					gradient.addColorStop(0, '#C1EF00');
					gradient.addColorStop(1, '#232323');
					return gradient;
				},
			},
		],
	};
	return <Line options={options} data={values} width={300} height={100} />;
};

export default AreaChart;
