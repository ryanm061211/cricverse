
import { ScatterChart, Scatter } from "recharts";
export default function PitchMap({balls}){
  return (
    <ScatterChart width={300} height={300}>
      <Scatter data={balls}/>
    </ScatterChart>
  );
}
