import React from "react";
import {render,screen,waitFor,fireEvent,act} from "@testing-library/react";
import {Provider} from "react-redux";
import MovieSearchView from "./../components/movie-search-view/movie.search.view.component";
import movieStore from "./../store/store";


it('Test Results Rendering Layout', async function(){
	window.fetch = async function(endPoint,options){
		var optionsBody = JSON.parse(options.body);
	if(optionsBody.searchKey==="lego"){
		return {"json": async function(){
				return{
		    "Search": [
		        {
		            "Title": "ABC Saturday Comedy Special",
		            "Year": "1976–",
		            "imdbID": "tt0076973",
		            "Type": "series",
		            "Poster": "N/A"
		        },
		        {
		            "Title": "The ABC Fall Preview Open House",
		            "Year": "2009",
		            "imdbID": "tt1508692",
		            "Type": "movie",
		            "Poster": "N/A"
		        },
		        {
		            "Title": "Ken Russell's ABC of British Music",
		            "Year": "1988",
		            "imdbID": "tt1118507",
		            "Type": "movie",
		            "Poster": "N/A"
		        }
		    ],
		    "totalResults": "346",
		    "Response": "True"
		}
	}};
	}
}

	render(<Provider store={movieStore}> <MovieSearchView></MovieSearchView> </Provider>);
	var element = screen.getByTestId("movie-text-box");
	expect(element).not.toBe(undefined);
	await act(async () => {fireEvent.change(element,{target:{value:"lego"}})});
	await waitFor(()=>{expect(()=>{screen.findByTestId("movie-results-count")}).not.toThrow('Unable to find an element')});
	var movieResultsContainer = screen.getByTestId("movie-results-container");
	expect(movieResultsContainer.querySelectorAll(".movie-tile").length).toBe(3);
});
