
const questions = {
  html: {
    low: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        answer: "Hyper Text Markup Language",
        explanation: "HTML stands for Hyper Text Markup Language, which structures content on the web."
      },
      {
        question: "Which tag is used to define an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
        explanation: "<ul> defines an unordered list, while <ol> defines an ordered list."
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<br>", "<lb>", "<line>"],
        answer: "<br>",
        explanation: "<br> is the correct tag to insert a line break."
      },
      {
        question: "How can you open a link in a new tab?",
        options: ["target='open'", "target='_blank'", "open='new'", "blank='true'"],
        answer: "target='_blank'",
        explanation: "target='_blank' is used to open the link in a new tab."
      },
      {
        question: "Which tag is used for a table row?",
        options: ["<tr>", "<td>", "<th>", "<table>"],
        answer: "<tr>",
        explanation: "<tr> defines a row in an HTML table."
      }
    ],
    hard: [
      {
        question: "How can you comment in HTML?",
        options: ["// this is a comment", "# comment", "<!-- comment -->", "<comment>"],
        answer: "<!-- comment -->",
        explanation: "HTML comments are written as <!-- comment -->."
      },
      {
        question: "Which input type defines a slider control?",
        options: ["text", "range", "slider", "scroll"],
        answer: "range",
        explanation: "The input type='range' is used to define a slider."
      },
      {
        question: "What is the default alignment of text in HTML?",
        options: ["Left", "Center", "Right", "Justify"],
        answer: "Left",
        explanation: "By default, HTML text is aligned to the left."
      },
      {
        question: "Which attribute is used to provide a unique identifier in HTML?",
        options: ["class", "id", "name", "style"],
        answer: "id",
        explanation: "The 'id' attribute is used to uniquely identify an element in HTML."
      },
      {
        question: "What does the <a> tag in HTML define?",
        options: ["An anchor/link", "An attribute", "An article", "An alert"],
        answer: "An anchor/link",
        explanation: "The <a> tag defines a hyperlink, which is used to link from one page to another."
      }
    ]
  },
  gk: {
    low: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
        explanation: "Mars is called the Red Planet due to its reddish appearance from iron oxide."
      },
      {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
        answer: "Carbon Dioxide",
        explanation: "Plants use carbon dioxide during photosynthesis."
      },
      {
        question: "Which part of the human body pumps blood?",
        options: ["Brain", "Liver", "Heart", "Lungs"],
        answer: "Heart",
        explanation: "The heart is the organ that pumps blood throughout the body."
      },
      {
        question: "Water boils at what temperature?",
        options: ["50°C", "100°C", "150°C", "200°C"],
        answer: "100°C",
        explanation: "At sea level, water boils at 100°C."
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        answer: "H2O",
        explanation: "H2O is the chemical formula for water."
      }
    ],
    hard: [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
        answer: "Mitochondria",
        explanation: "Mitochondria produce energy in the form of ATP, earning them the nickname 'powerhouse'."
      },
      {
        question: "What element has the chemical symbol 'Fe'?",
        options: ["Fluorine", "Iron", "Fermium", "Francium"],
        answer: "Iron",
        explanation: "'Fe' is the symbol for iron from its Latin name 'ferrum'."
      },
      {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
        answer: "Nitrogen",
        explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
      },
      {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "299,792 km/s", "1,000,000 km/s"],
        answer: "299,792 km/s",
        explanation: "The speed of light is approximately 299,792 kilometers per second."
      },
      {
        question: "Which vitamin is produced when a person is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D",
        explanation: "Vitamin D is synthesized in the skin when exposed to sunlight."
      }
    ]
  },
  sports: {
    low: [
      {
        question: "How many players are on a soccer team on the field?",
        options: ["9", "10", "11", "12"],
        answer: "11",
        explanation: "Each soccer team has 11 players on the field."
      },
      {
        question: "Which sport is associated with Wimbledon?",
        options: ["Cricket", "Tennis", "Football", "Golf"],
        answer: "Tennis",
        explanation: "Wimbledon is one of the four Grand Slam tennis tournaments."
      },
      {
        question: "What is the national sport of Canada?",
        options: ["Hockey", "Basketball", "Soccer", "Baseball"],
        answer: "Hockey",
        explanation: "Ice hockey is one of the national sports of Canada."
      },
      {
        question: "Which sport uses a bat and a ball?",
        options: ["Cricket", "Football", "Tennis", "Hockey"],
        answer: "Cricket",
        explanation: "Cricket is played with a bat and ball."
      },
      {
        question: "How many rings are there in the Olympic logo?",
        options: ["4", "5", "6", "7"],
        answer: "5",
        explanation: "The Olympic logo has 5 rings representing 5 continents."
      }
    ],
    hard: [
      {
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Argentina", "Italy", "Brazil"],
        answer: "Brazil",
        explanation: "Brazil has won the FIFA World Cup 5 times."
      },
      {
        question: "How long is a marathon?",
        options: ["21.1 km", "30 km", "42.2 km", "50 km"],
        answer: "42.2 km",
        explanation: "A marathon is 42.195 kilometers long."
      },
      {
        question: "Which chess piece can only move diagonally?",
        options: ["Rook", "Knight", "Bishop", "Queen"],
        answer: "Bishop",
        explanation: "The bishop moves diagonally in chess."
      },
      {
        question: "What is the maximum score in a single turn in bowling?",
        options: ["20", "25", "30", "10"],
        answer: "30",
        explanation: "A strike followed by two more strikes scores 30 points."
      },
      {
        question: "Which sport awards the Ryder Cup?",
        options: ["Golf", "Tennis", "Cricket", "Basketball"],
        answer: "Golf",
        explanation: "The Ryder Cup is awarded in golf."
      }
    ]
  },
  geography: {
  low: [
    {
      question: "What is the capital city of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
      explanation: "Paris is the capital city of France."
    },
    {
      question: "Which continent is Australia located on?",
      options: ["Asia", "Europe", "Australia", "Africa"],
      answer: "Australia",
      explanation: "Australia is both a country and a continent."
    },
    {
      question: "Which ocean lies to the east of the United States?",
      options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
      answer: "Atlantic Ocean",
      explanation: "The Atlantic Ocean lies to the east of the U.S."
    },
    {
      question: "Which country is known for the Great Wall?",
      options: ["China", "Japan", "India", "Russia"],
      answer: "China",
      explanation: "The Great Wall is located in China."
    },
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara", "Gobi", "Kalahari", "Arctic"],
      answer: "Sahara",
      explanation: "The Sahara Desert is the largest hot desert in the world."
    }
  ],
  hard: [
    {
      question: "Which river is the longest in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Amazon",
      explanation: "The Amazon River is the longest river in the world."
    },
    {
      question: "Which country is both an island and a continent?",
      options: ["Australia", "New Zealand", "Iceland", "Japan"],
      answer: "Australia",
      explanation: "Australia is unique as it is both an island and a continent."
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Nauru"],
      answer: "Vatican City",
      explanation: "Vatican City is the smallest country in terms of land area."
    },
    {
      question: "Which mountain range is the highest in the world?",
      options: ["Himalayas", "Andes", "Rockies", "Alps"],
      answer: "Himalayas",
      explanation: "The Himalayas are home to the highest peaks on Earth, including Mount Everest."
    },
    {
      question: "What is the longest river in Africa?",
      options: ["Nile", "Congo", "Zambezi", "Limpopo"],
      answer: "Nile",
      explanation: "The Nile is the longest river in Africa, flowing through northeastern Africa."
    }
  ]
},
politics: {
  low: [
    {
      question: "Who was the first President of the United States?",
      options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
      answer: "George Washington",
      explanation: "George Washington was the first President of the United States."
    },
    {
      question: "Which country is known for the Eiffel Tower?",
      options: ["USA", "UK", "France", "Germany"],
      answer: "France",
      explanation: "The Eiffel Tower is located in France, in the capital city of Paris."
    },
    {
      question: "Who was the leader of Nazi Germany during World War II?",
      options: ["Winston Churchill", "Adolf Hitler", "Joseph Stalin", "Franklin D. Roosevelt"],
      answer: "Adolf Hitler",
      explanation: "Adolf Hitler was the dictator of Nazi Germany during WWII."
    },
    {
      question: "What is the capital city of Canada?",
      options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: "Ottawa",
      explanation: "Ottawa is the capital city of Canada."
    },
    {
      question: "Who is the current President of the United States (2025)?",
      options: ["Donald Trump", "Joe Biden", "Barack Obama", "George Bush"],
      answer: "Joe Biden",
      explanation: "Joe Biden is the current President of the United States, having taken office in 2021."
    }
  ],
  hard: [
    {
      question: "Which country was the first to grant women the right to vote?",
      options: ["USA", "New Zealand", "Australia", "UK"],
      answer: "New Zealand",
      explanation: "New Zealand was the first self-governing country to grant women the right to vote, in 1893."
    },
    {
      question: "Who was the first woman to become the Prime Minister of the United Kingdom?",
      options: ["Margaret Thatcher", "Theresa May", "Queen Elizabeth", "Mary Wollstonecraft"],
      answer: "Margaret Thatcher",
      explanation: "Margaret Thatcher was the first female Prime Minister of the UK, serving from 1979 to 1990."
    },
    {
      question: "Which political ideology advocates for government control of all means of production?",
      options: ["Capitalism", "Socialism", "Communism", "Fascism"],
      answer: "Communism",
      explanation: "Communism advocates for the abolition of private property and government control of production."
    },
    {
      question: "Which country has a system of government known as a 'constitutional monarchy'?",
      options: ["Japan", "United Kingdom", "Canada", "Russia"],
      answer: "United Kingdom",
      explanation: "The UK is a constitutional monarchy, with the monarch serving as the ceremonial head of state."
    },
    {
      question: "Who wrote the political treatise 'The Prince'?",
      options: ["John Locke", "Thomas Hobbes", "Karl Marx", "Niccolò Machiavelli"],
      answer: "Niccolò Machiavelli",
      explanation: "'The Prince' is a political treatise written by Niccolò Machiavelli, advising rulers on statecraft."
    }
  ]
},
 movies: {
     low:  [
       {
        question: "Who is the superhero with a shield?",
        options: ["Iron Man", "Thor", "Captain America", "Hulk"],
        answer: "Captain America",
        explanation: "Captain America is known for his iconic shield."
      },
      {
        question: "Which movie features the song 'Let It Go'?",
        options: ["Frozen", "Tangled", "Moana", "Brave"],
        answer: "Frozen",
        explanation: "'Let It Go' is sung by Elsa in the movie Frozen."
      },
      {
        question: "Who directed the movie 'Titanic'?",
        options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Peter Jackson"],
        answer: "James Cameron",
        explanation: "James Cameron directed Titanic."
      },
      {
        question: "Which series features Hogwarts?",
        options: ["The Hunger Games", "Narnia", "Harry Potter", "Twilight"],
        answer: "Harry Potter",
        explanation: "Hogwarts is the school of witchcraft and wizardry in the Harry Potter series."
      },
      {
        question: "Which movie has a toy cowboy named Woody?",
        options: ["Toy Story", "Cars", "Up", "Monsters Inc."],
        answer: "Toy Story",
        explanation: "Woody is the cowboy toy in Toy Story."
      }
    ],
    hard: [
      {
        question: "Which movie won Best Picture at the 2020 Oscars?",
        options: ["Joker", "1917", "Parasite", "Ford v Ferrari"],
        answer: "Parasite",
        explanation: "Parasite was the first foreign-language film to win Best Picture."
      },
      {
        question: "Which actor played the Joker in The Dark Knight?",
        options: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"],
        answer: "Heath Ledger",
        explanation: "Heath Ledger's performance as Joker earned him a posthumous Oscar."
      },
      {
        question: "Who directed Inception?",
        options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"],
        answer: "Christopher Nolan",
        explanation: "Inception was directed by Christopher Nolan."
      },
      {
        question: "Which movie has the quote 'I'll be back'?",
        options: ["Terminator", "Predator", "Die Hard", "RoboCop"],
        answer: "Terminator",
        explanation: "'I'll be back' is a famous quote from The Terminator."
      },
      {
        question: "Which studio created the movie Up?",
        options: ["DreamWorks", "Pixar", "Sony", "Illumination"],
        answer: "Pixar",
        explanation: "Pixar created the movie Up."
      }
    ]
  },
