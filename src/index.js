
exports.min = function min (array) {
  if (array===undefined) {
		return 0;}
	if  (array.length==0){
		console.log('here')
		return 0;}
	var k=array[0];
	for(var i=0;i<array.length;i++){
		if(k>array[i]){
			k=array[i];
		}
	}
	return k
}

exports.max = function max (array) {
  if (array===undefined) {
		return 0;}
	if  (array.length==0){
		console.log('here')
		return 0;}
	var k=array[0];
	for(var i=0;i<array.length;i++){
		if(k<array[i]){
			k=array[i];
		}
	}
	return k
}

exports.avg = function avg (array) {
  if (array===undefined) {
		return 0;}
	if  (array.length==0){
		console.log('here')
		return 0;}
	var k=0;
	for(var i=0;i<array.length;i++){
		
			k += array[i];
		
	}
	return k/array.length;
}
