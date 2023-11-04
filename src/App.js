import './App.css';
import Avatar from './components/Avatar';
import IconLinks from './components/IconLinks';
import LinkCard from './components/LinkCard';

function App() {
  return (
    <div className="App">
      <Avatar />
      <h2>Samuel John</h2>
      <IconLinks />
      <h3>Projects</h3>
      <LinkCard link = "https://pypi.org/project/terminal-styler/" title = "Terminal Styler" src="stylet.png"/>
      <LinkCard link = "https://github.com/SamJohn04/code-craft-sih" title = "Project Orbit" src="project-orbit.png"/>
      <h3>Contact Me</h3>
      <LinkCard link = "https://calendly.com/samuel-john-codes" title = "Let's talk!" src="talk.png"/>
    </div>
  );
}

export default App;
