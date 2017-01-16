1.1 - Number
1.2 - String
1.3 - Boolean
1.4 - Array
1.5 - Naughty Brackets (Hash)
1.6 - Number
1.7 - Variable

2.1 - True
2.2 - True
2.3 - True
2.4 - False
2.5 - False
2.6 - False
2.7 - False
2.8 - False
2.9 - True

3.1 - var num1 = 42
3.2 - var myString = "Do we get extra points if we say you're the best?"
3.3 - var myBoolean = (1===1)
3.4 - var object = {}

4.1
var consoleOutput(boolean){
  if(boolean){
    console.log("Hello");
  } else {
    console.log("Bye");
  }
};

5.1 - var firstAnimal = animals[0];
5.2 - var lastAnimal = animals[-1];
5.3 - var animalLength = animals.length;
5.4 - animals.push("Logan")
5.5 - animals.unshift("Lewis")
5.6 - 

6.1 - var vegetables = ["Potato", "Leek", "Carrot", "Parsnip", "Turnip"]
6.2 - 
counter = 0;

while(counter < vegetables.length){
  console.log(vegetables[counter]);
  counter ++;
}

for( i = 0; i < counter; i++){
  console.log(vegetables[counter]);
}

for( var veg of vegetables ){
  console.log(veg);
};

7.1 - 
total = 0;
for(var account of accounts){
  total += account.amount;
};

7.2 -
var account = accounts[0];

for(var personAccount of accounts){
  if(personAccount.amount > account.amount){
    personAccount = account;
  }
  return account;
}

7.3 - 
var account = accounts[0];

for(var personAccount of accounts){
  if(personAccount.amount < account.amount){
    personAccount = account;
  }
  return account.name;
}