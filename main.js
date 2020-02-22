"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


// setup the starter list of players
const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  

  ////////////////////////////////
  //
  // establish global variables
  //
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []

  /////////////////////////////
  //
  // initialize the classes

  class player {
    constructor(){}
  }
  class blueTeammate {
    constructor(){}
  }
  class redTeammate {
    constructor(){}
  }
  
  // list all the available players
  const listPeopleChoices = () => {
    // get the list element
    const listElement = document.getElementById('people');
    // clear out the contents
    listElement.innerHTML = "";
    // map the array to create a new list and add to the list element
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  // respond to "make player" button click
  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
  }

  // Tests
if (typeof describe === "function") {
	describe("Game", () => {
		it("should have a board", () => {
			assert.equal(game.board.constructor.name, "Board");
		});
		it("board should have 24 checkers", () => {
			assert.equal(game.board.checkers.length, 24);
		});
	});

	describe("makePlayer()", () => {
		it("should make a character into a player", () => {
			makePlayer(6);
			
        });
    });
    describe("listPeopleChoices()", () => {
		it("should list all the available players", () => {
            listPeopleChoices();
		});
	});
}

///