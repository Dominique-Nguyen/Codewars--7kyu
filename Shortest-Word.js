// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My solution

function findShort(s){
    let strArr = s.split(' ')
    let shortestStr = strArr.reduce((a,b) => a.length <= b.length ? a : b)
    return shortestStr.length
}

// Other solution

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

// ---------------------------------------------------------------------

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }