import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Component/Table';
import PopUp from './Component/PopUp';
import { useState } from 'react';


function App() {
  const [ modalData , setModalData] = useState(false)
  const [ modalId , setModalId] = useState()
  
  function modalToggle(data ,id){
    setModalData(data)
    setModalId(id)
  }
  return (
    <div>
      <Table modalprops={modalToggle}/>
      <PopUp modalprops={modalData} toggle={modalToggle} id={modalId}/>
    </div>
  );
}

export default App;
