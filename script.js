/* fetch("https://reqres.in/api/users", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		name: "User 1",
	}),
})
	.then((res) => {
		return res.json();
	})
	.then((data) => console.log(data))
	.catch((error) => console.log("Error"));
 */

/////////////////////////////////////////////

//FETCH API

const post = [
	{
		title: "rreli",
		body: "bar",
		username: "kondi",
		userId: 1,
	},
	{
		title: "aurrel",
		body: "bar",
		username: "rreli",
		userId: 2,
	},
	{
		title: "emi",
		body: "bar",
		username: "rreli",
		userId: 3,
	},
];

fetch("https://jsonplaceholder.typicode.com/posts", {
	method: "POST",
	body: JSON.stringify(post),
	headers: {
		"Content-type": "application/json; charset=UTF-8",
	},
})
	.then((res) => {
		/* if (res.ok) {
			console.log(res.status, res.ok);
			return res.json();
		} */
		return res.json();
	})
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

///////////////////////////////////////////////////////////

//PROMISES

let p = new Promise((resolve, reject) => {
	let a = 1 + 2;
	if (a == 2) {
		resolve("Success");
	} else {
		reject("Failed");
	}
});

p.then((message) => {
	console.log("This is in the then " + message);
}).catch((message) => {
	console.log("This is in the catch " + message);
});

////////////////////////////////////////

const userLeft = true;
const userWatchingCatMeme = false;

function watchTutorialPromise() {
	return new Promise((resolve, reject) => {
		if (userLeft) {
			reject({
				name: "User left",
				message: ":(",
			});
		} else if (userWatchingCatMeme) {
			reject({
				name: "User Watching Cat Meme",
				message: "WEBDEV < CAT",
			});
		} else {
			resolve("Thumbs up and SUBSCRIBE");
		}
	});
}

watchTutorialPromise()
	.then((message) => {
		console.log("Success: " + message);
	})
	.catch((error) => {
		console.log(error.name + " " + error.message);
	});

///////////////////////////////////////////////////

const recordVideoOne = new Promise((resolve, reject) => {
	resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
	resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
	resolve("Video 3 Recorded");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
	(message) => {
		console.log(message);
	}
);
let Video1 = 1;
