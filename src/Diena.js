import Stunda from "./Stunda.js";
import style from "./Janis.module.css";

function Diena(props){
    const stundasJSX = props.stundas.map((stunda, indekss) => {
        return <Stunda key={indekss} nosaukums={stunda} />
     // const stundasJSX = props.stundas.map((x, index) => {}
    
    });    

  return(
    <>
    <h2 className={style.jol}>{props.diena}</h2>
    
    <ol>
        {stundasJSX}
    </ol>
    </>
  );
}
export default Diena;