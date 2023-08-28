var STARTUP = {
  initpage: function(){
	try {
		document.querySelector("#username")="admin";
	}
	catch (err) { console.log("initpage: " + err.message); }
  },

};
STARTUP.initpage();
