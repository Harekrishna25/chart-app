import React from 'react'
import './Details.css';
const Details = () => {
    return (
    <div>
        <div className="detailes">
            <li><span id='col-1'></span>Updraw <span>X</span></li>
            <li><span id='col-2'><hr /></span>In. Take Profit <span>X</span></li>
            <li><span id='col-3'></span>Entry Close<span>1.0567</span></li>
            <li><span id='col-4'></span>Partial 2 <span>1.0567</span></li>
            <li><span id='col-5'></span>Partial 1 <span>X</span></li>
            <li><span id='col-6'></span>Drawdown <span>X</span></li>
            <li><span id='col-7'><hr /></span>In Stop Loss <span>X</span></li>
            <hr />
            <p>Entry and exit</p>
            <li><span className='col-8'></span>In. Entry Price<span>1.0560</span></li>
            <li><span className='col-8'></span>Entry Price<span>1.0562</span></li>
            <li><span className='col-8'></span>In. Exit Price<span>1.0570</span></li>
            <li><span className='col-8'></span>Exit Price<span>1.0572</span></li>
        </div>

    </div>
  )
}

export default Details;
