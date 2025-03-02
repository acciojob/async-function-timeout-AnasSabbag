//your JS code here. If required.
document.getElementById("btn").addEventListener("click",function () {
  let tex = document.getElementById("text").value;
	let delay = document.getElementById("delay").value;
  let prom = new Promise ((resolve)=>{
    setTimeout(()=>{
      document.getElementById("output").innerHTML=`<p>${tex}-${delay}</p>`
      resolve("ok");
    },delay*1000);
  })

	async function delayFunction(){
		 await prom;
    
	}
	
	
   delayFunction();
  document.getElementById("text").value="";
  document.getElementById("delay").value="";
	
})

