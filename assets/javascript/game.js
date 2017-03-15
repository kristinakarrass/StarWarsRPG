$(document).ready(function() {

// var healthPoints = {ObiWan: 120, LukeSkywalker: 100, CountDooku: 150, DarthMaul: 180};
// var counterAttackPoints = {ObiWan: 8; LukeSkywalker: 5; CountDooku: 15; DarthMaul: 25};
// var AttackPower = {ObiWan: 8, LukeSkywalker: 5, CountDooku: 15, DarthMaul: 25};

var characters = [ 	obiWan = {name: "Obi Wan", healthPoints: 120, counterAttackPoints: 8, AttackPower: 8, image: src="assets/images/obiwan.jpg"},
					lukeSkywalker = {name: "Luke Skywalker", healthPoints: 100, counterAttackPoints: 5, AttackPower: 5, image: src="../images/lukeskywalker.jpg"},
					countDooku = {name: "Count Dooku", healthPoints: 150, counterAttackPoints: 15, AttackPower: 15, image: src="assets/images/countdooku.jpg"},
					darthMaul = {name: "Darth Maul", healthPoints: 180, counterAttackPoints: 25, AttackPower: 25, image: src="assets/images/darthmaul.jpg"}
				];

// $(".players").append('<img src= "assets/images/obiwan.jpg" />');
// $(".players").append('<img src= "assets/images/lukeskywalker.jpg" />');
// $(".players").append('<img src= "assets/images/countdooku.jpg" />');
// $(".players").append('<img src= "assets/images/darthmaul.jpg" />');










for (var i = 0; i < characters.length; i++) {
	console.log(characters[i].name);
	var characterButton = $("<button>");
	var image = characters[i].image;
	var name = characters[i].name;
	characterButton.addClass("character-button character character-button-color");
	characterButton.attr("data-character", characters[i].name);
	characterButton.text(name + image + characters[i].healthPoints + "Health Points");
	$(".players").append(characterButton);
	console.log(characterButton);
}





















});