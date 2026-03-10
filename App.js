import './App.css';

function App() {
  return (
    <div style={{fontFamily:"Arial", textAlign:"center"}}>

      <h1>My Portfolio</h1>
      <h2>Sneha Dash</h2>
      <p>Computer Science Student | C++ | Java | Web Development</p>

      <hr/>

      <h2>Skills</h2>
      <ul style={{listStyle:"none"}}>
        <li>C++ Programming</li>
        <li>Java Programming</li>
        <li>HTML, CSS, JavaScript</li>
        <li>React.js</li>
        <li>SQL</li>
      </ul>

      <hr/>

      <h2>Projects</h2>
      <p><b>Expense Tracker</b> – Java application to track daily expenses.</p>
      <p><b>Stock Portfolio Generator</b> – Generates stock portfolio analysis.</p>
      <p><b>Portfolio Website</b> – Personal website built using React.</p>

      <hr/>

      <h2>Education</h2>
      <p>B.Tech Computer Science Engineering</p>

      <hr/>

      <h2>Contact</h2>
      <p>Email: s2006dash@gmail.com.com</p>
      <p>GitHub: https://github.com/S2006dash</p>
      <p>LinkedIn: https://www.linkedin.com/in/sneha-dash-825b4830b/</p>

    </div>
  );
}

export default App;
