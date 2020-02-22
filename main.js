"use strict";

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
  
  ///////////////////////////
  //
  // Establish our Class templates
  //
  class player {
    constructor(person,canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.person = [person],
        this.canThrowBall = canThrowBall,
        this.canDodgeBall = canDodgeBall,
        this.hasPaid = hasPaid,
        this.isHealthy = isHealthy,
        this.yearsExperience = yearsExperience,
        this.players = []
    }
    addPlayer(player) {
        this.players.push(player);
    }
  }

  class blueTeammate extends player {
    constructor(color,mascot){
        super()
        this.color=color,
        this.mascot = mascot,
        this.members = []
    }
    joinTeam(member) {
        this.members.push(member);
    }
  }

  class redTeammate extends player {
    constructor(color,mascot){
        super()
        this.color=color,
        this.mascot = mascot,
        this.members = []
    }
    joinTeam(member) {
        this.members.push(member);
    }
  }
  
  /////////////////////////
  //
  // global variables
  //
  let newBlueTeamMates = new blueTeammate("blue","aardvark");
  let newRedTeamMates = new redTeammate("red","horse");
  const listOfPlayers = [];
  const blueTeam = [];
  const redTeam = [];
  
  ////////////////////////////
  //
  //  DOM Output functions
  //
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    listElement.innerHTML="";

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
  
  function listPlayers(){
    const listElement = document.getElementById('players')
    listElement.innerHTML="";

    listOfPlayers.map(person => {
      const player = person.person[0];
      const li = document.createElement("li")
      const bluebutton = document.createElement("button")
      bluebutton.innerHTML = "Join Blue Team"
      bluebutton.addEventListener('click', function() {joinBlue(player);updateDOM();} )
      li.appendChild(bluebutton)
      const redbutton = document.createElement("button")
      redbutton.innerHTML = "Join Red Team"
      redbutton.addEventListener('click', function() {joinRed(player);updateDOM()} )
      li.appendChild(redbutton)
      li.appendChild(document.createTextNode(player.name + " - " + player.skillSet))
      listElement.append(li)
    })
  }

  const listTeams = () => {
    let listElement = document.getElementById('blue')
    listElement.innerHTML="";

    blueTeam.map(person => {
      const li = document.createElement("li")
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
    listElement = document.getElementById('red')
    listElement.innerHTML="";

    redTeam.map(person => {
      const li = document.createElement("li")
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }

  // this function updates the DOM every time a change is made so that 
  // the change can't be made again by accident
  
  const updateDOM = () => {
      listPeopleChoices();
      listPlayers();
      listTeams();
  }

  //////////////////////////////////
  //
  // Player/Team Management
  //

  // they've already been used, so make them unavailable now
  function removeFromPlayersList(player) {
      let id = player.id;
      console.log(id);
    for (let i = 0; i<listOfPlayers.length;i++){
        
        if (listOfPlayers[i].person[0].id ===id) {
            listOfPlayers.splice(i,1);
        }
    }
  }

  // the player has joined a team
  function joinBlue(player) {
      blueTeam.push(player);
      newBlueTeamMates.joinTeam(player);
      removeFromPlayersList(player);
  }

  function joinRed(player) {
    redTeam.push(player);
    newRedTeamMates.joinTeam(player);
    removeFromPlayersList(player);
}

  // So you wanna play Dodgeball, eh?
  const updateNewPlayer = (currentPerson) => {
    let newPlayer = new player(currentPerson,true,true,true,true,8);
    listOfPlayers.push(newPlayer);
    newPlayer.addPlayer(currentPerson);
  }
  
  const makePlayer = (id) => {
    let currentPerson;
    for (let i = 0;i < arrOfPeople.length;i++){
        if (arrOfPeople[i].id===id){
            currentPerson = arrOfPeople[i];
            arrOfPeople.splice(i,1);
        }
    }
    updateNewPlayer(currentPerson);
    updateDOM();
  }

  // Tests
if (typeof describe === "function") {
		describe("updateNewPlayer(currentPerson)", () => {
		it("should make a character into a player", () => {
			updateNewPlayer("Davey Jones");
	});
    });
    describe("joinRed(player)", () => {
		it("should be able to join red team", () => {
            joinRed('Rascal Fats');
		});
  });
  describe("joinBlue(player)", () => {
		it("should be able to join blue team", () => {
            joinRed('Leeeeeeeeeeeeeeeeroy Jenkinnnnnnnnnnnns');
		});
	});
}

///