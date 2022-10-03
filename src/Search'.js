import React from 'react'
class Search extends React.Component {
	search = e => {
		e.preventDefault()
		console.log(e);
	}
  render() {
    return (
     <section class="wrap">
      <a href="/">
       <img className="results-logo"  src="img/google.png" />
      </a>
      <form monSubmit={e => this.search(e)}>
       <input className="search-searchbar" type="text" name="search"/>
       <button className="search-button">Search</button>
      </form>
     </section>
   )
  }
}
export default Search
