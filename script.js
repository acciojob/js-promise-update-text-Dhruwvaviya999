//your JS code here. If required.

const outputDiv = document.querySelector("#output");

function returnPromise(){
	return new Promise((res, rej) => {
		setTimeout(()=>{
			res("Hello, world!")
		},1000)
	});
};

returnPromise().then((res) => {
	outputDiv.innerText = res;
})