var accMaster = {

	elms: {
		accControl: $('#accessibility'), 
		accScreen: $('#accessibility-screen')
	},

	eventListeners: function() {
		accMaster.elms.accControl.click(function( e ) {
			e.preventDefault();
			accMaster.elms.accScreen.clearQueue().stop().fadeToggle();
            //console.log('accessibility clicked');
            accMaster.elms.accControl.toggleClass('active');
      		$('body').toggleClass('accessibility-mode');
		});

	},

	init: function() { 
		accMaster.eventListeners();
	}
};