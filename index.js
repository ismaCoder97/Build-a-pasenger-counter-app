const incrementBtn=document.getElementById("increment-btn");
const saveBtn=document.getElementById("save-btn");
let countEl=document.getElementById("count-el");
let count = 0;

incrementBtn.addEventListener("click",increment);
saveBtn.addEventListener("click",save);


function increment() {
    	count++;
    //console.log(count)
	countEl.innerText=count;
}

let saveEl=document.getElementById("save-el");

function save(){
	let info=" "+count+" - ";
	saveEl.innerHTML+=info;

	count= -1;
	increment(); 
}

