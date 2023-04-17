import React, { useState } from 'react'

const Table = (props) => {
  console.log(props)
  const [searchShow, setSearchShow] = useState(false);
  const [ modalData , setModalData] = useState(true)
  const [state, setstate] = useState({
    query: '',
    list: []
    })
  const [query, setquery] = useState('')
  const [ toogle , setToggle] = useState(false)
  const [openModal , setOpenModal] = useState(false)
  const addUserHandler=()=>{
  props.modalprops(true)
  }
let key =[]
 key = Object.keys(localStorage)
 const deleteHandler =(id)=>{
  window.alert("Are you Sure ?")
localStorage.removeItem(id)
setToggle(!toogle)
 }
 const editHandler=(id)=>{
  props.modalprops(true , id)
  // localStorage.removeItem(id)
 }
   let userData = key.map((item)=>JSON.parse(localStorage.getItem(item)))
   console.log(userData)
 const onSearch =(e)=>{
  setquery(e.target.value)
  const results = userData.filter(post => {
  if (e.target.value === "") return userData
    return post.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setstate({
    query: e.target.value,
    list: results
      })
      if(e.target.value ==''){
        setSearchShow(false)
      }else{
        setSearchShow(true)
      }

 }
 console.log(state.list,'list')
  return (
    <div className='container mt-4'>
    <div className='d-flex'>
    <button class="btn btn-secondary w-25 my-2 my-sm-0 col-4" onClick={addUserHandler}>Add User</button>
    <input class="form-control w-25 mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onSearch}/>
  </div>
    <table className="table table-bordered">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  { !searchShow && 
  key.map((item)=>{
    let resData = localStorage.getItem(item)
    let obj = JSON.parse(resData)
  return(
    <tr scope="row">
      
      <td>{obj.name}</td>
      <td>{obj.username}</td>
      <td>
      <td><button className='btn btn-secondary' onClick={()=>{editHandler(obj.username)}}>Edit</button></td>
      <td><button className='btn btn-secondary ms-4' onClick={()=>{deleteHandler(obj.username)}}>Delete</button></td>
      </td>
    </tr>
  )
  })
}
  { searchShow && 
  state.list.map((item)=>{
   
  return(
    <tr scope="row">
      
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>
      <td><button className='btn btn-secondary' onClick={()=>{editHandler(item.username)}}>Edit</button></td>
      <td><button className='btn btn-secondary ms-4' onClick={()=>{deleteHandler(item.username)}}>Delete</button></td>
      </td>
    </tr>
  )
  })
}
  
    
  </tbody>
</table>
{}
    </div>
  )
}

export default Table