// Create an object for each game character
var ned = {
	"hp": 120,
	"attack": 8,
	"counterAttack": 15,
	"name": "Eddard Stark",
	"image": "<img class='character-img' src='assets/images/ned.jpg'>",
	"defeated": false
};

var robert = {
	"hp": 100,
	"attack": 6,
	"counterAttack": 12,
	"name": "Robert Baratheon",
	"image": "<img class='character-img' src='assets/images/robert.jpg'>",
	"defeated": false
};

var jon = {
	"hp": 150,
	"attack": 10,
	"counterAttack": 10,
	"name": "Jon Snow",
	"image": "<img class='character-img' src='assets/images/jon.jpg'>",
	"defeated": false
};

var hound = {
	"hp": 130,
	"attack": 9,
	"counterAttack": 20,
	"name": "Sandor Clegane",
	"image": "<img class='character-img' src='assets/images/hound.jpg'>",
	"defeated": false
};

// Adding character boxes to the page (could have just used HTML instead of JS)
$("#ned").append($("<p>").addClass("character-name").html(ned.name));
$("#ned").append(ned.image);
$("#ned").append($("<p>").addClass("ned-hp").html("HP: " + ned.hp));

$("#robert").append($("<p>").addClass("character-name").html(robert.name));
$("#robert").append(robert.image);
$("#robert").append($("<p>").addClass("robert-hp").html("HP: " + robert.hp));

$("#jon").append($("<p>").addClass("character-name").html(jon.name));
$("#jon").append(jon.image);
$("#jon").append($("<p>").addClass("jon-hp").html("HP: " + jon.hp));

$("#hound").append($("<p>").addClass("character-name").html(hound.name));
$("#hound").append(hound.image);
$("#hound").append($("<p>").addClass("hound-hp").html("HP: " + hound.hp));

// Global variables
var choosingCharacter = true;
var choosingEnemy = false;
var fighting = false;
var yourCharacter;
var yourEnemy;

//When Eddard Stark is clicked,
$("#ned").on("click", function() {
	// If you are choosing your character,
	if (choosingCharacter === true) {
		// Put Eddard Stark in Your Character slot and other characters in Enemies slot
		$("#your-character").append($("#character-selection>#ned"));
		$("#enemy-selection").append($("#character-selection>#robert"));
		$("#enemy-selection").append($("#character-selection>#jon"));
		$("#enemy-selection").append($("#character-selection>#hound"));
		choosingCharacter = false;
		choosingEnemy = true;
		yourCharacter = ned.name;
	}
	// If you are choosing an enemy,
	if (choosingEnemy === true) {
		// If yourCharacter is Eddard Stark
		if (yourCharacter === ned.name) {
			//Do nothing
		}
		// If your Character is not Eddard Stark
		else {
			// Add Eddard Stark to Defender slot
			$("#defender").append($("#enemy-selection>#ned"));
			choosingEnemy = false;
			fighting = true;
			yourEnemy = ned.name;
		}
	}
});

//When Robert Baratheon is clicked,
$("#robert").on("click", function() {
	// If you are choosing your character,
	if (choosingCharacter === true) {
		// Put Robert Baratheon in Your Character slot and other characters in Enemies slot
		$("#your-character").append($("#character-selection>#robert"));
		$("#enemy-selection").append($("#character-selection>#ned"));
		$("#enemy-selection").append($("#character-selection>#jon"));
		$("#enemy-selection").append($("#character-selection>#hound"));
		choosingCharacter = false;
		choosingEnemy = true;
		yourCharacter = robert.name;
	}
	// If you are choosing an enemy,
	if (choosingEnemy === true) {
		// If yourCharacter is Robert Baratheon
		if (yourCharacter === robert.name) {
			//Do nothing
		}
		// If your Character is not Robert Baratheon
		else {
			// Add Robert Baratheon to Defender slot
			$("#defender").append($("#enemy-selection>#robert"));
			choosingEnemy = false;
			fighting = true;
			yourEnemy = robert.name;
		}
	}
});

//When Jon Snow is clicked,
$("#jon").on("click", function() {
	// If you are choosing your character,
	if (choosingCharacter === true) {
		// Put Jon Snow in Your Character slot and other characters in Enemies slot
		$("#your-character").append($("#character-selection>#jon"));
		$("#enemy-selection").append($("#character-selection>#ned"));
		$("#enemy-selection").append($("#character-selection>#robert"));
		$("#enemy-selection").append($("#character-selection>#hound"));
		choosingCharacter = false;
		choosingEnemy = true;
		yourCharacter = jon.name;
	}
	// If you are choosing an enemy,
	if (choosingEnemy === true) {
		// If yourCharacter is Jon Snow
		if (yourCharacter === jon.name) {
			//Do nothing
		}
		// If your Character is not Jon Snow
		else {
			// Add Jon Snow to Defender slot
			$("#defender").append($("#enemy-selection>#jon"));
			choosingEnemy = false;
			fighting = true;
			yourEnemy = jon.name;
		}
	}
});

