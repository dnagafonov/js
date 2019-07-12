var m = 123321;
function t3 (m) {
  return m == m.toString().split('').reverse().join('');
}
console.log(t3(m));

var v = 123321;
function t9 (v,k) {
	let v1 = Number(v.toString().split(''));
	let temp1 = 0;
	let temp2 = 0;
	for (var j = 0; j != k; j++) {
		temp2 += Number(v1[j]);
		for (var i = 0; i != k - 1; i++) {
			temp1 += v%10;
		}
	}
  return temp2 === temp1;
}
console.log(t9(v,3));

var c = 12.1299999;
function t1_2 (c,k) {
  let c1 = Number(String(c).split('.')[1] || 0);
  let c2 = c1.toString().split('');
  let counter = 0;
  for (var i = 0; i != k; i++) {
  	if(Number(c2[i]) == 9){
  		counter++;
  	}
  }
  return counter;
}
console.log(t1_2(c,4));

function t2_2 (c,k) {
  let c1 = Number(String(c).split('.')[1] || 0);
  let c2 = c1.toString().split('');
  let temp = 0;
  for (var i = 0; i != k; i++) {
  		temp += Number(c2[i]);
  }
  return temp;
}
console.log(t2_2(c,3));

function t3_2 (c,k,n) {
  let c1 = Number(String(c).split('.')[1] || 0);
  let c2 = c1.toString().split('');
  let temp1 = 0;
  let temp2 = 0;
  for (var i = 0; i != k; i++) {
  		temp1 += Number(c2[i]);
  }
  for (var i = k; i != k+n; i++) {
  		temp2 += Number(c2[i]);
  }  
  return temp1 == temp2;
}
console.log(t3_2(c,3,3));

function t4_2 (c,k,n) {
  let c1 = Number(String(c).split('.')[1] || 0);
  let c2 = c1.toString().split('');
  let temp2 = 0;
  for (var i = k; i != k+n; i++) {
  		temp2 += Number(c2[i]);
  }  
  return c2[k] == temp2;
}
console.log(t4_2(c,2,1));

function t5_2 (c,k,n) {
  let c1 = Number(String(c).split('.')[1] || 0);
  let c2 = c1.toString().split('');
  let temp2 = 0;
  for (var i = 0; i != n; i++) {
  		temp2 += Number(c2[i]);
  }  
  return c2[k] == temp2;
}
console.log(t5_2(c,3,2));

function t6_2 (c,k,n) {
  let c1 = Number(String(c).split('.')[1] || 0);
  let c2 = c1.toString().split('');
  let temp2 = 0;
  for (var i = n+1; i != n+k+1; i++) {
  		temp2 += Number(c2[i]);
  }
  return temp2;
}
console.log(t6_2(c,2,1));

function t7_2 (c,k) {
  let c1 = Number(String(c).split('.')[1] || 0);
  let c2 = c1.toString().split('');
  let temp1 = 0;
  let temp2 = 0;
  for (var i = 0; i != k; i++) {
  		temp2 += Number(c2[i]);
  }  
  String(Math.trunc(c)).split('').map(function(i){temp1 += Number(i);})
  return temp1 == temp2;
}
console.log(t7_2(c,2));


var n = 123456789
function t1_1 (n){
	let temp = 0;
	n.toString().split('');
		for(let i = 0; i != n.length; ++i){
			for(let j = i+1; i != n.length; ++j){
				if(Number(n[i]) === Number(n[j])){
					temp++;
				}
			}
		}
	if(temp == 1){
		return true;		
	}
	return false;
}
console.log(t1_1(n));

function t2_1 (n){
	let temp = 0;
	n.toString().split('');
		for(let i = 0; i != n.length; ++i){
			for(let j = i+1; i != n.length; ++j){
				if(Number(n[i]) === Number(n[j])){
					temp++;
				}
			}
		}
	if(temp == 2){
		return true;		
	}
	return false;
}
console.log(t2_1(n));

function polindrome (n) {
  return n == n.toString().split('').reverse().join('');
}
console.log(polindrome(n));

function t4_1 (n){
	let temp = 0;
	n.toString().split('');
	for(var i = 0; i!=n.length; ++i){ 
		for(var j = i+1; j!=n.length; ++j){ 
			if(Number(n[i]) === Number(n[j])){ 
				return false; 
			} 
		} 
	}
	return true;
}
console.log(t4_1(n));

function t5_1 (n,k){
	let temp = 0;
	n.toString().split('');
		for(let i = 0; i != n.length; ++i){
			for(let j = i+1; i != n.length; ++j){
				if(Number(n[i]) === Number(n[j])){
					temp++;
				}
			}
		}
	if(temp == k){
		return true;		
	}
	return false;
}
console.log(t5_1(n,2));
