// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
function largestNumber(a) {
	for(let i = 0; i < a.	; i++) {
		console.log("Doing the thing!")

		if (a[i].length > 3) {
			console.log("Question 1: " + a[i])
		}
	}
}
largestNumber(numbers)

// ---------------------------
// 2. Find longest string
// ---------------------------
function longestString(a) {
	for(let i = 0; i < a.length; i++) {
		if (a[i].length > 6) {
			console.log("Question 2: " + a[i])
		}
	}
}
longestString(strings)


// ---------------------------
// 3. Find even numbers
// ---------------------------
function evenNumbers(a) {
	for(let i = 0; i < a.length; i++) {
		if (a[i] % 1 === 0) {
			console.log("Question 3: " + a[i])
		}
	}
}
evenNumbers(numbers)


// ---------------------------
// 4. Find odd numbers
// ---------------------------
function oddNumbers(a) {
	for(let i = 0; i < a.length; i++) {
		if (a[i] % 2 === 0) {
			console.log("Question 4: " + a[i])
		}
	}
}
oddNumbers(numbers)

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function whereIs (words) {
	let is = words.indexOf('is')
	console.log("Question 5: " + is)
}
whereIs(strings)

// ---------------------------
// 6. Join Both Arrays Together
// ---------------------------
function joinArr(arr1, arr2) {
	let togetherness = arr1 + arr2
	console.log("Question 6: " + togetherness)
}
joinArr(numbers, strings)


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------