python: {
   low:  [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["def", "function", "method", "define"],
      answer: "def",
      explanation: "In Python, 'def' is used to define a function."
    },
    {
      question: "What is the data type of the object 'True' in Python?",
      options: ["int", "bool", "str", "float"],
      answer: "bool",
      explanation: "'True' is a boolean value in Python, with data type 'bool'."
    },
    {
      question: "Which method is used to get the length of a list in Python?",
      options: ["len()", "length()", "size()", "count()"],
      answer: "len()",
      explanation: "In Python, the 'len()' function is used to get the length of a list."
    },
    {
      question: "Which of these is used to import modules in Python?",
      options: ["import", "include", "use", "require"],
      answer: "import",
      explanation: "In Python, the 'import' statement is used to import modules."
    },
    {
      question: "What is the default return value of a function if no return statement is used in Python?",
      options: ["None", "Null", "False", "0"],
      answer: "None",
      explanation: "In Python, if no return statement is used, the function returns 'None' by default."
    }
  ],
  hard: [
    {
      question: "Which method is used to remove an item from a list in Python?",
      options: ["remove()", "del()", "pop()", "clear()"],
      answer: "remove()",
      explanation: "In Python, 'remove()' is used to remove an item from a list."
    },
    {
      question: "Which of these is not a valid Python data type?",
      options: ["list", "tuple", "set", "array"],
      answer: "array",
      explanation: "Python uses lists and not arrays as a built-in data type."
    },
    {
      question: "Which function is used to get the ASCII value of a character in Python?",
      options: ["ord()", "chr()", "ascii()", "encode()"],
      answer: "ord()",
      explanation: "In Python, the 'ord()' function returns the ASCII value of a character."
    },
    {
      question: "What does the 'self' keyword represent in a Python class?",
      options: ["Class instance", "Class variable", "Function argument", "Class method"],
      answer: "Class instance",
      explanation: "'self' represents the instance of the class in Python."
    },
    {
      question: "Which of these statements is used to handle exceptions in Python?",
      options: ["try-except", "catch-finally", "throw-catch", "if-else"],
      answer: "try-except",
      explanation: "In Python, 'try-except' is used to handle exceptions."
    }
  ]
},
java:{
  low: [
    {
      question: "Which of these is used to define a class in Java?",
      options: ["class", "def", "function", "object"],
      answer: "class",
      explanation: "In Java, the 'class' keyword is used to define a class."
    },
    {
      question: "Which data type in Java represents a single character?",
      options: ["String", "char", "int", "boolean"],
      answer: "char",
      explanation: "In Java, 'char' is used to represent a single character."
    },
    {
      question: "Which keyword is used to create an object in Java?",
      options: ["new", "create", "object", "this"],
      answer: "new",
      explanation: "The 'new' keyword is used to create an instance of a class (an object) in Java."
    },
    {
      question: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "null", "0"],
      answer: "false",
      explanation: "In Java, the default value of a boolean variable is 'false'."
    },
    {
      question: "Which method is used to start a thread in Java?",
      options: ["start()", "run()", "execute()", "begin()"],
      answer: "start()",
      explanation: "In Java, the 'start()' method is used to begin the execution of a thread."
    }
  ],
  hard: [
    {
      question: "What does the 'super' keyword refer to in Java?",
      options: ["Current class", "Parent class", "Current method", "Current object"],
      answer: "Parent class",
      explanation: "'super' refers to the immediate parent class of the current object in Java."
    },
    {
      question: "Which of these is used to handle exceptions in Java?",
      options: ["try-catch", "if-else", "throw", "return"],
      answer: "try-catch",
      explanation: "In Java, 'try-catch' blocks are used to handle exceptions."
    },
    {
      question: "Which type of memory is used by the JVM to store method variables in Java?",
      options: ["Heap", "Stack", "Register", "Method Area"],
      answer: "Stack",
      explanation: "Method variables in Java are stored in the stack memory."
    },
    {
      question: "What does JVM stand for?",
      options: ["Java Variable Machine", "Java Virtual Machine", "Java Virtual Memory", "Java Verified Method"],
      answer: "Java Virtual Machine",
      explanation: "JVM stands for Java Virtual Machine, which allows Java programs to run on any device."
    },
    {
      question: "Which access modifier makes a class or method accessible only within its own package in Java?",
      options: ["public", "private", "protected", "default"],
      answer: "default",
      explanation: "In Java, the default access modifier allows access within the same package only."
    }
  ]
}
};


