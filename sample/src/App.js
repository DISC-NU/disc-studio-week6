import './App.css';

const Skill = ({label}) => {
  return (
    <div className="skill">{label}</div>
  )
}

function App() {
  const skills = [
    'React', 'Javascript', 'HTML', 'Figma', 
    'Bootstrap', 'CSS', 'Github', 'C/C++', 'Python',
    'Racket', 'R', 'Jupyter', 'Linux', 'Vim', 
  ]
  return (
    <div className="App">
      <div className="space"></div>
      <div className="hero">
        <div className="intro">
          Hi there, I'm Richard Lam!
        </div>
        <div className="intro-caption">
          software engineer | data scientist | product designer
        </div>
      </div>
      <div className="about-me">About Me</div>
      <div className="lorem">
        A section where you talk about yourself. Also feel free to add more sections to this website. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </div>
      <br></br>
      <div className="skills">Skills </div>
      <br></br>
      <div className="skills-grid">{skills.map((skill) => <Skill label={skill}></Skill>)}</div>
      <br></br>
      <br></br>
      <br></br>
      <div className="contact">Want to work on a project together? Email me at firstnameLastname@u.northwestern.edu!</div>


    </div>
  );
}

export default App;
