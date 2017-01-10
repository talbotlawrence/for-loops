for (var i = 5; i < 120; i+=10) {
	console.log("Current value is " + i);
}

for (var i = 4096; i >= 1; i/=2) {
	console.log("Current value is " + i);
}

var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe"]
for (var i = 0; i < presidents.length; i++) {
	var j = i + 1;
	//why doesn't var j += i; work?
	console.log("President #" + j + " was " + presidents[i]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var key in antSpecies) {
	console.log(key);
}