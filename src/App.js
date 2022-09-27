import React from 'react'
class App extends React.Component {
  render() {
    return (
			<section class="wrap">
				<a href="/"><img className="results-logo"  src="img/google.png" /></a>
				<form method="post" action="/results">
				<input className="search-searchbar" type="text" name="search"/>
				<button className="search-button">Search</button>
				</form>
			</section>

		)
  }
}
export default App
