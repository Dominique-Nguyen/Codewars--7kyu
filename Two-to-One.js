// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My solution

function longest(s1, s2) {
    let str1 = s1.split('')
    let str2 = s2.split('')
    let str3 = str1.concat(str2)
    str3 = [...new Set(str3)]
    return str3.sort().join('')
  }

  // Other solution

  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')