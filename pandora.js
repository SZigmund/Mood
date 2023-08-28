var STARTUP = {
  initpage: function(){
	try {
		document.querySelector("#username").value="admin";
		console.log(document.querySelector("#username")).value;
	}
	catch (err) { console.log("initpage: " + err.message); }
  },

};
STARTUP.initpage();
