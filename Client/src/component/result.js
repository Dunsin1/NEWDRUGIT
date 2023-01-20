import React from 'react'

function Result(props) {
    const drugData = props.DrugResult;
    console.log(drugData);
  

  return (
    <div>
      {drugData ? drugData.map((drug,index) => {
        return (
          <div className="container resultdiv"  key={index}>
            <h3>Action :{drug.interaction3[0].action}</h3>
            <h3>Severity:{drug.interaction3[0].severity}</h3>
          </div>
        )
      }) : null}
    </div>
  )
}

export default Result