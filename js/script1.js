// const age = 10;
// const totalPrise = 200.74;
// const userName = ' Строка Имя польевателя';
// const massage = 'Добро пожаловать';
// const isOpen = true;
// const shouldConfirm = false;
// const shouldRenew = confirm('очень важный воарос?');


// let quantity = prompt('blaaaa blaaaaa???');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);


// let base = prompt('введите число');
// base = Number(base);

// console.log(base);

// let power = prompt('введите степень');
// power = Number(power);

// console.log(power);

// const result = base ** power;
// console.log(result);

// console.log(Math.random());


// let brand = prompt('введи слово')
// brand = brand.toLowerCase();
// console.log(brand);



// console.log(5 && 7 && NaN && 'BNNBN' && false)

// console.log(2 || 5 || 10);

// console.log(!5)
// const x1 = 10;
// const x2 = 30;
// const number = 15;

// console.log(`Число ${number} попадает в отрезое до ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезое до ${x2}?`, number > x2);
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}?`, number > x1 && number < x2);
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}?`, number < x1 || number > x2);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && isDnd;

// console.log('можно открыть чат ?', canOpenChat)

// if (5 < 30) {
//     console.log('x > y');
// } else {
//     console.log('x < y')
// }

// const stars = 8;
// let prise;


// if (stars === 1) {
//     prise = 20;
// } else if (stars === 2) {
//     prise = 30;
// } else if (stars === 3) {
//     prise = 50;
// } else if (stars === 4) {
//     prise = 70;
// } else {
//     console.log('такого кол нет');
// }

// switch (stars) {
//     case 1:
//         prise = 20;
//         break;
//     case 2:
//         prise = 30;
//         break;
//     case 3:
//         prise = 50;
//         break;
//     case 4:
//         prise = 70;
//         break;
//     default:
//         console.log('qwe qew qwe qew wqe ');
// }

// console.log(prise);

// for (let i = 2; i < 100; i *= 3 ) {
//     console.log(i)
// }
// console.log('error')

// const userNumber = prompt("введи число :");


// if (userNumber % 2 === 0) {
//     console.log("парное число");
// } else {
//     console.log("НЕ ПАРНОЕ");
// }







// const userNumber = prompt("enter number");

// switch (true) {
//     case userNumber < 10:
//         console.log("okkk");
//         break;
//     case userNumber > 100:
//         console.log("BLA LA LA");
//         break;
//     default:
//         console.log("default");
// }






//  1. Нужно дать возможность юзеру ввести что нибудь в промпт
//  2. Нужно проверить ввели ли что то юзер в промпт, если нет то показать алерт "вы ничего не ввели"
//  3. Создать с помощью свитч-кейса светофор который будет иметь 4 состояния "красный", "желтый", "зеленый", "не работает"
//  4. В зависимости от того какой цвет ввел юзер мы формирируем ответ что ему делать и выводим через алерт

// const input = prompt("color");
// console.log(input);

// if (!input) {
//     alert("вы ничего не ввели")
// } else {
//     switch (input) {
//         case "red":
//             alert("stop");
//             break;
//         case "yelow":
//             alert("ready")
//             break;
//         case "green":
//             alert("move")
//             break;
//         default:
//             alert("be cearfull")
//     }
// }






// const numbers = '2314574450';

// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     number = Number(number);
//     if (number % 2 !== 0) {
//         console.log(number);
//     }
// }



// const arr = numbers.split('');

// for (let number of arr) {
//     let toNumber = Number(number);
    
//     if (toNumber % 2 !== 0 && !isNaN(toNumber)) {
//         console.log(toNumber)
//     }
// }




// 1. ввести ім'я для заміни в масиві
// 2. другий промт на яке ім'я
// 3. зробити перевірку чи є данні
// 4. чи існує ім'я в масиві
// 5. замінити ім'я якщо знайдено

// const names = ['artem', 'olga', 'dima', 'olga', 'maks', 'kate', 'bob', 'david'];

// const targetName = prompt("Enter target name");
// const newName = prompt("New name");

// if (!targetName || !newName) {
//     alert("try again");
// } else if (names.includes(targetName)) {
//     for (let i = 0; i < names.length; i += 1) {
//         if (targetName === names[i]) {
//             names[i] = newName;
//         }
//     }
// } else {
//     alert("Name not faund");

// }

// console.log(names);





// За который час улитка выползет с колодца
// за 1 день улитка проползает 7м  вверх
// ночью спит и сползает на 2м вниз
// 1 глубина = 42м    8 дней
// 2 глубина = 17м     3 дня
// 3 глубина = 18м     4 дня

// const daySpeed = 7;
// const nightSpeed = 2;
// const depth = 18;
// let days = 0;
// let path = 0;

// while (path <= depth) {
//   path += daySpeed;
//   days += 1;

//   if (path >= depth) {
//     break;
//   }

//   path -= nightSpeed;
// }
// console.log(days);


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
// }



// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// // 1. Объявление параметров x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// // 2. Передача аргументов
// multiply(2, 3, 5); // Результат умножения равен 30
// multiply(4, 8, 12); // Результат умножения равен 384
// multiply(17, 6, 25); // Результат умножения равен 2550







// const numbers = [5, 10, 12, 8, 6, 16, 11];
// let total = 0;

