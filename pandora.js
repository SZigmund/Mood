var STARTUP = {
  initpage: function(){
	try {
		//document.querySelector("#username").="admin";
		console.log(document.querySelector("#username"));
	}
	catch (err) { console.log("initpage: " + err.message); }
  },

};
STARTUP.initpage();
