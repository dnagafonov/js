let arr = [1,4,54,2,3,5,92,2,5];

const greater = (a,b) =>  a > b;
const less  = (a,b) => a < b;

const MinEl = (arr,first,last,p) => {
	min_el = arr[first];
	min_ind = 0;
	for(; first < last; ++first){
		if(p(arr[first],min_el)){
			min_el = arr[first];
			min_ind = first;
		}
	}
	return min_el;
}

console.log(MinEl(arr,0,8,less));