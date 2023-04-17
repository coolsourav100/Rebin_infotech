import React, { useState } from 'react'
import Modal from 'react-modal';

const PopUp = (props) => {
  console.log(props, 'props')
  let subtitle
  const [name,setName] =useState('')
  const [username,setUsername] =useState('')
  const [modalIsOpen, setIsOpen] = React.useState(props.modalprops);
console.log(modalIsOpen)
  function openModal() {
    // setIsOpen(props.modalprops);
      
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    props.toggle(false)
  }

  const handleSubmit=(e)=>{
    localStorage.removeItem(props.id)
    e.preventDefault()
    let data={
      name:name,
      username:username
    }
    localStorage.setItem(data.username,JSON.stringify(data))
    props.toggle(false)
  }
  let userData
  if(props.id){
    let uData = localStorage.getItem(props.id)
     userData = JSON.parse(uData)
    //  setName(userData.name)
    //  setUsername(userData.username)
  }
  // console.log(userData)
  return (
    <div className='container w-50 p-50'>
      
      <Modal
        isOpen={props.modalprops}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello Users</h2>
        <button onClick={closeModal}>close</button>
        
        <div className="card">
  <div Name="card-body">
    
    <h6 Name="card-subtitle mb-2 text-muted">Enter User Details</h6>
   <form className='form-control d-flex'>
    <label className='form-label'/>Name
    <input type='text' className='form-control' defaultValue={userData ? userData.name : name} onChange={(e)=>setName(e.target.value)}/>
    <label className='form-label'/>Username
    <input type='text' className='form-control' defaultValue={userData ? userData.username : username} onChange={(e)=>setUsername(e.target.value)}/>
    <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
    </form>
  </div>
</div>
      </Modal>
    </div>
  );
}

export default PopUp