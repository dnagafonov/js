let arr = [1,4,54,2,3,5,92,2,5];

const above = (a,b) =>  a > b;
const less  = (a,b) => a < b;

const BubbleSort = (arr,p) => {
	for (let i = 0; i != arr.length - 1; ++i) {
		for(let j = 0; j != arr.length - 1; ++j) {
			if(p(arr[j],arr[j+1]) > 0){
				[arr[j],arr[j+1]] = [arr[j+1],arr[j]];
			}
		}
	}
	return arr;
}
//BubbleSort(arr,(a,b) => b - a)
console.log(arr);

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

const InsertionSort = (arr1Sort, first, last) => {
	let arr = [...arr1Sort];
	for(;first < last -1 ; ++first){
		let min = MinEl(arr,first+1, last, less);
		[arr[first],arr[min]] = [arr[min],arr[first]]
	}
	return arr;
}

console.log(InsertionSort(arr,0,5));
/*
let arr1 = [1,22,55,66,77,88,3,2,3];
console.log(arr1.sort((a,b) => b - a));*/