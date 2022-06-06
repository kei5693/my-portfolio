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

    if(el.client === '라이나생명'){
      Array.from(target).forEach(client => {
        lina.push(
          <li key={client.id}>
            <a href={client.href} target="_blank" rel="noreferrer">{client.title}</a>
          </li>
        )
      });
      linaContent = <>
        <h3>{el.client}</h3>
        <ul>{lina}</ul>
      </>;

    } else if(el.client === '교보생명'){
      Array.from(target).forEach(client => {
        kyobo.push(
          <li key={client.id}>
            <a href={client.href} target="_blank" rel="noreferrer">{client.title}</a>
          </li>
        )
      });
      kyoboContent = <>
        <h3>{el.client}</h3>
        <ul>{kyobo}</ul>
      </>;

    } else {
      Array.from(target).forEach(client => {
        shinhan.push(
          <li key={client.id}>
            <a href={client.href} target="_blank" rel="noreferrer">{client.title}</a>
          </li>
        )
      });
      shinhanContent = <>
        <h3>{el.client}</h3>
        <ul>{shinhan}</ul>
      </>;
    }
  });
  return <section id="container">
    <h2>Vue 프로젝트</h2>
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
      client: '라이나생명',
      project: [
        {
          id: 1,
          title: '타로카드',
          href: 'https://github.com/kei5693/portfolio-lina-tarot-simulator'
        },
        {
          id: 2,
          title: '고연령 건강빙고',
          href: 'https://github.com/kei5693/portfolio-lina-bingo-simulator'
        },
        {
          id: 3,
          title: '저연령 건강OX',
          href: 'https://github.com/kei5693/portfolio-lina-health-simulator'
        }
      ]
    },
    {
      client: '교보생명',
      project: [
        {
          id: 4,
          title: '보험상품 시뮬레이터',
          href: 'https://github.com/kei5693/portfolio-kyobo-diy-insurance'
        },
        {
          id: 5,
          title: '드림ON 매뉴얼',
          href: 'https://github.com/kei5693/portfolio-kyobo-dream-on-manual'
        },
        {
          id: 6,
          title: '간편가입보험 시뮬레이터',
          href: 'https://github.com/kei5693/portfolio-kyobo-dreamplaner-survey'
        },
      ]
    },
    {
      client: '신한라이프',
      project: [
        {
          id: 7,
          title: '세일즈톡',
          href: 'https://github.com/kei5693/portfolio-shinhan-health-talk'
        },
        {
          id: 8,
          title: '헬스톡',
          href: 'https://github.com/kei5693/portfolio-shinhan-sales-talk'
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
