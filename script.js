const reverseStringInput = document.querySelector('.reverse-string')
const reverseStringOutput = document.querySelector('.reverse-string-output')
const palindromeStringInput = document.querySelector('.palindrome-string')
const palindromeStringOutput = document.querySelector(
  '.palindrome-string-output'
)
const countCharacterFrequencyInput = document.querySelector('.count-character')
const countCharacterFrequencyOutput = document.querySelector(
  '.count-character-output'
)
const mostFreqCharInput = document.querySelector('.most-freq-character')
const mostFreqCharOutput = document.querySelector('.most-freq-character-output')
const anagramsStringInput = document.querySelector('.anagrams-string')
const anagramsStringOutput = document.querySelector('.anagrams-string-output')
const nonRepeatingCharInput = document.querySelector('.non-repeating-char')
const nonRepeatingCharOutput = document.querySelector(
  '.non-repeating-char-output'
)
const removeDuplicateInput = document.querySelector('.remove-duplicate')
const removeDuplicateOutput = document.querySelector('.remove-duplicate-output')
const onlyAlphabetsInput = document.querySelector('.only-alphabets')
const onlyAlphabetsOutput = document.querySelector('.only-alphabets-output')
const reverseWordsInput = document.querySelector('.rev-words')
const reverseWordsOutput = document.querySelector('.rev-words-output')
const longestWordInput = document.querySelector('.longest-word')
const longestWordOutput = document.querySelector('.longest-word-output')
const countWordInput = document.querySelector('.count-word')
const countWordOutput = document.querySelector('.count-word-output')
const subStringOfStringInput = document.querySelector('.substring-of-string')
const subStringOfStringOutput = document.querySelector(
  '.substring-of-string-output'
)
const compressStringInput = document.querySelector('.compress-string')
const compressStringOutput = document.querySelector('.compress-string-output')

function reverseString(input) {
  let reverse = input.split('')
  let reverseStr = ''
  for (let i = reverse.length - 1; i >= 0; i--) {
    reverseStr += reverse[i]
  }
  reverseStringOutput.innerText = reverseStr
}

reverseStringInput.addEventListener('input', (e) => {
  reverseString(e.target.value)
})

function checkPalindromeString(input) {
  if (!input) {
    palindromeStringOutput.innerText = ''
    return
  }
  let leftStr = 0
  let rightStr = input.length - 1
  let isPalindrome = true
  while (leftStr < rightStr) {
    if (input[leftStr] !== input[rightStr]) {
      isPalindrome = false
    }
    leftStr++
    rightStr--
  }
  palindromeStringOutput.innerText = `${
    isPalindrome ? 'Palindrome' : 'Not Palindrome'
  }`
}

palindromeStringInput.addEventListener('input', (e) => {
  checkPalindromeString(e.target.value)
})

function countCharFrequency(input) {
  if (!input) {
    countCharacterFrequencyOutput.innerHTML = ''
    return
  }
  let freqObj = {}
  for (let letter of input) {
    if (freqObj[letter]) {
      freqObj[letter]++
    } else {
      freqObj[letter] = 1
    }
  }
  countCharacterFrequencyOutput.innerText = `${JSON.stringify(freqObj)}`
}

countCharacterFrequencyInput.addEventListener('input', (e) => {
  countCharFrequency(e.target.value)
})

function mostFreqChar(input) {
  if (!input) {
    mostFreqCharOutput.innerHTML = ''
    return
  }
  let mostFreqObj = {}
  let char = ''
  let count = 0
  for (let letter of input.toLowerCase()) {
    mostFreqObj[letter] = (mostFreqObj[letter] || 0) + 1
    if (mostFreqObj[letter] > count) {
      count = mostFreqObj[letter]
      char = letter
    }
  }
  mostFreqCharOutput.innerHTML = `${char}:${count}`
}

mostFreqCharInput.addEventListener('input', (e) => {
  mostFreqChar(e.target.value)
})

