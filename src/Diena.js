import Stunda from "./Stunda";

function Diena (props) {
    
    return ( 
<>
<p>Sodien ir {props.nosaukums} </p>
<ol> 
<Stunda nosaukums ={props.stundas[0]}/>
<Stunda nosaukums ={props.stundas[1]}/>
<Stunda nosaukums ={props.stundas[2]}/>
<Stunda nosaukums ={props.stundas[3]}/>
</ol>




</>
    )
}


export default Diena;
