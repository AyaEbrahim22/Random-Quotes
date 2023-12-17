
var quotes = [
  '“Be yourself; everyone else is already taken.”',
  '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.”',
  '“Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.”',
  '“So many books, so little time.”',
  '“A room without books is like a body without a soul.”',
  '“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.”',
  '“You have gotta dance like there is nobody watching, Love like you will never be hurt,Sing like there is nobody listening, And live like it is heaven on earth.”',
  '“You know you are in love when you can not fall asleep because reality is finally better than your dreams.”',
  '“You only live once, but if you do it right, once is enough.”',
  '“Be the change that you wish to see in the world.”',
  '“In three words I can sum up everything I have learned about life: it goes on.”',
  '“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”',
  '“If you tell the truth, you do not have to remember anything.”',
  '“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',
  '“To live is the rarest thing in the world. Most people exist, that is all.”'
];

var names = [
    '― Oscar Wilde',
    '― Marilyn Monroe',
    '― Albert Einstein',
    '― Frank Zappa',
    '― Marcus Tullius Cicero',
    '― Bernard M. Baruch',
    '― William W. Purkey',
    ' ― Dr. Seuss',
    '― Mae West',
    '― Mahatma Gandhi',
    '― Robert Frost',
    '― Albert Camus',
    '― Mark Twain',
    '― C.S. Lewis, The Four Loves',
    '― Oscar Wilde'
];

// global variable
var previousNum;

function randomQuotes() {

  // Generate Random Number 
    var randomNum = Math.floor(Math.random() * quotes.length);

    //Check if the previous number is not equal to the currently generated number to avoid repetition.
    if (previousNum != randomNum) {

        document.getElementById('quote').innerHTML = quotes[randomNum];

        document.getElementById('author').innerHTML = names[randomNum];
    }
    else {
        randomQuotes();  // recursion
    }

    previousNum = randomNum;
}
