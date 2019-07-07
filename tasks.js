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

var с = 10.1929999;
function t1_2 (c,k) {
  let c1 = Number(String(с).split('.')[1] || 0);
  let c2 = c1.toString().split('');
  let counter = 0;
  for (var i = 0; i != k; i++) {
  	if(Number(c2[i]) == 9){
  		counter++;
  	}
  }
  return counter;
}
console.log(t1_2(с,4));

var с = 10.12999;
function t2_2 (c,k) {
  let c1 = Number(String(с).split('.')[1] || 0);
  let c2 = c1.toString().split('');
  let temp = 0;
  for (var i = 0; i != k; i++) {
  		temp += Number(c2[i]);
  }
  return temp;
}
console.log(t2_2(с,3));

function t2_2 (c,k,n) {
  let c1 = Number(String(с).split('.')[1] || 0);
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
//console.log(t2_2(с,3,3));


