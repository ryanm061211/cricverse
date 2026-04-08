
import { ScatterChart, Scatter, XAxis, YAxis } from "recharts";
export default function WagonWheel({data}){
  return (
    <ScatterChart width={300} height={300}>
      <XAxis dataKey="x" hide />
      <YAxis dataKey="y" hide />
      <Scatter data={data}/>
    </ScatterChart>
  );
}
