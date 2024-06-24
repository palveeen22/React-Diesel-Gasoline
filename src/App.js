import React, { useEffect, useState } from 'react';
import './App.css'
import Chart from './LineChart'

const App = (props) => {
  return <div className='fill'>
    <Chart id='chart'/>
  </div>
}

export default App