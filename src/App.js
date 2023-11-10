import {useState, useEffect} from "react";
import Diena from './Diena';
import Styles from './Janis.module.css'

function App(props) { 

const [lessons, setLessons] = useState({});
const [loading, setLoading] = useState(true);

  const PirmdienasStundas = [
      "Sports",
      "DabasZinibas",
      "Vesture",
      "Krievu valoda"
  
  ]
    const OtrdienasStundas = [
       "Cita stunda",
       "Vel stunda",
    
    ];
    const visasStundas = [
      {diena: "Pirmdiena", 
      stundas: [ 
        "Sports",
        "DabasZinibas",
        "Vesture",
        "Krievu valoda"
      ]},
      {diena: "Otrdiena",
      stundas: [
      "Cita stunda",
       "Vel stunda",
      ]},
      {diena: "Trešdiena", 
      stundas: [ 
        "Programmēšana",
        "Programmēšana",
        "Programmēšana",
        "Programmēšana"
    ]},
      {diena: "Ceturtdiena", 
      stundas: [ 
        "VAMS",
        "VAMS",
        "VAMS",
        "VAMS"
      ]},
      {diena: "Piektdiena", 
      stundas: [ 
        "Sports",
        "Latviešu valoda",
        "Matematika",
        "Matematika"
      ]}
    ];
    useEffect(() => {
async function getData() {

const response = await fetch("https://cheese-cake.onthewifi.com/api/lessons")

const data = await response.json()

console.log(data.IPa22[4].classes)
setLessons(data)
setLoading(false)
}
getData() 
    }, [] );
  
    const dienasJSX = visasStundas.map((diena, indekss) => {
      return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />
       return(
    })

  //export default function App 
 
  
  }
  return(
    <>
    <div>
  <ol>{dienasJSX}</ol>
    </div>
    {loading ? <p>Loading...</p>: <p>iet plz</p>}
    </>
   ) ;


export default App;
