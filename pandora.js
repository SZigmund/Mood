var STARTUP = {
  initpage: function(){
	try {
		document.querySelector("#username").value="admin";
		document.querySelector("#password").value="1311931";
	}
	catch (err) { console.log("initpage: " + err.message); }
  },

};
STARTUP.initpage();
