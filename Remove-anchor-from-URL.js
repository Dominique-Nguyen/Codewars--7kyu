// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// My solution

function removeUrlAnchor(url){
    const index = url.indexOf("#")
    return index === -1 ? url : url.slice(0, index)
  }

// Other solution

function removeUrlAnchor(url){
    return url.split('#')[0];
  }