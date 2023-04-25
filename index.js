let quotes = [
    "Nothing lasts forever. Not even your troubles.",
    "Being strong means rejoicing in who you are, complete with imperfections.",
    "If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place"
  ];
  
  function newQuote() {
    let randomNum = Math.floor(Math.random() * quotes.length);
    document.getElementById("display-quote").innerHTML = quotes[randomNum];
  }