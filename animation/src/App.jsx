import './Components/style.css'
import SectionOne from "./Components/SectionOne.jsx";
import SectionTwo from "./Components/SectionTwo.jsx";
import SectionThree from "./Components/SectionThree.jsx";
import SectionFour from "./Components/SectionFour.jsx";

function App() {
  return (
    <div className="parent">
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
    </div>
  )
}

export default App
