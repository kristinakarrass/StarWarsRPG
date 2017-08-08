$(document).ready(function() {

var attacker = 0;
var characters = [ 	obiWan = {name: "Obi Wan", healthPoints: 120, counterAttackPoints: 8, AttackPower: 8, image: src="assets/images/obiwan.jpg"},
					lukeSkywalker = {name: "Luke Skywalker", healthPoints: 100, counterAttackPoints: 5, AttackPower: 5, image: src="assets/images/lukeskywalker.jpg"},
					countDooku = {name: "Count Dooku", healthPoints: 150, counterAttackPoints: 15, AttackPower: 15, image: src="assets/images/countdooku.jpg"},
					darthMaul = {name: "Darth Maul", healthPoints: 180, counterAttackPoints: 25, AttackPower: 25, image: src="assets/images/darthmaul.jpg"}
				];



for (var i = 0; i < characters.length; i++) {
	var characterButton = $("<div class='character'>");
	var image = characters[i].image;
	var name = characters[i].name;
	characterButton.addClass("status", "dormant");
	characterButton.attr("data-character", i);
	// characterButton.text(name + image + characters[i].healthPoints + " Health Points");
	characterButton.append(name);
	characterButton.append("<img src ='" + image + "'>");
	characterButton.append("<p>" + characters[i].healthPoints + " Health Points");
	$(".players").append(characterButton);
};//closes character creation function

$(".character").click(function() {
	attacker = $(this).data("data-character");
	console.log(attacker);
// 	for (var i = 0; i < 3; i++) {


// 	$(".opponents").append(this.characterButton);
// }
})



$(".attack").click(function() {


})
















});