// // for (const number of numbers) {
// //   console.log(number);
// //   if (number % 2 !== 0) {
// //   console.log("Четное")
// //   total += number;
// // }
// // }



// console.log(numbers.includes(11 && 8 || 7 && 12));




// const numbers = [5, 42, 19, 15, 99, 57, 6];
// let trueNumber = 0;

// for (const number of numbers) {
//   if (number === 888) {
//     trueNumber = number;
//     break;
//   } else {
  //   }
  //     trueNumber = 777
// }

// console.log(trueNumber);


// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];
// console.table(friends);
// const findFriendByName = function (allFriend, name) {
//   for (const friend of friends) {
//     console.log(friend);

//     if (friend.name === name) {
//       return "NASHLI"
//     }
//   }
// }
// console.log(findFriendByName(friends, 'Kiwi'));

// const salaries = {
//   John: 100,
//   Anna: 160,
//   Pete: 130,
// };
// const salaries1 = {};

// let sum = 0;
// for (const salary in salaries) {
//   sum += salaries[salary];
// }
// console.log(sum);

// const calcSalaries = function (salaries) {
//   const values = Object.values(salaries)
//   if (values.length === 0) {
//     return 0;
//   }
//   let total = 0;
//   for (const value of values) {
//     total += value;
//   }
//   return total;
// }

// console.table(calcSalaries(salaries));
// console.table(salaries);


// const stones = [
//   { name: "изумруд", price: 1300, quantity: 4 },
//   { name: "брилиатн", price: 2700, quantity: 3 },
//   { name: "сапфир", price: 400, quantity: 7 },
//   { name: "щебень", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   let targetStone = null;
//   for (const stone of stones) {
//     if (stone.name === stoneName){
//       targetStone = stone;
//     }
//   }
//   return targetStone.price * targetStone.quantity;
// }

// console.log(calcTotalPrice(stones, "щебень"))






// _________________________________________________________________________________________________________________




// _________________________________________________________________________________________________________________

// const Transactoin = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// }


// const account = {
//   // текщий баланс
//   balance: 0,

//   // история транзакций
//   transactoins: [],
  
//   // Метод создает и возвращает обьект транзакций,
//   // принимает сумму и тип транзакции
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: account.transactoins.length,
//     };
//   },

// // метод отвечающий за добавление суммы к балансу ,
// // Принимает сумму транзакции ,
// // Вызывает createTransaction для создания обьекта транзакции
// // после чего добавляет его в историю
//   deposit(amount) {
//     account.balance += amount;
//     const transactoin = account.createTransaction(amount, Transactoin.DEPOSIT);
//     account.transactoins.push(transactoin);
//   },



//   withdraw(amount) {
//     if (amount > account.balance) {
//       return "не хвататет средств";
//     };
//     account.balance -= amount;
//     const transactoin = account.createTransaction(amount, Transactoin.WITHDRAW);
//     account.transactoins.push(transactoin);
//   },
  
// // возвращает текущий баланс
//   getBalance() {
//     return account.balance;
//   },

//   // Метод ищет и возвращает обьект по id
//   getTransactionDetails(id) {
//     for (const transactoin of account.transactoins) {
//       if (transactoin.id === id) {
//         return transactoin;
//       }
//     }
//     return "операцию не енайдено";
//   },
  
//   // Метод возвращает кол-во средств
//   // опрееленного типа транзакции из всей истрори транзакций
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transactoin of account.transactoins) {
//       if (transactoin.type === type) {
//         total += transactoin.amount;
//       }
//     }
//     return total;
//   }

// }



// console.log(account.getBalance()) // 0
// account.deposit(230);
// account.deposit(230);
// account.deposit(230);
// account.withdraw(550);
// account.withdraw(10);
// // console.log(account.deposit(230)) // 0

// console.log(account.getBalance()) // 0
// // account.deposit(230);
// // account.withdraw(550);
// // console.log(account.getBalance())
// // console.log(account.transactoins)


// // console.log(account.getTransactionDetails(12))

// console.log(account.getTransactionTotal(Transactoin.DEPOSIT))



// ______________________________________________________________________________________________


// _______________________________________________________________________________________________



// const numbers = [18, 45, 12, 10, 8, 99, 120, 19];

// console.log(Math.min(1, 8, 45, 12));
// console.log(Math.max(...numbers));


// ______________________________________________________________________________________________


// _______________________________________________________________________________________________


// тога похали наишим чтонибудь



// створити ф-цію , яка буде приймати в якості параметрів (масив, ім'я (потрібно замінити в масиві)).

// const names = ['Ivan', 'Olga', 'Olga', 'Ann', 'Olga'];
// function changeName (arr, name, newName) {
//   const aroow = [];
//   for (let i = 0; i < arr.length; i += 1){
//     if (name === arr[i]) {
//       arr[i] = newName;
//       console.log(`Name changed on ${newName}`);
//       continue;
//     } console.log (`this user name ${arr[i]} ...`)
    
//   }
 
// }
// changeName (names, 'Olga', 'Anastasiya')

// _____________________________________________________________________________________
// _____________________________________________________________________________________
// _____________________________________________________________________________________


// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Polyyyy";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"


// _____________________________________________________________________________________
// _____________________________________________________________________________________
