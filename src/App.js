import './assets/css/app.css';
//import {useState} from 'react'

function Header(props){
  return <header>
    <h1>Header</h1>
  </header>
}

function Container(props){
  let lina = [];
  let linaContent = [];
  let kyobo = [];
  let kyoboContent = [];
  let shinhan = [];
  let shinhanContent = [];

  Array.from(props.vueProject).forEach(el => {
    let target = el.project;

    if(el.client === '노브랜드 버거'){
      Array.from(target).forEach(client => {
        lina.push(
          <li
            key={client.id}
            className={client.imgType === 'horizontal' ? "horizontal" : ""}
          >
            <div className='visual'>
              <img src={`${process.env.PUBLIC_URL + client.img}`} alt="" />
            </div>
            <div className='text'>
              <h4>{client.title}</h4>
              <ul>
                <li className="comment">{client.comment}</li>
                <li className="period">{client.period}</li>
                <li className="skill">{client.skill}</li>
              </ul>
              <div className="linkArea">
                <a href={client.github} target="_blank" rel="noreferrer">GIT</a>
                <a href={client.dist} target="_blank" rel="noreferrer">DIST</a>
              </div>
            </div>
          </li>
        )
      });
      linaContent = <div>
        <h3>{el.client}</h3>
        <ul>{lina}</ul>
      </div>;

    } else if(el.client === '버거킹'){
      Array.from(target).forEach(client => {
        kyobo.push(
          <li
            key={client.id}
            className={client.imgType === 'horizontal' ? "horizontal" : ""}
          >
            <div className='visual'>
              <img src={`${process.env.PUBLIC_URL + client.img}`} alt="" />
            </div>
            <div className='text'>
              <h4>{client.title}</h4>
              <ul>
                <li className="comment">{client.comment}</li>
                <li className="period">{client.period}</li>
                <li className="skill">{client.skill}</li>
              </ul>
              <div className="linkArea">
                <a href={client.github} target="_blank" rel="noreferrer">Github</a>
                <a href={client.dist} target="_blank" rel="noreferrer">Dist</a>
              </div>
            </div> 
          </li>
        )
      });
      kyoboContent = <div>
        <h3>{el.client}</h3>
        <ul>{kyobo}</ul>
      </div>;

    } else {
      Array.from(target).forEach(client => {
        shinhan.push(
          <li
            key={client.id}
            className={client.imgType === 'horizontal' ? "horizontal" : ""}
          >
            <div className='visual'>
              <img src={`${process.env.PUBLIC_URL + client.img}`} alt="" />
            </div>
            <div className='text'>
              <h4>{client.title}</h4>
              <ul>
                <li className="comment">{client.comment}</li>
                <li className="period">{client.period}</li>
                <li className="skill">{client.skill}</li>
              </ul>
              <div className="linkArea">
                <a href={client.github} target="_blank" rel="noreferrer">Github</a>
                <a href={client.dist} target="_blank" rel="noreferrer">Dist</a>
              </div>
            </div>
          </li>
        )
      });
      shinhanContent = <div>
        <h3>{el.client}</h3>
        <ul>{shinhan}</ul>
      </div>;
    }
  });
  return <section id="container">
    <h2>수행 프로젝트</h2>
    <div className="projectList">
      {linaContent}
      {kyoboContent}
      {shinhanContent}
    </div>
  </section>
}

function Footer(props){
  return <footer>
    <h5>Footer</h5>
  </footer>
}

function App() {
  const vueProject = [
    {
      client: '노브랜드 버거',
      project: [
        {
          id: 1,
          title: '미트 마니아2',
          git: 'https://www.naver.com/',
          dist: 'https://www.naver.com/',
          img: '/image/img_02.png',
          imgType: 'horizontal',
          period : '2021.01.01 ~ 2021.02.01',
          comment: '점심엔 햄버거 3개 기본',
          skill: 'Javascript, HTML5, CSS, Vue'
        },
        {
          id: 2,
          title: '메가바이트',
          git: 'https://www.naver.com/',
          dist: 'https://www.naver.com/',
          img: '/image/img_01.png',
          imgType: 'vertical',
          period : '2021.01.01 ~ 2021.02.01',
          comment: '점심엔 햄버거 3개 기본',
          skill: 'Javascript, HTML5, CSS, Vue'
        },
        {
          id: 3,
          title: '더블치즈 베이컨 시그니처',
          git: 'https://www.naver.com/',
          dist: 'https://www.naver.com/',
          img: '/image/img_01.png',
          imgType: 'vertical',
          period : '2021.01.01 ~ 2021.02.01',
          comment: '점심엔 햄버거 3개 기본',
          skill: 'Javascript, HTML5, CSS, Vue'
        }
      ]
    },
    {
      client: '버거킹',
      project: [
        {
          id: 4,
          title: '미트 마니아',
          git: 'https://www.naver.com/',
          dist: 'https://www.naver.com/',
          img: '/image/img_02.png',
          imgType: 'horizontal',
          period : '2021.01.01 ~ 2021.02.01',
          comment: '점심엔 햄버거 3개 기본',
          skill: 'Javascript, HTML5, CSS, Vue'
        },
        {
          id: 5,
          title: '메가바이트',
          git: 'https://www.naver.com/',
          dist: 'https://www.naver.com/',
          img: '/image/img_01.png',
          imgType: 'vertical',
          period : '2021.01.01 ~ 2021.02.01',
          comment: '점심엔 햄버거 3개 기본',
          skill: 'Javascript, HTML5, CSS, Vue'
        },
        {
          id: 6,
          title: '더블치즈 베이컨 시그니처',
          git: 'https://www.naver.com/',
          dist: 'https://www.naver.com/',
          img: '/image/img_01.png',
          imgType: 'vertical',
          period : '2021.01.01 ~ 2021.02.01',
          comment: '점심엔 햄버거 3개 기본',
          skill: 'Javascript, HTML5, CSS, Vue'
        }
      ]
    },
    {
      client: 'KFC',
      project: [
        {
          id: 7,
          title: '미트 마니아',
          git: 'https://www.naver.com/',
          dist: 'https://www.naver.com/',
          img: '/image/img_02.png',
          imgType: 'horizontal',
          period : '2021.01.01 ~ 2021.02.01',
          comment: '점심엔 햄버거 3개 기본',
          skill: 'Javascript, HTML5, CSS, Vue'
        },
        {
          id: 8,
          title: '메가바이트',
          git: 'https://www.naver.com/',
          dist: 'https://www.naver.com/',
          img: '/image/img_01.png',
          imgType: 'vertical',
          period : '2021.01.01 ~ 2021.02.01',
          comment: '점심엔 햄버거 3개 기본',
          skill: 'Javascript, HTML5, CSS, Vue'
        }
      ]
    }
    
  ];
  return (
    <div id="wrapper">
      <Header />
      <Container vueProject={vueProject} />
      <Footer />
    </div>
  );
}

export default App;
