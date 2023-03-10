import React from "react";
import axios from 'axios';
import DrawerAppBar from "./DrawerAppBar";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       results: [],
       currentPage: 1,
      itemsPerPage: 5
    }
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  handleSearch = event => {
    event.preventDefault();
    const searchQuery = event.target.search.value;
    const filter = event.target.filter.value;
    console.log(searchQuery);
    console.log(filter);
    if(filter==="Popularity")
    {
      var config = {
        method: 'get',
        url: `https://hn.algolia.com/api/v1/search?query=${searchQuery}&tags=story`,
        headers: { }
      };
    }
    if(filter==="Date")
    {
      var config = {
        method: 'get',
        url: `https://hn.algolia.com/api/v1/search_by_date?query=${searchQuery}&tags=story`,
        headers: { }
      };
    }
    
    axios(config)
    .then((response)=> {
      console.log(JSON.stringify(response.data));
      console.log("showing resulttt",this.state.results);
      this.setState({ results: response.data.hits });
      console.log("showing resulttt",this.state.results);
    })
    .catch((error)=> {
      console.log(error);
    });
  };

  render() {

    const { currentPage, itemsPerPage, results } = this.state;
    const totalPages = Math.ceil(results.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = results.slice(startIndex, endIndex);
    
    return (
      <div>
        <DrawerAppBar></DrawerAppBar>
      <div className="min-h-screen bg-gray-100">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
	<div className="container mx-auto bg-indigo-500 rounded-lg p-14">
		<form onSubmit={this.handleSearch}>
			<h1 className="text-center font-bold text-white text-4xl">Search Hacker News !</h1>
				<br></br>
        <br></br>
        <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
					<input className="text-base text-gray-400 flex-grow outline-none px-2 " type="text" name="search" placeholder="Search News" />
					<div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
						<span className="text-base text-gray-800 outline-none">search</span>
            <select id="Com" className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
            <option value="story">All</option>
            <option value="story" selected>Stories</option>
            <option value="comments">Comments</option>
          </select>
          <span className="text-base text-gray-800 outline-none">by</span>
          <select id="Com" name="filter" className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
            <option value="Popularity" selected>Popularity</option>
            <option value="Date">Date</option>
          </select>
						<button type="submit" className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
					</div>
				</div>
		</form>
    
	</div>
{/* </div> */}
<div className="container mx-auto p-20">
    {currentItems.map(result => (
        <div key={result.objectID} class="bg-white p-6 rounded-lg shadow-lg border-t-2 border-solid border-indigo-600 p-8 mt-6">
        <a className="text-2xl font-bold mb-2 text-gray-800" href={result.url}>{result.title} ( {result.url!=null? result.url.split("/")[2] : 'none' } )</a>
        <p className="text-gray-500">{result.points} {result.points>1 ? 'points' : 'point'} | {result.author}  | {2023-parseInt(result.created_at.split("-")[0])} years ago | <QuestionAnswerIcon></QuestionAnswerIcon> {result.num_comments} {result.num_comments>1 ? 'comments' : 'comment'}</p>

      </div>
          ))}
{results.length>0 && 
<div className="flex justify-center mt-10 mb-15">
          <nav className="relative z-10">
            <ul className="flex">
              <li>
                <button
                  className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 mr-3"
                  disabled={currentPage === 1}
                  onClick={() => this.handlePageChange(currentPage - 1)}
                >
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </li>
              <li className="-ml-px">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                  <button key={pageNumber} className={`relative inline-flex items-center px-4 py-2 mr-3 border border-gray-300 bg-white text-sm leading-5 font-medium rounded-full text-gray-700 ${currentPage === pageNumber ? 'text-white bg-indigo-500 text-white' : 'hover:bg-indigo-200 hover:text-indigo-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500'}`} onClick={() => this.handlePageChange(pageNumber)}>
                      {pageNumber}
                    </button>
                  ))}
                </li>
                <li>
                  <button
                    className="relative inline-flex items-center px-4 py-2 mr-3 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500"
                    disabled={currentPage === totalPages}
                    onClick={() => this.handlePageChange(currentPage + 1)}
                  >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
  }
</div>
      </div>
      </div>
    );
          }
}

export default SearchPage;