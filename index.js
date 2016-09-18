var myanmar = document.getElementById('myanmar');
var alian = document.getElementById('alienlan');

myanmar.placeholder = "မြန်မာစာရိုက်ပါ။";
alian.placeholder = "ဂြိုလ်သားစာရိုက်ပါ။"

myanmar.onkeyup = function(){
	// alian.text = 'aung';
	alian.value = alienlan(this.value);
	// console.log(alienlan(this.value));
}

alian.onkeyup = function(){
	myanmar.value = aliendecode(this.value);
}