function checkAnagramsStr(input) {
  let [a, b] = input.split(' ')
  if (!a || !b) {
    anagramsStringOutput.innerText = ''
    return
  }
  let isAnagram = false
  let charObj = {}
  for (let letter of a) {
    charObj[letter] = (charObj[letter] || 0) + 1
  }

  for (let ch of b) {
    if (!charObj[ch]) {
      isAnagram = false
    } else {
      isAnagram = true
    }
  }
  if (a.length !== b.length) {
    isAnagram = false
  }
  anagramsStringOutput.innerText = `${isAnagram ? 'Anagram' : 'Not Anagram'}`
}

anagramsStringInput.addEventListener('input', (e) => {
  checkAnagramsStr(e.target.value)
})

function nonRepeatChar(input) {
  if (!input) {
    nonRepeatingCharOutput.innerText = ''
    return
  }
  let nonObj = {}
  let charLetter = ''
  for (let char of input) {
    nonObj[char] = (nonObj[char] || 0) + 1
  }

  for (let letter of input) {
    if (nonObj[letter] === 1) {
      charLetter = letter
      break
    }
  }
  nonRepeatingCharOutput.innerText = charLetter
}

nonRepeatingCharInput.addEventListener('input', (e) => {
  nonRepeatChar(e.target.value)
})

function removeDuplicate(input) {
  let removeDup = ''
  for (let i = 0; i < input.length; i++) {
    if (removeDup.indexOf(input[i]) === -1) {
      removeDup += input[i]
    }
  }
  removeDuplicateOutput.innerText = removeDup
}

removeDuplicateInput.addEventListener('input', (e) => {
  removeDuplicate(e.target.value)
})

function checkAlphabets(input) {
  if (!input) {
    onlyAlphabetsOutput.innerHTML = ''
    return
  }
  let isCodeAt = true
  for (let char of input) {
    if (
      !(char.charCodeAt() >= 65 && char.charCodeAt() <= 90) &&
      !(char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
    ) {
      isCodeAt = false
      console.log(isCodeAt)
    }
  }
  onlyAlphabetsOutput.innerHTML = isCodeAt
}

onlyAlphabetsInput.addEventListener('input', (e) => {
  checkAlphabets(e.target.value)
})

function reverseWordSent(input) {
  let words = input.split(' ')
  let reverseSent = ''
  for (let i = words.length - 1; i >= 0; i--) {
    reverseSent += `${words[i]} `
  }
  reverseWordsOutput.innerText = reverseSent
}

reverseWordsInput.addEventListener('input', (e) => {
  reverseWordSent(e.target.value)
})

function longestWord(input) {
  let words = input.split(' ')
  let longestWord = ''
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }
  longestWordOutput.innerHTML = longestWord
}

longestWordInput.addEventListener('input', (e) => {
  longestWord(e.target.value)
})

function countWord(input) {
  let count = 0
  let isWord = false
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== ' ' && !isWord) {
      count++
      isWord = true
    } else if (input[i] === ' ') {
      isWord = false
    }
  }
  countWordOutput.innerHTML = `${count} word`
}

countWordInput.addEventListener('input', (e) => {
  countWord(e.target.value)
})

function subStringOfString(input) {
  let allSubStr = ''
  for (let i = 0; i < input.trim().length; i++) {
    for (let j = i; j < input.trim().length; j++) {
      let subStr = ''
      for (let k = i; k <= j; k++) {
        subStr += `${input[k]}`
      }
      allSubStr += `${subStr} `
    }
  }
  subStringOfStringOutput.innerHTML = allSubStr
}

subStringOfStringInput.addEventListener('input', (e) => {
  subStringOfString(e.target.value)
})

function compressString(input) {
  let frequency = ''
  let stringObj = {}
  for (let letter of input.trim()) {
    stringObj[letter] = (stringObj[letter] || 0) + 1
  }
  for (let [key, value] of Object.entries(stringObj)) {
    frequency += `${key}: ${value} ` 
  }
  compressStringOutput.innerHTML = frequency
}

compressStringInput.addEventListener('input', (e) => {
  compressString(e.target.value)
})
