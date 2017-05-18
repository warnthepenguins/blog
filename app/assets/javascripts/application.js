// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .


var buildSuggestions = function (json) {
  var obj = JSON.parse(json),
    suggestionBox = document.getElementById('js-suggestions'),
    newSuggestion,
    newLink,
    textNode = "";
  suggestionBox.innerHTML = '';
  [].forEach.call(obj, (el) => {
    newSuggestion = document.createElement('li');
    newLink = document.createElement('a');
    textNode = document.createTextNode(el.name_main);
    newLink.href = '/drugs?id=' + el.id;
    newLink.appendChild(textNode);
    newSuggestion.appendChild(newLink);
    suggestionBox.appendChild(newSuggestion);
  });
  return;
}

var getSearchResults = function (query, callback) {
  var getRequest = new XMLHttpRequest();

	getRequest.open("GET", './drugs?suggest=1&search=' + query, true);
	getRequest.setRequestHeader("Content-type", 'application/json');//'application/json');

	getRequest.onreadystatechange = function () {
		if (getRequest.readyState === XMLHttpRequest.DONE && (getRequest.status === 200 || getRequest.status === 201)) {
      callback(getRequest.responseText);
		}
  };
	getRequest.send();
}

  document.addEventListener('turbolinks:load', function () {

    searchForm = document.getElementById('search-form');
    searchBar = document.getElementById('search');
    searchBar.addEventListener('keyup', function () {
      // searchBar.getComputedStyle('background', 'blue');
      if (searchBar.value !== '') {
        getSearchResults(searchBar.value, buildSuggestions);
      } else {
        buildSuggestions('{}');
      }
    });
    console.log('yes!');
  });
