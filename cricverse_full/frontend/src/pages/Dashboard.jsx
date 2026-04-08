
import WagonWheel from "../components/WagonWheel";
import PitchMap from "../components/PitchMap";

export default function Dashboard(){
  const shots=[{x:30,y:80},{x:-40,y:60}];
  const balls=[{x:2,y:5},{x:-1,y:7}];

  return (
    <div style={{background:"#0b1220",color:"white",minHeight:"100vh",padding:20}}>
      <h1>🏏 CricVerse</h1>
      <WagonWheel data={shots}/>
      <PitchMap balls={balls}/>
    </div>
  );
}
