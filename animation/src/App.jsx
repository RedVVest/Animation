import './Components/style.css'
import SectionOne from "./Components/SectionOne.jsx";
import SectionTwo from "./Components/SectionTwo.jsx";
import SectionThree from "./Components/SectionThree.jsx";
import SectionFour from "./Components/SectionFour.jsx";
import SectionFive from './Components/SectionFive';


function App() {
  return (
    <div className="parent">
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
    </div>
  )
}

export default App
