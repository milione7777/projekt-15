//завдання 1
const users = [
    { name: 'User 1', balance: 900 },
    { name: 'User 2', balance: 100 },
    { name: 'User 3', balance: 500 }
  ];
  
  const getTotalBalance = (users) => {
    return users.reduce((total, user) => total + user.balance, 0);
  };
  
  const totalBalance = getTotalBalance(users);
  console.log(`Общая сумма баланса всех пользователей: ${totalBalance}`);

//завдання 2 
const people = [
    { name: "Олександр", friends: ["Дмитро", "Іван", "Марія"] },
    { name: "Катерина", friends: ["Марія", "Олександр"] },
    { name: "Іван", friends: ["Олександр", "Дмитро"] },
    { name: "Марія", friends: ["Іван"] },
  ];
  
  const friendName = "Марія";
  
  const peopleWithFriend = people
    .filter(person => person.friends.includes(friendName))
    .map(person => person.name);
  
  console.log(peopleWithFriend);
  
//завдання 3
let persons = [
    { name: 'Иван', friends: 10 },
    { name: 'Мария', friends: 5 },
    { name: 'Алексей', friends: 15 },
    { name: 'Ольга', friends: 8 }
];

persons.sort((a, b) => b.friends - a.friends);

let sortedNames = persons.map(person => person.name);

console.log(sortedNames);

//завдання 4
let participants = [
    { name: 'Иван', skills: ['JavaScript', 'HTML', 'CSS'] },
    { name: 'Мария', skills: ['Python', 'Django', 'JavaScript'] },
    { name: 'Алексей', skills: ['Java', 'Spring', 'Hibernate'] },
    { name: 'Ольга', skills: ['JavaScript', 'Node.js', 'Express'] }
];

let allSkills = participants.flatMap(participant => participant.skills);

let uniqueSortedSkills = [...new Set(allSkills)].sort();

console.log(uniqueSortedSkills);

