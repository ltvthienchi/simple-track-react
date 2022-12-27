import './ChartBar.scss';

export interface ChartBarPropsModel {
  label: string;
  value: number;
  maxValue: number;
}

export default function ChartBar(props: ChartBarPropsModel) {
  let barFillHeight = '0%';
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  )
}
