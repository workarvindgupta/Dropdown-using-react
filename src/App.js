import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './App.css';


const App = () => {
  const options = [
    { label: 'React JS', value: 'ReactJs' },
    { label: 'HTML', value: 'HTML' },
    { label: 'CSS', value: 'CSS' },
    { label: 'JAVA', value: 'JAVA' },
    { label: 'NODE JS', value: 'NODE JS' },
    { label: 'Next Js', value: 'MextJs' },
    
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='container-fluid'>
     <div className="row mt-4">
      <div className="col-md-12">
      <h1 className='text-danger text-center'>React Dropdown Project</h1>
      </div>
     </div>
     <div className="row justify-content-center mt-4">
        <div className="col-md-6">
        <h2 className='fw-bold text-bg-secondary text-center p-2'>Select Your Coding Skill</h2>
        </div>
      </div>
      <Dropdown options={options} onSelect={handleOptionSelect} />
      <div className="row justify-content-center">
        <div className="col-md-6">
        {selectedOption && <h2 className='fw-bold text-primary text-center p-2'>My Skill = ( {selectedOption.label} )</h2>}
        </div>
      </div>
     
    </div>
  );
};

export default App;