// [The rest of your quiz logic remains unchanged below this line...]

let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let xp = 0;
let timer;
let history = [];
let selectedTopic = "";
let selectedLevel = "";
let username = "";
let avatar = "";

// USER SETUP
function saveUserInfo() {
  const nameInput = document.getElementById('username').value.trim();
  const avatarInput = document.querySelector('input[name="avatar"]:checked');

  if (!nameInput || !avatarInput) {
    alert("Please enter your name and select an avatar!");
    return;
  }

  username = nameInput;
  avatar = avatarInput.value;

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('welcome-message').textContent = `Welcome, ${avatar} ${username}!`;
}

// QUIZ START
function startQuiz(topic) {
  selectedTopic = topic;
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('level-select').classList.remove('hidden');
}

function selectLevel(level) {
  selectedLevel = level;
  currentQuiz = questions[selectedTopic][selectedLevel];
  currentIndex = 0;
  score = 0;
  xp = 0;
  history = [];
  document.getElementById('level-select').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  clearInterval(timer);
  const q = currentQuiz[currentIndex];
  document.getElementById('question').textContent = q.question;
  document.getElementById('options').innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(opt, q.answer);
    document.getElementById('options').appendChild(btn);
  });
  document.getElementById('time').textContent = 20;
  document.getElementById('next-btn').style.display = 'none';
  startTimer();
}

