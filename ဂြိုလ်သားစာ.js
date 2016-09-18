function alienlan(input){
	var output = input;
	output = output.replace(/(?=[က-အ])်(?=[က-အ])/g,'္');
	output = output.replace(/ဂ/g,'ဃ')
	output = output.replace(/ဇ/g,'ဈ')
	output = output.replace(/တ/g,'ဋ')
	output = output.replace(/ထ/g,'ဌ')
	output = output.replace(/ဒ/g,'ဍ')
	output = output.replace(/န/g,'ဏ')
	output = output.replace(/ယ/g,'ရ')
	output = output.replace(/လ/g,'ဠ')
	// console.log(output);
	return output;
}
function aliendecode(input) {
	var output = input;
	output = output.replace(/(?=[က-အ])္(?=[က-အ])/g,'်');
	output = output.replace(/ဃ/g,'ဂ')
	output = output.replace(/ဈ/g,'ဇ')
	output = output.replace(/ဋ/g,'တ')
	output = output.replace(/ဌ/g,'ထ')
	output = output.replace(/ဍ/g,'ဒ')
	output = output.replace(/ဏ/g,'န')
	output = output.replace(/ရ/g,'ယ')
	output = output.replace(/ဠ/g,'လ')
	// console.log(output);
	return output;
}