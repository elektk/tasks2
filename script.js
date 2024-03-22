// arrays task 1

const words = ["август", "кот", "яблоко", "программирование"];

for (let i = 0; i < words.length; i++) {
  words[i] = words[i].split('').reverse().join('');
}

console.log(words);

// arrays task 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = [];

for (let i = 1; i < numbers.length; i += 2) {
  newNumbers.push(numbers[i]);
}
console.log(newNumbers);

// arrays task 3

const originalArray = [10, 20, 30, 40, 50];
const newOriginalArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  newOriginalArray.push(originalArray[i]);
}

console.log(newOriginalArray);

// arrays task 4

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNums = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    newNums.push(nums[i]);
  }
}

console.log(newNums);

// arrays task 5

let números = [1, 2, 3, 4, 5];
let somaQuadrados = 0;

for (let i = 0; i < números.length; i++) {
  somaQuadrados += números[i] * números[i];
}

console.log(somaQuadrados);




// objects task 1

function encodeVigenere(key, message) {
  let encryptedMessage = "";
  key = key.toLowerCase();
  message = message.toLowerCase();
  let keyLength = key.length;
  let keyAsInt = Array.from(key, char => char.charCodeAt(0) - 'а'.charCodeAt(0));
  for (let i = 0; i < message.length; i++) {
    let value = (message.charCodeAt(i) - 'а'.charCodeAt(0) + keyAsInt[i % keyLength]) % 32;
    encryptedMessage += String.fromCharCode(value + 'а'.charCodeAt(0));
  }
  return encryptedMessage;
}

console.log(encodeVigenere("код", "программирование"));

// objects task 2

const taskManager = {
  tasks: [],
  addTask: function(task) {
    this.tasks.push({ name: task, completed: false });
  },
  completeTask: function(taskIndex) {
    this.tasks[taskIndex].completed = true;
  },
  showTasks: function(taskIndex) {
    this.tasks.splice(taskIndex, 1);
  }
};

// Пример использования
taskManager.addTask("Помыть посуду");
taskManager.addTask("Выучить JavaScript");
console.log(taskManager.tasks); // Выведет задачи [{ name: "Помыть посуду", completed: false }, { name: "Выучить JavaScript", completed: false }]
taskManager.completeTask(0);
console.log(taskManager.tasks); // Выведет задачи [{ name: "Помыть посуду", completed: true }, { name: "Выучить JavaScript", completed: false }]
taskManager.showTasks(1);
console.log(taskManager.tasks); // Выведет задачи [{ name: "Помыть посуду", completed: true }]

// objects task 3

const products = [
  { id: 1, name: "Лаптоп", category: "Электроника" },
  { id: 2, name: "Книга", category: "Литература" },
  { id: 3, name: "Фотоаппарат", category: "Электроника" },
  { id: 4, name: "Сумка", category: "Мода" },
  ];


function groupProductsByCategory(products) {
  const groupedProducts = {};
  products.forEach(product => {
  if (groupedProducts[product.category]) {
  groupedProducts[product.category].push(product);
  } else {
  groupedProducts[product.category] = [product];
  }
  });
  return groupedProducts;
  }
  
  
  console.log(groupProductsByCategory(products));

// objects task 4

function wordCounter(str) {
  const words = str.toLowerCase().split(" ");
  const wordCount = {};
  
  for (let word of words) {
  if (wordCount[word]) {
  wordCount[word]++;
  } else {
  wordCount[word] = 1;
  }
  }
  return wordCount;
  }
  
  console.log(wordCounter("Программирование это просто, программирование это круто!"));

 // objects task 5

 const books = [
  { id: 1, title: "JavaScript: The Good Parts", copies: 5 },
  { id: 2, title: "You Don't Know JS", copies: 3 },
  { id: 3, title: "Eloquent JavaScript", copies: 7 },
];

  function bookInventory(books) {
    const inventory = {};
    
    for (let book of books) {
      inventory[book.title] = book.copies;
    }
    
    return inventory;
  }
  
  console.log(bookInventory(books));