function startTimer() {
  let time = 20;
  timer = setInterval(() => {
    time--;
    document.getElementById('time').textContent = time;
    if (time === 0) {
      clearInterval(timer);
      selectAnswer(null, currentQuiz[currentIndex].answer);
    }
  }, 1000);
}

function selectAnswer(selected, correct) {
  clearInterval(timer);
  const buttons = document.querySelectorAll('#options button');
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.style.backgroundColor = 'green';
    else if (btn.textContent === selected) btn.style.backgroundColor = 'red';
  });
  if (selected === correct) {
    score++;
    gainXP(10); // +10 XP per correct answer
  }
  history.push({
    question: currentQuiz[currentIndex].question,
    selected,
    correct,
    explanation: currentQuiz[currentIndex].explanation
  });
  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// 🎯 GAIN XP & SHOW ACHIEVEMENTS
function gainXP(points) {
  xp += points;
}

function showAchievements() {
  let message = "🏅 Achievements: ";
  if (xp >= 50) message += "🔥 Quiz Master! ";
  if (xp >= 30) message += "⚡ Fast Thinker! ";
  if (score === currentQuiz.length) message += "🎯 Perfect Score!";
  document.getElementById('achievements').textContent = message;
}

// 📊 RESULT CHART
function showResultsChart(correct, total) {
  const ctx = document.getElementById('scoreChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Incorrect'],
      datasets: [{
        label: 'Quiz Result',
        data: [correct, total - correct],
        backgroundColor: ['#4CAF50', '#f44336'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      animation: { animateScale: true }
    }
  });
}

