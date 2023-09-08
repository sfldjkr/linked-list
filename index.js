// Iron Man (2008)
// The Incredible Hulk (2008)
// Iron Man 2 (2010)
// Thor (2011)
// Captain America: The First Avenger (2011)
// The Avengers (2012)
// Iron Man 3 (2013)
// Thor: The Dark World (2013)
// Captain America: The Winter Soldier (2014)
// Guardians of the Galaxy (2014)
// Avengers: Age of Ultron (2015)
// Ant-Man (2015)
// Captain America: Civil War (2016)
// Doctor Strange (2016)
// Guardians of the Galaxy Vol. 2 (2017)
// Spider-Man: Homecoming (2017)
// Thor: Ragnarok (2017)
// Black Panther (2018)
// Avengers: Infinity War (2018)
// Ant-Man and The Wasp (2018)
// Captain Marvel (2019)
// Avengers: Endgame (2019)

class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let NewNode = new Node(value);
    if (this.head === null) {
      this.head = NewNode;
    } else {
      let Pointer = this.head;
      while (Pointer.next !== null) {
        Pointer = Pointer.next;
      }
      Pointer.next = NewNode;
    }
  }

  prepend(value) {
    let NewNode = new Node(value);
    if (this.head === null) {
      this.head = NewNode;
    } else {
      NewNode.next = this.head;
      this.head = NewNode;
    }
  }

  size() {
    let semiHead = this.head;
    let count = 0;
    while (semiHead !== null) {
      semiHead = semiHead.next;
      count++;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let Pointer = this.head;
    if (Pointer === null) {
      return null;
    }
    while (Pointer.next !== null) {
      Pointer = Pointer.next;
    }
    return Pointer;
  }

  at(index) {
    let Pointer = this.head;
    if (Pointer === null) {
      return null;
    }
    let listSize = this.size();
    if (index === 0 || index > listSize) {
      return `List Does Not ${index} index`;
    }
    for (let i = 1; i < listSize + 1; i++) {
      if (i === index) {
        return Pointer;
      }
      Pointer = Pointer.next;
    }
  }

  pop() {
    let Pointer = this.head;
    if (Pointer === null) {
      console.log("No Elements To Pop");
      return;
    }
    if (this.size() === 1) {
      this.head = null;
      return;
    }
    while (Pointer.next.next !== null) {
      Pointer = Pointer.next;
    }

    Pointer.next = null;
  }

  contains(value) {
    let Pointer = this.head;
    if (Pointer === null) {
      return "List Is Empty";
    }
    while (Pointer.next !== null) {
      if (Pointer.value === value) {
        return true;
      }
      Pointer = Pointer.next;
    }
    return false;
  }

  find(value) {
    let Pointer = this.head;
    if (Pointer === null) {
      return null;
    }
    let index = 1;
    while (Pointer.next !== null) {
      if (Pointer.value === value) {
        return index;
      }
      index++;
      Pointer = Pointer.next;
    }
    if (Pointer.value === value) {
      return index;
    }
    return null;
  }

  toString() {
    // (value) -> (value) -> null
    let FinalString = "";
    let Pointer = this.head;
    if (Pointer === null) {
      FinalString = `Head -> null`;
      return FinalString;
    }
    while (Pointer !== null) {
      FinalString += ` ${Pointer.value} -> `;
      Pointer = Pointer.next;
    }
    FinalString += `null`;
    return FinalString;
  }

  insertAt(index, value) {
    let ListLen = this.size();
    if (ListLen < index || index > ListLen || index === 0) {
      console.log(`There is No ${index} Index In This List`);
      return;
    }
    if (index === 1) {
      this.prepend(value);
    }
    let Pointer = this.head;
    let Prevoius;
    let Iteration = 1;
    while (Iteration !== index) {
      Prevoius = Pointer;
      Pointer = Pointer.next;
      Iteration++;
    }
    let newNode = new Node(value);
    newNode.next = Pointer;

    if (Prevoius !== undefined) {
      Prevoius.next = newNode;
    }
  }

  removeAt(index) {
    let ListLen = this.size();
    if (ListLen === 0 || ListLen < index || index > ListLen || index === 0) {
      console.log(`There is no node at ${index}`);
      return;
    }
    // index node prevoius .next = index.next;
    // index.next == null;
    let Pointer = this.head;
    if (index == 1) {
      this.head = Pointer.next;
      Pointer.next = null;
      return;
    }
    let previous;
    let iterationCount = 1;
    while (index !== iterationCount) {
      previous = Pointer;
      Pointer = Pointer.next;
      iterationCount++;
    }
    console.log(previous);
    console.log(Pointer);
    previous.next = Pointer.next;
    Pointer.next = null;
  }
}

let newList = new LinkedList();
const mcuMovies = [
  "Iron Man",
  "The Incredible Hulk",
  "Iron Man 2",
  "Thor",
  "Captain America: The First Avenger",
  "The Avengers",
  "Iron Man 3",
  "Thor: The Dark World",
  "Captain America: The Winter Soldier",
  "Guardians of the Galaxy",
  "Avengers: Age of Ultron",
  "Ant-Man",
  "Captain America: Civil War",
  "Doctor Strange",
  "Guardians of the Galaxy Vol. 2",
  "Spider-Man: Homecoming",
  "Thor: Ragnarok",
  "Black Panther",
  "Avengers: Infinity War",
  "Ant-Man and The Wasp",
  "Captain Marvel",
  "Avengers: Endgame",
];
mcuMovies.forEach((movie) => {
  newList.append(movie);
});
