import './Chart.scss';
import ChartBar from './ChartBar';

export interface DataPoint {
  label: string;
  value: number;
}

export interface ChartPropsModel {
  dataPoints: DataPoint[];
}

export default function Chart(props: ChartPropsModel) {
  const dataPointValues: number[] = props.dataPoints.map(item => item.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map(item => (
        <ChartBar key={item.label} value={item.value} label={item.label} maxValue={totalMaximum}/>
      ))}
    </div>
  )
}
