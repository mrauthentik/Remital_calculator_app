import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import logo from "./Horemow.png";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  // State variables for sharing data between components
  const [selectOption, setSelectOption] = useState(() => {
    return "";
  });
  const [offering, setOffering] = useState("");
  const [tithe, setTithe] = useState(() => {
    return "";
  });
  const [expenditures, setExpenditures] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);
  const [unitExpen, setUnitExpen] = useState(0);
  const [headquarters, setHeadquarters] = useState(0);
  const [state, setState] = useState(() => {
    console.log("function has been called once");
    return 0;
  });
  const [zone, setZone] = useState(0);
  const [chapter, setChapter] = useState(0);
  const [unit, setUnit] = useState(() => {
    return 0;
  });
  const [zonePercentage, setZonePercentage] = useState(0);
  const [regionPercentage, setRegionPercentage] = useState(0);
  const [title, setTitle] = useState("");
  const [toastDisplayed, setToastDisplayed] = useState(false);

  // Function to calculate the financial data
  const handleCalculate = () => {
    const offeringValue = parseFloat(offering);
    const titheValue = parseFloat(tithe);
    const expendituresValue = parseFloat(expenditures);

    if (!isNaN(offeringValue) && !isNaN(titheValue)) {
      const total = offeringValue + titheValue;
      setTotalIncome(total);

      let unitIncome = 0;
      if (selectOption === "Unit" && !toastDisplayed) {
        unitIncome = total * 0.2;
        setZonePercentage("20% Zone");
        setHeadquarters(total * 0.5);
        setZone(total * 0.2);
        setChapter(total * 0.1);
        setUnit(total * 0.2);
        console.log("Unit State has been selected");
        toast.success("Unit has been selected");
      } else if (selectOption === "State" && !toastDisplayed) {
        unitIncome = total * 0.1;
        setState(total * 0.5);
        setHeadquarters(total * 0.5 * 0.3);
        setZone(total * 0.5);
        setRegionPercentage(total * 0.1);
        setChapter(total * 0.1);
        setUnit(total * 0.2);
        console.log("There is no remittal settings for State");
        toast.info("State Calculation has not been set correctly.");
      } else if (selectOption === "Chapter") {
        console.log("Chapter has been selected");
        toast.error("There is no remital setting for Chapter");
      } else if (selectOption === "Zone") {
        toast.error("There is no Remittal setting for Zone");
        console.log("Zone has been selected");
      }

      setUnitExpen(total - expenditures);
    } else {
      console.log("Invalid input");
    }
  };

  useEffect(() => {
    if (offering > 0 && tithe > 0) {
      handleCalculate();
    }
  }, [offering, tithe, selectOption, expenditures]);

  // State for controlling MODAl
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const resetToast = () => {
    setToastDisplayed(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <ToastContainer />
      <Header
        image={logo}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
        resetToast={resetToast}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          headquartersPercentage={headquarters}
          zonePercentage={zonePercentage}
          unitExpen={unitExpen}
          show={handleShowModal}
          selectOption={selectOption}
          title={title}
          setTitle={setTitle}
          resetToast={resetToast}
        />
      </div>

      {showModal && (
        <Modal
          onClose={handleCloseModal}
          data={{
            offering,
            tithe,
            totalIncome,
            unitExpen,
            headquarters,
            zone,
            chapter,
            expenditures,
            unit,
            selectOption,
            title,
            state,
          }}
        />
      )}
    </div>
  );
}

export default Home;