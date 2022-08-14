import './assets/css/app.css';
//import {useState} from 'react'

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
            <h4>{client.title}</h4>
              <div className='inner'>
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
                <div className={client.git === '' ? "linkArea hidden" : "linkArea"}
                >
                  <a href={client.git} target="_blank" rel="noreferrer">GIT</a>
                  <a href={client.dist} target="_blank" rel="noreferrer">DIST</a>
                </div>
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
            <h4>{client.title}</h4>
            <div className='inner'>
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
            <h4>{client.title}</h4>
            <div className='inner'>
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
            <h4>{client.title}</h4>
            <div className='inner'>
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

  let careerContent = [];
  Array.from(props.careerDesc).forEach(el => {
    careerContent.push(
      <li
        key={el.id}
      >
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

  return <section id="container">
    <div className="projectList">
      <h2>[수행 프로젝트]</h2>
      {linaContent}
      {kyoboContent}
      {shinhanContent}
      {tubaaniContent}
    </div>

    <div className='careerDesc'>
      <h2>[경력기술서]</h2>
      <ul>{careerContent}</ul>
    </div>
  </section>
}

function App() {
  const vueProject = [
    {
      client: '라이나생명',
      project: [
        {
          id:       1,
          title:    '라이나생명 GA채널 통합 플랫폼',
          git:      '',
          dist:     '',
          img:      '/image/lina/ga.png',
          imgType:  'vertical',
          period:   '2022.02 ~ 2022.08',
          comment:  '법인보험대리점(GA) 소속 설계사 대상 사이트 구축 퍼블리셔 PL',
          skill:    'Jquery, Javascript, HTML5, SCSS'
        },
        {
          id:       2,
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
          id:       3,
          title:    '고연령 건강빙고',
          git:      'https://github.com/kei5693/portfolio-lina-bingo-simulator',
          dist:     'https://kei5693.github.io/work/portfolio/lina-bingo-simulator/#/',
          img:      '/image/lina/bingo.png',
          imgType:  'vertical',
          period:   '2021.10 ~ 2021.12',
          comment:  '빙고 게임을 하며 결과에 따라 보험 상품을 소개 받고 공유 할 수 있는 사이트',
          skill:    'Vue, Javascript, HTML5, SCSS'
        },
        {
          id:       4,
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
          id:       5,
          title:    '치매진단 모바일 시뮬레이터',
          git:      'https://github.com/kei5693/portfolio-lina-alzheimer',
          dist:     'https://kei5693.github.io/portfolio-lina-alzheimer/index.html',
          img:      '/image/lina/alzheimer.png',
          imgType:  'vertical',
          period:   '2021.09 ~ 2021.09',
          comment:  '다수의 질문을 통해 인지 능력 감퇴 정도를 결과로 보여줄 수 있는 사이트',
          skill:    'Vue, Javascript, HTML5, CSS'
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
          comment:  '자사 앱에서 사용하는 직원의 보험상품 교육용 매뉴얼',
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
          skill:    'Vue, Javascript, HTML5, CSS'
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
          comment:  '5단 빙고 게임을 통해 보험 상품을 소개하는 사이트',
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

  const careerDesc = [
    {
      id:         1,
      name:       '이다커뮤니케이션즈',
      department: '개발팀',
      position:   '과장',
      period:     '2021.01 ~ 재직중',
      work:       'Vue.js를 이용해 보험상품 판매를 위한 시뮬레이터(모바일, 태블릿) 사이트를 만들었습니다.',
      client:     '교보생명, 라이나생명, 신한라이프, 동양생명',
      skill:      'Vue, Javascript, HTML5, CSS3'
    },
    {
      id:         2,
      name:       '아이파트너즈',
      department: '퍼블리싱',
      position:   '과장',
      period:     '2016.06 ~ 2021.01',
      work:       '고객사의 웹 사이트 운영, 구축 업무를 담당했습니다. 신세계백화점 웹 접근성 마크 획득',
      client:     '현대카드, 신세계백화점, 신라면세점',
      skill:      'Jquery, Javascript, HTML5, CSS3'
    },
    {
      id:         3,
      name:       '애비로드',
      department: '퍼블리싱',
      position:   '과장',
      period:     '2015.03 ~ 2016.05',
      work:       '고객사의 웹 사이트 운영, 구축 업무를 담당했습니다.',
      client:     '우리은행, 흥국생명, 데상트, 119 소방현장 통합관리 시스템, 삼성 SUHD TV 마이크로 사이트, CASS BEATS 프로모션 사이트, 싸이버로지텍 인트라넷',
      skill:      'Jquery, Javascript, HTML5, CSS3'
    },
    {
      id:         4,
      name:       '문화마케팅연구소',
      department: '개발팀',
      position:   '대리',
      period:     '2014.09 ~ 2015.02',
      work:       '자사 웹사이트 운영, 구축 업무를 담당했습니다.',
      client:     '웹표준, 웹 접근성, 크로스 브라우징',
      skill:      'Jquery, Javascript, HTML5, CSS3'
    },
    {
      id:         5,
      name:       '김영일교육컨설팅',
      department: '개발팀',
      position:   '대리',
      period:     '2014.04 ~ 2014.09',
      work:       '자사 웹사이트 구축 업무를 담당했습니다.',
      client:     '웹표준, 웹 접근성, 크로스 브라우징',
      skill:      'Jquery, Javascript, HTML5, CSS3'
    },
    {
      id:         6,
      name:       '웹비젼',
      department: '퍼블리싱사업부',
      position:   '사원',
      period:     '2012.12 ~ 2013.12',
      work:       '고객사의 웹 사이트 운영, 구축 업무를 담당했습니다.',
      client:     '한솔 그룹, 순천향대학교, 동국대학교 전산원, 세명대학교, 에듀윌, LG U+, 유니클로, 푸마, 키엘, 무인양품',
      skill:      'Jquery, Javascript, HTML5, CSS3'
    },
    {
      id:         7,
      name:       '토스',
      department: 'IT사업 1팀',
      position:   '사원',
      period:     '2012.03 ~ 2012.12',
      work:       '고객사의 웹 사이트 운영, 구축 업무를 담당했습니다.',
      client:     '팬택 휴대폰 전자매뉴얼 구축, 팬택 계열사 라츠 mall 운영',
      skill:      'Jquery, Javascript, HTML5, CSS3'
    },
  ];

  return (
    <div id="wrapper">
      <header>
        <h1>오경훈(KyungHoon Oh)</h1>

        <ul>
          <li><strong className='email'>이메일</strong><span>keichi5693@gmail.com</span></li>
          <li><strong className='phone'>연락처</strong><span>010-5249-2123</span></li>
        </ul>

        <dl>
          <dt>안녕하세요? 프론트엔드 개발자 오경훈입니다.</dt>
          <dd>
            <ul className='bullList'>
              <li>새로운 기술, 공부는 직접 테스트를 통해 체득하고 그 기록을 남기고 있습니다.</li>
              <li>군더더기 없이 효율적인 클린코드를 지양합니다. 그 과정에 시간투자 하는것에 거부감이 없습니다.</li>
              <li>타 팀과의 커뮤니케이션에서 의사표현이 확실하며 일정 준수를 지양 합니다.</li>
            </ul>
          </dd>
          <dt>[Skill &amp; Tool]</dt>
          <dd>
            <ul>
              <li>Javascript, Vue.js, Jquery, React</li>
              <li>HTML5, CSS3, SCSS</li>
              <li>Webpack</li>
              <li>PhotoShop, Figma, Xd</li>
            </ul>
          </dd>
          <dt>[학력]</dt>
          <dd>한양사이버대학교 - 컴퓨터 공학과</dd>
        </dl>
      </header>
      <Container vueProject={vueProject} careerDesc={careerDesc} />
    </div>
  );
}

export default App;
