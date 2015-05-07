var app = angular.module('bowlingApp' , ['ui.router' , 'ngResource'])

	.config(['$stateProvider' , '$urlRouterProvider' ,
		
		function($stateProvider , $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider

				.state('home' , {
					url: '/',
					templateUrl: 'views/home.html',
					controller: 'HomeCtrl'
				})

				.state('play' , {
					url: '/play',
					templateUrl: 'views/play.html',
					controller: 'PlayCtrl'
				})

				.state('random' , {
					url: '/random',
					templateUrl: 'views/random.html',
					controller: 'RandomCtrl'
				})

			;

		}

	])


	.controller('HomeCtrl' , ['$scope' , function($scope) {
		console.log('Here in Home Controller');
	}])


	.controller('PlayCtrl' , ['$scope' , function($scope) {

		$scope.headings = [
			'Frame' , 'Throw - 1' , 'Throw - 2' , 'Frame Score'
		];

		$scope.gameContainer = [];
			$scope.throw1Container = [];
			$scope.throw2Container = [];
			$scope.frameTotals = [];

		var frameCounter = 0;
		var gameTotal = 0;
		$scope.randomFrame = function() {

			// Parity and Edge Checking
			console.log($scope.gameTotal);
			if(frameCounter >= 10 ) {
				alert('Total Game Sum = ' + $scope.gameTotal); 
				return;
			}

			// Generate Data
			frameCounter += 1;
			
			var score1 = Math.floor(Math.random() * 11) + 0;
			var diff = 10 - score1;
			var score2 = Math.floor(Math.random() * diff );
			var frameTotal = score1 + score2;
			gameTotal = frameTotal + gameTotal;
			// Update Frame Number
			$scope.frameNumber = frameCounter;

			// Store frame into game
			var frame = {frameNumber: frameCounter , score1: score1 , score2: score2 , frameScoreTotal: frameTotal};
			$scope.gameContainer.push(frame);
			$scope.gameTotal = gameTotal;
			

		};


	}])

	.controller('RandomCtrl' , ['$scope' , function($scope) {

		$scope.headings = [
			'Frame' , 'Throw - 1' , 'Throw - 2' , 'Frame Score'
		];

		$scope.gameContainer = [];
			$scope.throw1Container = [];
			$scope.throw2Container = [];
			$scope.frameTotals = [];

		var frameCounter = 0;
		var finalScore = 0;
		$scope.randomize = function() {

			while(frameCounter <= 9) {

				// Generate Data
				frameCounter += 1;
				var score1 = Math.floor(Math.random() * 11) + 0;
				var score2 = Math.floor(Math.random() * 11) + 0;
				var frameTotal = score1 + score2;

				// Update Frame Number
				$scope.frameNumber = frameCounter;

				// Store frame into game
				var frame = {frameNumber: frameCounter , score1: score1 , score2: score2 , frameScoreTotal: frameTotal};

				$scope.gameContainer.push(frame);
				finalScore = finalScore + frameTotal;

			}

			alert(finalScore);
			$scope.finalScore = finalScore;

		};


	}])


;




