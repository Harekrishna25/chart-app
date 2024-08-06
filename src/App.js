
import { useState } from 'react';
import './App.css';
import Details from './Details';

function App() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseHover = () =>{
    setIsHovering(true);
  }
  const handleMouseOut = () =>{
    setIsHovering(false);
  }
    return (
    <div className="container">
      <div className="leftContainer">
        <li>1.0575</li>
        <li>1.0570</li>
        <li>1.0565</li>
        <li>1.0560</li>
        <li>1.0550</li>
        <li>1.0500</li>
      </div>
      <div className="rightContainer">
        <div className="chart" onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
          <div className="chart_1">
            
          </div>
          <div className="chart_2">
              <hr />
          </div>
          <div className="chart_3">

          </div>
          <div className="chart_4">

          </div>
          
          <div className="chart_5">
            <hr />
          </div>
        </div>
      </div>
      {isHovering &&
        <Details /> 
      }
     
    </div>
  );
}

export default App;
