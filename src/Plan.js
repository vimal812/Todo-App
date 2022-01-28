import React from 'react'
function Plan(props) {
 const arr = props.p
 const date = new Date()
 return <>
  <li className="shadow p-2 my-2 col-sm-9" style={{color:"black"}}>{props.value}</li>
  <h5 style={{color:"black"}}>{`${date.getDate()} / ${date.getMonth()+'1'}/ ${date.getUTCFullYear()} `}</h5>
  <div className="btn">
  <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={() => { props.sendData(props.id) }}>Delete</button>
  <button className="btn btn-success my-2 col-sm-2 offset-1">Edit</button>
  </div>

 </>
}

export default Plan;