// a. Palindrom

const isPalindrome = (text) => {
  const lowText = text.toLowerCase();
  const reversedText = lowText.split('').reverse().join('');

  if (lowText === reversedText) {
    console.log(`${text}  adalah palindrom`);
  } else {
    console.log(`${text}  bukan palindrom`);
  }
}

isPalindrome('Malam');

// b. Reverse word
const reverseWords = (sentence) => {
    const words = sentence.split(' ');
    const reversedWords = words.reverse();
    const reversedSentence = reversedWords.join(' ');
    console.log(reversedSentence);
  };
  

reverseWords('Saya belajar Javascript');
reverseWords('Ini adalah contoh');