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
  let tubaani = [];
  let tubaaniContent = [];

  Array.from(props.vueProject).forEach(el => {
    let target = el.project;

    if(el.client === '라이나생명'){
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
                <a href={client.git} target="_blank" rel="noreferrer">GIT</a>
                <a href={client.dist} target="_blank" rel="noreferrer">DIST</a>
              </div>
            </div>
          </li>
        )
      });
      linaContent = <div className='lina'>
        <h3>{el.client}</h3>
        <ul>{lina}</ul>
      </div>;

    } else if(el.client === '교보생명'){
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
                <a href={client.git} target="_blank" rel="noreferrer">GIT</a>
                <a href={client.dist} target="_blank" rel="noreferrer">DIST</a>
              </div>
            </div> 
          </li>
        )
      });
      kyoboContent = <div className='kyobo'>
        <h3>{el.client}</h3>
        <ul>{kyobo}</ul>
      </div>;

    } else if(el.client === '신한라이프'){
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
                <a href={client.git} target="_blank" rel="noreferrer">GIT</a>
                <a href={client.dist} target="_blank" rel="noreferrer">DIST</a>
              </div>
            </div>
          </li>
        )
      });
      shinhanContent = <div className='shinhan'>
        <h3>{el.client}</h3>
        <ul>{shinhan}</ul>
      </div>;
    } else {
      Array.from(target).forEach(client => {
        tubaani.push(
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
                <a href={client.git} target="_blank" rel="noreferrer">GIT</a>
                <a href={client.dist} target="_blank" rel="noreferrer">DIST</a>
              </div>
            </div>
          </li>
        )
      });
      tubaaniContent = <div className='tubaani'>
        <h3>{el.client}</h3>
        <ul>{tubaani}</ul>
      </div>;
    }
  });
  return <section id="container">
    <h2>수행 프로젝트</h2>
    <div className="projectList">
      {linaContent}
      {kyoboContent}
      {shinhanContent}
      {tubaaniContent}
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
          id:       1,
          title:    '타로카드',
          git:      'https://github.com/kei5693/portfolio-lina-tarot-simulator',
          dist:     'https://kei5693.github.io/work/portfolio/lina-tarot-simulator/#/',
          img:      '/image/lina/tarot.png',
          imgType:  'vertical',
          period:   '2021.11 ~ 2021.12',
          comment:  '랜덤으로 뿌려진 타로카드 2장을 뽑아 그에 맞는 결과를 출력하고 공유 할 수 있는 사이트',
          skill:    'Vue, Javascript, HTML5, SCSS'
        },
        {
          id:       2,
          title:    '고연령 건강빙고',
          git:      'https://github.com/kei5693/portfolio-lina-bingo-simulator',
          dist:     'https://kei5693.github.io/work/portfolio/lina-bingo-simulator/#/',
          img:      '/image/lina/bingo.png',
          imgType:  'vertical',
          period:   '2021.10 ~ 2021.12',
          comment:  '빙고 게임을 통해 보험 상품을 소개 받고 공유 할 수 있는 사이트',
          skill:    'Vue, Javascript, HTML5, SCSS'
        },
        {
          id:       3,
          title:    '저연령 건강OX',
          git:      'https://github.com/kei5693/portfolio-lina-health-simulator',
          dist:     'https://kei5693.github.io/work/portfolio/lina-health-simulator/#/',
          img:      '/image/lina/health.png',
          imgType:  'vertical',
          period:   '2021.10 ~ 2021.12',
          comment:  'O,X로 구성된 질문의 답변을 통해 건강 상태와 보험 상품을 소개하고 공유하는 사이트',
          skill:    'Vue, Javascript, HTML5, SCSS'
        },
        {
          id:       4,
          title:    '치매진단 모바일 시뮬레이터',
          git:      'https://github.com/kei5693/portfolio-lina-alzheimer',
          dist:     'https://kei5693.github.io/portfolio-lina-alzheimer/index.html',
          img:      '/image/lina/alzheimer.png',
          imgType:  'vertical',
          period:   '2021.09 ~ 2021.09',
          comment:  '질문을 통해 인지 능력 감퇴 정도를 결과로 보여줄 수 있는 사이트',
          skill:    'Vue, Javascript, HTML5, SCSS'
        }
      ]
    },
    {
      client: '교보생명',
      project: [
        {
          id:       1,
          title:    '드림ON 매뉴얼',
          git:      'https://github.com/kei5693/portfolio-kyobo-dream-on-manual',
          dist:     'https://kei5693.github.io/work/portfolio/kyobo-dream-on-manual/#/',
          img:      '/image/kyobo/manual.png',
          imgType:  'horizontal',
          period:   '2021.12 ~ 2021.12',
          comment:  '자사 앱에서 사용하는 직원 교육용 매뉴얼',
          skill:    'Vue, Javascript, HTML5, SCSS'
        },
        {
          id:       2,
          title:    '간편가입보험 시뮬레이터',
          git:      'https://github.com/kei5693/portfolio-kyobo-dreamplaner-survey',
          dist:     'https://kei5693.github.io/work/portfolio/kyobo-dreamplaner-survey/#/',
          img:      '/image/kyobo/survey.png',
          imgType:  'horizontal',
          period:   '2021.03 ~ 2021.04',
          comment:  '질문에 따라 다른 보험 가입 상품을 안내하는 사이트',
          skill:    'Vue, Javascript, HTML5, SCSS'
        },
        {
          id:       3,
          title:    '보장분석 시스템 활용 매뉴얼',
          git:      'https://github.com/kei5693/portfolio-kyobo-digital-manual',
          dist:     'https://kei5693.github.io/work/portfolio/kyobo-digital-manual/#/',
          img:      '/image/kyobo/digital-manual.png',
          imgType:  'horizontal',
          period:   '2021.11 ~ 2021.12',
          comment:  '고객에게 보험 상품을 안내하기 위한 직원 교육용 매뉴얼',
          skill:    'Vue, Javascript, HTML5, SCSS'
        },
        {
          id:       4,
          title:    '보험상품 시뮬레이터',
          git:      'https://github.com/kei5693/portfolio-kyobo-diy-insurance',
          dist:     'https://kei5693.github.io/work/portfolio/kyobo-diy-insurance/#/',
          img:      '/image/kyobo/insurance.png',
          imgType:  'vertical',
          period:   '2021.10 ~ 2021.11',
          comment:  '설문조사 답변에 따른 건강 점수를 그래프로 보여주는 사이트',
          skill:    'Vue, Javascript, HTML5, SCSS'
        },
        {
          id:       5,
          title:    '치매진단 시뮬레이터',
          git:      'https://github.com/kei5693/portfolio-kyobo-alzheimer',
          dist:     'https://kei5693.github.io/portfolio-kyobo-alzheimer/',
          img:      '/image/kyobo/alzheimer.png',
          imgType:  'vertical',
          period:   '2021.04 ~ 2021.05',
          comment:  '질문에 따라 인지 능력 감퇴 점수와 치매에 관한 정보를 안내하는 사이트 ',
          skill:    'Vue, Javascript, HTML5, SCSS'
        }
      ]
    },
    {
      client: '신한라이프',
      project: [
        {
          id:       1,
          title:    '생활습관으로 보는 건강빙고',
          git:      'https://github.com/kei5693/portfolio-orangelife-upselling-bingo',
          dist:     'https://kei5693.github.io/work/portfolio/orangelife-upselling-bingo/#/',
          img:      '/image/shinhan/bingo.png',
          imgType:  'horizontal',
          period:   '2021.08 ~ 2021.08',
          comment:  '빙고 게임을 통해 보험 상품을 소개하는 사이트',
          skill:    'Vue, Javascript, HTML5, SCSS'
        },
        {
          id:       2,
          title:    '헬스톡',
          git:      'https://github.com/kei5693/portfolio-shinhan-health-talk',
          dist:     'http://healthtalk2.co.kr/',
          img:      '/image/shinhan/healthtalk.png',
          imgType:  'vertical',
          period:   '2021.02 ~ 2021.03',
          comment:  '건강을 테마로 한 마이크로 사이트 ',
          skill:    'Vue, Javascript, HTML5, SCSS'
        },
        {
          id:       3,
          title:    '세일즈톡',
          git:      'https://github.com/kei5693/portfolio-shinhan-sales-talk',
          dist:     'https://kei5693.github.io/work/portfolio/shinhan-sales-talk/#/',
          img:      '/image/shinhan/salestalk.png',
          imgType:  'vertical',
          period:   '2021.03 ~ 2021.04',
          comment:  '검색어를 통해 보험 상품을 소개 받는 챗봇 스타일의 사이트',
          skill:    'Vue, Javascript, HTML5, SCSS'
        }
      ]
    },
    {
      client: '투바앤',
      project: [
        {
          id:       1,
          title:    '놀라바',
          git:      'https://github.com/kei5693/portfolio-nollarva-master',
          dist:     'http://www.nollarva.com/#/',
          img:      '/image/nollarva.png',
          imgType:  'vertical',
          period:   '2021.08 ~ 2021.10',
          comment:  '라바 캐릭터를 테마로 한 무인 편의점 가맹점주 모집 홍보 사이트',
          skill:    'Vue, Javascript, HTML5, SCSS'
        },
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
