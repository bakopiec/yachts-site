angular.module('yachtsSite').controller('homeCtrl', function() {
	this.init = function() {
		$(document).ready(function() {
			$('.carousel').carousel({
				interval: 5000
			})
		});   
	}
	this.init();
});