//When Sandor Clegane is clicked,
$("#hound").on("click", function() {
	// If you are choosing your character,
	if (choosingCharacter === true) {
		// Put Sandor Clegane in Your Character slot and other characters in Enemies slot
		$("#your-character").append($("#character-selection>#hound"));
		$("#enemy-selection").append($("#character-selection>#ned"));
		$("#enemy-selection").append($("#character-selection>#robert"));
		$("#enemy-selection").append($("#character-selection>#jon"));
		choosingCharacter = false;
		choosingEnemy = true;
		yourCharacter = hound.name;
	}
	// If you are choosing an enemy,
	if (choosingEnemy === true) {
		// If yourCharacter is Sandor Clegane
		if (yourCharacter === hound.name) {
			//Do nothing
		}
		// If your Character is not Sandor Clegane
		else {
			// Add Sandor Clegane to Defender slot
			$("#defender").append($("#enemy-selection>#hound"));
			choosingEnemy = false;
			fighting = true;
			yourEnemy = hound.name;
		}
	}
});

// Fight function (gets called on button click)
function fight(att, def) {
	def.hp -= att.attack;
	att.attack += 5;
	$("#results").html(att.name + " attacked " + def.name + " for " + att.attack + " damage.");
	if (def.hp <= 0) {
		fighting = false;
		choosingEnemy = true;
		def.defeated = true;
		$("#results").append($("<p>").html(def.name + " has been defeated!"));
	}
	else {
	att.hp -= def.counterAttack;
	$("#results").append($("<p>").html(def.name + " attacked " + att.name + " for " + def.counterAttack + " damage."));
	}
	if (att.hp <=0) {
		fighting = false;
		att.defeated = true;
		$("#results").append($("<p>").html("You have been defeated!"));
	}
	if (ned.defeated === true) {
		$("#ned").css("display", "none");
	}
	if (robert.defeated === true) {
		$("#robert").css("display", "none");
	}

	if (jon.defeated === true) {
		$("#jon").css("display", "none");
	}

	if (hound.defeated === true) {
		$("#hound").css("display", "none");
	}
}


// When fight button is clicked
$("#fight").on("click", function() {
	if (yourCharacter === ned.name && yourEnemy === robert.name) {
		fight(ned, robert);
		$(".ned-hp").html(ned.hp);
		$(".robert-hp").html(robert.hp);
	}
	if (yourCharacter === ned.name && yourEnemy === jon.name) {
		fight(ned, jon);
		$(".ned-hp").html(ned.hp);
		$(".jon-hp").html(jon.hp);
	}
	if (yourCharacter === ned.name && yourEnemy === hound.name) {
		fight(ned, hound);
		$(".ned-hp").html(ned.hp);
		$(".hound-hp").html(hound.hp);
	}
	if (yourCharacter === robert.name && yourEnemy === ned.name) {
		fight(robert, ned);
		$(".robert-hp").html(robert.hp);
		$(".ned-hp").html(ned.hp);
	}
	if (yourCharacter === robert.name && yourEnemy === jon.name) {
		fight(robert, jon);
		$(".robert-hp").html(robert.hp);
		$(".jon-hp").html(jon.hp);
	}
	if (yourCharacter === robert.name && yourEnemy === hound.name) {
		fight(robert, hound);
		$(".robert-hp").html(robert.hp);
		$(".hound-hp").html(hound.hp);
	}
	if (yourCharacter === jon.name && yourEnemy === ned.name) {
		fight(jon, ned);
		$(".ned-hp").html(ned.hp);
		$(".jon-hp").html(jon.hp);
	}
	if (yourCharacter === jon.name && yourEnemy === robert.name) {
		fight(jon, robert);
		$(".robert-hp").html(robert.hp);
		$(".jon-hp").html(jon.hp);
	}
	if (yourCharacter === jon.name && yourEnemy === hound.name) {
		fight(jon, hound);
		$(".jon-hp").html(jon.hp);
		$(".hound-hp").html(hound.hp);
	}
	if (yourCharacter === hound.name && yourEnemy === ned.name) {
		fight(hound, ned);
		$(".hound-hp").html(hound.hp);
		$(".ned-hp").html(ned.hp);
	}
	if (yourCharacter === hound.name && yourEnemy === robert.name) {
		fight(hound, robert);
		$(".hound-hp").html(hound.hp);
		$(".robert-hp").html(robert.hp);
	}
	if (yourCharacter === hound.name && yourEnemy === jon.name) {
		fight(hound, jon);
		$(".hound-hp").html(hound.hp);
		$(".jon-hp").html(jon.hp);
	}
});


