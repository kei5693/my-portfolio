import './assets/css/app.css';
import projectData from './assets/data/project.json';
import careerData from './assets/data/career.json';

import ProjectDesc from './components/ProjectDesc';
import CareerDesc from './components/CareerDesc';

function App() {
  return (
    <div id="wrapper">
      <header>
        <h1>오경훈(Oh KyungHoon)</h1>

        {/* <ul>
          <li><strong className='email'>이메일</strong><span>keichi5693@gmail.com</span></li>
          <li><strong className='phone'>연락처</strong><span>010-5249-2123</span></li>
        </ul> */}

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

      <section id="container">
        <ProjectDesc projectData={projectData} />
        <CareerDesc careerDesc={careerData} />
      </section>
    </div>
  );
}

export default App;
