import React from "react";

export default function ProjectDesc(props){
  let company = [];

  Array.from(props.projectData).forEach((el, index) => {
    company.push(
      <div 
        key={index}
        className={el.className}
      >
        <h3>{el.client}</h3>
        <ul>
          {el.project.map((item) => {
            return (
              <li
                key={item.id}
                className={item.imgType === 'horizontal' ? "horizontal" : ""}
              >
                <h4>{item.title}</h4>
                <div className='inner'>
                  <div className='visual'>
                    <img src={`${process.env.PUBLIC_URL + item.img}`} alt="" />
                  </div>
                  <div className='text'>
                    <h4>{item.title}</h4>
                    <ul>
                      <li className="comment">{
                        item.comment.split('\n').map((line, index) => <span key={index}>{line}<br/></span>)
                      }
                      </li>
                      <li className="period">{item.period}</li>
                      <li className="skill">{item.skill}</li>
                    </ul>
                    <div className={item.git === '' ? "linkArea hidden" : "linkArea"}
                    >
                      <a href={item.git} target="_blank" rel="noreferrer">GIT</a>
                      <a href={item.dist} target="_blank" rel="noreferrer">DIST</a>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  });

  return (
    <div className="projectList">
      <h2>[수행 프로젝트]</h2>
      {company}
    </div>
  )
}