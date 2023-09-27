import Diena from "./Diena";



function App() {
  const TresdienasStundas = [
    "Datortikli",
    "Datortikli",
    " sistemu progrmesana",
    " sistemu progrmesana"
];

const CeturdienasStundas = [
    "Socialas",
    "Dabaz zin",
    " matematika",
    " sports"
];
  return (

  
  <>
    <h1>Hi mom</h1>
   
    <Diena nosaukums = "Tresdiena" stundas={TresdienasStundas} />

    <Diena nosaukums = "Ceturdiena" stundas={CeturdienasStundas}/>
    
    


    </>
)
}
export default App;

