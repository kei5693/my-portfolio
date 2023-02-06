import React from "react";

export default function CareerDesc(props){
  let careerContent = [];
  
  Array.from(props.careerDesc.slice().reverse()).forEach(el => {
    careerContent.push(
      <li key={el.id}>
        <div className='title'>
          <div>
            <strong>{el.name}</strong>
            <p>{el.department} / {el.position}</p>
          </div>
          <p>{el.period}</p>
        </div>

        <dl className='content'>
          <dt>{el.work}</dt>
          <dd>{el.client}</dd>
          <dd>{el.skill}</dd>
        </dl>
      </li>
    );
  });

  return (
    <div className='careerDesc'>
      <h2>[경력기술서]</h2>
      <ul>{careerContent}</ul>
    </div>
  )
}