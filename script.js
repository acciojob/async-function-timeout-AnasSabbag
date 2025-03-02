
document.addEventListener("DOMContentLoaded",function() {
	
	let output= document.getElementById("output");

  function delayMssg(dl) {
		return new Promise((resolve)=>{
			setTimeout(()=>{resolve()},dl*1000)
    })
	}

	async function delayMessage(){

    let text= document.getElementById("text").value;
	  let delay= document.getElementById("delay").value;
    document.getElementById("text").value="";
	  document.getElementById("delay").value="";
    if(text =="" || isNaN(delay) || delay<0){
			return;
		}
    
		await delayMssg(delay);
    
		output.textContent =text;
		
	}
	
	document.getElementById("btn").addEventListener("click",delayMessage)
	
	
})