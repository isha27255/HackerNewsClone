import React from "react";
import axios from 'axios';
import DrawerAppBar from "./DrawerAppBar";

class NewStoriesPage extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      stories: [],
      currentPage: 1,
      itemsPerPage: 5
    };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  componentDidMount() {
    axios
      .get('/api/v1/search_by_date?tags=story')
      .then(res => {
        this.setState({ stories: res.data.hits });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { currentPage, itemsPerPage, stories } = this.state;
    const totalPages = Math.ceil(stories.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = stories.slice(startIndex, endIndex);
    return (
      <div class="min-h-screen bg-gray-100">
        <DrawerAppBar></DrawerAppBar>
        
        <div class="container mx-auto p-20">
    {currentItems.map(story => (
        <div key={story.objectID} class="bg-white p-6 rounded-lg shadow-lg border-t-2 border-solid border-indigo-600 p-8 mt-6">
        <a class="text-2xl font-bold mb-2 text-gray-800" href={story.url}>{story.title} ( {story.url!=null? story.url.split("/")[2] : 'none' } )</a>
        <p class="text-gray-500">{story.points} {story.points>1 ? 'points' : 'point'} by {story.author}  | hide | past | discuss </p>

      </div>
          ))}

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
                  <button key={pageNumber} className={`relative inline-flex items-center px-4 py-2 mr-3 border border-gray-300 bg-white text-sm leading-5 font-medium rounded-full text-gray-700 ${currentPage === pageNumber ? 'bg-indigo-500 text-white' : 'hover:bg-indigo-200 hover:text-indigo-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500'}`} onClick={() => this.handlePageChange(pageNumber)}>
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







          {/* <div>
          <button disabled={currentPage === 1} onClick={() => this.handlePageChange(currentPage - 1)}>
            Previous
          </button>
          <button disabled={currentPage === totalPages} onClick={() => this.handlePageChange(currentPage + 1)}>
            Next
          </button>
        </div> */}
</div>

      </div>
    );
  }
}

export default NewStoriesPage;
