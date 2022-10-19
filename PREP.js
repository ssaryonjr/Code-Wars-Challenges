//PREP
//Parameters(): Things that are passed into the function im building
//Return(): What is expected to be the answer/returned output. 
//Example(): Test cases, setting up the problem.
//Psuedo Code(): Break down and type out your steps of how you will go into solving the problem. 

//Fizz Buzz:

//Take a number, from 1 to number. Number divisble by 3, print fizz, div by 5, print buzz, 3 &5 fizz buzz.


//P: Always number, whole, positive+, ask for any other gotcha's that might come up.
//R: Console each number.
//E: Give an example before solving the problem. Create at least 3 test cases.

function fizzBuzz(num){
    //Loop
    //Conditionals, % 3&5, %3, %5;
    //Console.log num or fizz, buzzz, or fizzBuzz
  }
  
  fizzBuzz(5); //1,2,fizz,4,buzz
  fizzBuzz(3); //1,2,fizz
  fizzBuzz(15); //1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fiz,13,14,fizzBuzz
  
  //Linked List

  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }

    
    push(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++; //Increase length by 2.
      return this; //Means return the entire linkedlist
    }
  }