// 📤 SHARE SCORE BUTTON
function shareScore() {
  const message = `🏆 I scored ${score}/${currentQuiz.length} in QuizWhiz🔥 Try beating my score, ${avatar} ${username} challenges you!`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// 🎓 Generate Certificate
function generateCertificate(playerName, score) {
  const canvas = document.createElement('canvas');
  canvas.width = 1000;
  canvas.height = 700;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#fdf6e3'; // cream
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Border
  ctx.strokeStyle = '#d4af37'; // gold
  ctx.lineWidth = 20;
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

  // Title
  ctx.font = 'bold 50px Serif';
  ctx.fillStyle = '#d4af37';
  ctx.textAlign = 'center';
  ctx.fillText('Certificate of Achievement', canvas.width / 2, 150);

  // Subtitle
  ctx.font = 'italic 28px Serif';
  ctx.fillStyle = '#333';
  ctx.fillText('This is proudly presented to', canvas.width / 2, 230);

  // Player Name
  ctx.font = 'bold 42px Serif';
  ctx.fillStyle = '#000';
  ctx.fillText(playerName, canvas.width / 2, 300);

  // Score text
  ctx.font = '26px Serif';
  ctx.fillStyle = '#333';
  ctx.fillText(`For successfully completing the quiz with a score of ${score}`, canvas.width / 2, 370);

  // Footer
  ctx.font = '20px Serif';
  ctx.fillText('Date: ' + new Date().toLocaleDateString(), canvas.width / 2, 500);

  ctx.font = 'italic 18px Serif';
  ctx.fillText('QuizWhiz', canvas.width / 2, 540);

  // Create download button
  const downloadBtn = document.createElement('a');
  downloadBtn.innerText = 'Download Certificate';
  downloadBtn.href = canvas.toDataURL('image/png');
  downloadBtn.download = 'certificate.png';
  downloadBtn.style.display = 'inline-block';
  downloadBtn.style.marginTop = '20px';
  downloadBtn.style.padding = '10px 20px';
  downloadBtn.style.backgroundColor = '#aa1b9bff';
  downloadBtn.style.color = '#fff';
  downloadBtn.style.textDecoration = 'none';
  downloadBtn.style.borderRadius = '5px';
  
  // Append to result screen
  document.getElementById('result-screen').appendChild(downloadBtn);
}

// ✅ FINAL RESULT
function showResult() {
  document.getElementById('quiz-container').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
  document.getElementById('score').textContent = score;

  showAchievements();
  showResultsChart(score, currentQuiz.length);

  const review = document.getElementById('review');
  review.innerHTML = "<h3>Review with Explanations</h3>";
  history.forEach((item, i) => {
    review.innerHTML += `<p><strong>Q${i + 1}:</strong> ${item.question}<br>
                         <em>Your Answer:</em> ${item.selected || "No Answer"}<br>
                         <em>Correct:</em> ${item.correct}<br>
                         <em>Explanation:</em> ${item.explanation}</p><hr>`;
  });

  const histList = document.getElementById('history');
  histList.innerHTML = "";
  history.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = `Q${i + 1}: ${item.selected === item.correct ? "Correct" : "Incorrect"}`;
    histList.appendChild(li);
  });

  // 🎯 Generate certificate when results are shown
  generateCertificate(username, `${score}/${currentQuiz.length}`);
}

function goBack() {
  window.location.href = 'index.html';
}
