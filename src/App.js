import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal'
import Calculator from './components/calculator';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import logo from './Horemow.png'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  // State variables for sharing data between components
  const [selectOption, setSelectOption] = useState('');
  const [offering, setOffering] = useState('');
  const [tithe, setTithe] = useState("");
  const [expenditures, setExpenditures] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);
  const [unitExpen, setUnitExpen] = useState(0);
  const [headquarters, setHeadquarters] = useState(0);
  const [state, setState] = useState(0)
  const [zone, setZone] = useState(0);
  const [chapter, setChapter] = useState(0);
  const [unit, setUnit] = useState(0);
  const [zonePercentage, setZonePercentage] = useState(0);

  // Function to calculate the financial data
  const handleCalculate = () => {
    const offeringValue = parseFloat(offering);
    const titheValue = parseFloat(tithe);
    const expendituresValue = parseFloat(expenditures);

    if (!isNaN(offeringValue) && !isNaN(titheValue)) {
      const total = offeringValue + titheValue;
      setTotalIncome(total);

      let unitIncome = 0;
      if (selectOption === 'Unit') {
        unitIncome = total * 0.2;
        setZonePercentage('20% Zone');
        setHeadquarters(total * 0.5);
        setZone(total * 0.2);
        setChapter(total * 0.1);
        setUnit(total * 0.2);
        console.log('Unit State has been selected')
        toast.success('Unit has been selected')
      } else if (selectOption === 'State') {
        unitIncome = total * 0.1;
        setState('40% State');
        setHeadquarters(total * 0.3);
        setZone(total * 0.4);
        setChapter(total * 0.2);
        setUnit(total * 0.1);
        console.log('There is no remittal settings for State')
        // toast.success('State has been selected!')
        toast.info('State Calculation has not been set correctly.')
      }else if (selectOption === "Chapter"){
          console.log('Chapter has been selected')
          toast.error('There is no remital setting for Chapter')
      }else if (selectOption === 'Zone'){
        toast.error('There is no Remittal setting for Zone')
        console.log('Zone has been selected')
      }

      setUnitExpen(total - expenditures);
    } else {
      console.log('Invalid input');
    }
  };
   useEffect(()=>{
    if(offering > 0 && tithe > 0){
      handleCalculate()
    }
   },
   [offering, tithe, selectOption,expenditures]
  )
 
  // State for controlling MODAl
  const [showModal, setShowModal] = useState(false)
  const handleShowModal =()=>{
    setShowModal(true)
  }

  const handleCloseModal = () =>{
    setShowModal(false)
  }
  return (
    <div>
      <ToastContainer />
      <Header 
      image={logo}
      selectOption={selectOption}
      setSelectOption={setSelectOption}
      />
      <Main
        offering={offering}
        setOffering={setOffering}
        tithe={tithe}
        setTithe={setTithe}
        expenditures={expenditures}
        setExpenditures={setExpenditures}
        handleCalculate={handleCalculate}
        totalIncome={totalIncome}
        headquarters={headquarters}
        state={state}
        zone={zone}
        chapter={chapter}
        unit={unit}
        headquartersPercentage= {headquarters}
        zonePercentage={zonePercentage}
        unitExpen={unitExpen}
        show = {handleShowModal}
      />
      <Calculator/>
      

      {showModal && (
        <Modal
         onClose = {handleCloseModal}
         data ={{
          offering,
          tithe,
          totalIncome,
          unitExpen,
          headquarters,
          zone,
          chapter,
          expenditures,
          unit,
          selectOption
         }}
        />
      )}
    </div>
  );
}

export default App;
