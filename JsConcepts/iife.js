// IIFE(Immediately invoked functions): Anonymous function expression which can be executed as soon as it is declared.
(function hello() {
	console.log("Hey there!");
})();

//IIFE often used to group related functionality into a single object/module.
let motionModule = (function (params) {
	return {
		slideMixin: function (obj) {
			obj.slide = function () {
				console.log("slide");
			};
		},
		flyMixin: function (obj) {
			obj.fly = function () {
				console.log("fly");
			};
		},
	};
})();
