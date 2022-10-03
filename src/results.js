import React from 'react'
class Results extends React.Component {
  render() {
    return (
     <div className="resultbody">
      <header>
        <div>
          <a href="/"><img className="results-logo"  src="img/google.png" /></a>
        </div>
        <form>
          <input className="results-searchbar" type="text" />
          <button className="results-button">Search</button>
        </form>
      </header>
      <main>
				<div>
          <span>37 Results</span>
        </div>
        <div className="result-box">
          <small>https://www.w3schools.com</small>
          <a
            href="https://www.juventus.com/en/"
            className="results-name"
            target="_blank"
            ><h1>JavaScript Tutorial - W3Schools</h1></a
          >
          <p>
            Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java
          </p>
          <div>
            <ul>
              <li>
                <a href="https://www.w3schools.com/js/js_intro.asp" target="_blank"
                  >JavaScript Introduction</a
                >
              </li>
            </ul>
          </div>
        </div>
      </main>
     </div>
   )
  }
}
export default Results
