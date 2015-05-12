var app = angular.module('landseerApp' , ['ui.router'])

	.config(['$stateProvider' , '$urlRouterProvider' ,
		
		function($stateProvider , $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider

				.state('home' , {
					url: '/',
					templateUrl: 'views/home.html',
					controller: 'HomeCtrl'
				})

				// Dogs
				// ========================================
				.state('boys' , {
					url: '/boys',
					templateUrl: 'views/boys/boys.html',
					// controller: 'PlayCtrl'
				})

					.state('casper' , {
						url: '/the-boys/casper',
						templateUrl: 'views/boys/casper.html'
					})

					.state('frederick' , {
						url: '/the-boys/frederick',
						templateUrl: 'views/boys/frederick.html'
					})

					.state('enzo' , {
						url: '/the-boys/enzo',
						templateUrl: 'views/boys/enzo.html'
					})

				.state('girls' , {
					url: '/girls',
					templateUrl: 'views/girls/girls.html',
					// controller: 'RandomCtrl'
				})

					.state('izzy' , {
						url: '/the-girls/izzy',
						templateUrl: 'views/girls/izzy.html',
					})

					.state('bea' , {
						url: '/the-girls/bea',
						templateUrl: 'views/girls/bea.html'
					})

					.state('bluemchen' , {
						url: '/the-girls/bluemchen',
						templateUrl: 'views/girls/bluemchen.html'
					})

					.state('angie' , {
						url: '/the-girls/angie',
						templateUrl: 'views/girls/angie.html'
					})

				.state('puppies' , {
					url: '/puppies',
					templateUrl: 'views/puppies/puppies.html',
					// controller: 'PlayCtrl'
				})

					.state('aLitter' , {
						url: '/puppies/A-Litter',
						templateUrl: 'views/puppies/aLitter/aLitter.html'
					})

						.state('aLitterW1' , {
							url: '/puppies/A-Litter/Week-1',
							templateUrl: '/views/puppies/aLitter/week1.html'
						})

						.state('aLitterW2' , {
							url: '/puppies/A-Litter/Week-2',
							templateUrl: '/views/puppies/aLitter/week2.html'
						})
						.state('aLitterW3' , {
							url: '/puppies/A-Litter/Week-3',
							templateUrl: '/views/puppies/aLitter/week3.html'
						})

						.state('aLitterW4' , {
							url: '/puppies/A-Litter/Week-4',
							templateUrl: '/views/puppies/aLitter/week4.html'
						})

						.state('aLitterW5' , {
							url: '/puppies/A-Litter/Week-5',
							templateUrl: '/views/puppies/aLitter/week5.html'
						})

						.state('aLitterW6' , {
							url: '/puppies/A-Litter/Week-6',
							templateUrl: '/views/puppies/aLitter/week6.html'
						})

						.state('aLitterW7' , {
							url: '/puppies/A-Litter/Week-7',
							templateUrl: '/views/puppies/aLitter/week7.html'
						})

						.state('aLitterW8' , {
							url: '/puppies/A-Litter/Week-8',
							templateUrl: '/views/puppies/aLitter/week8.html'
						})

						.state('aLitterW9' , {
							url: '/puppies/A-Litter/Week-9',
							templateUrl: '/views/puppies/aLitter/week9.html'
						})

						.state('aLitterW30' , {
							url: '/puppies/A-Litter/Week-30',
							templateUrl: '/views/puppies/aLitter/week30.html'
						})


					.state('bLitter' , {
						url: '/puppies/B-Litter',
						templateUrl: 'views/puppies/bLitter/bLitter.html'
					})

						.state('bLitterW1' , {
							url: '/puppies/B-Litter/Week-1',
							templateUrl: '/views/puppies/bLitter/week1.html'
						})

						.state('bLitterW2' , {
							url: '/puppies/B-Litter/Week-2',
							templateUrl: '/views/puppies/bLitter/week2.html'
						})
						.state('bLitterW3' , {
							url: '/puppies/B-Litter/Week-3',
							templateUrl: '/views/puppies/bLitter/week3.html'
						})

						.state('bLitterW4' , {
							url: '/puppies/B-Litter/Week-4',
							templateUrl: '/views/puppies/bLitter/week4.html'
						})

						.state('bLitterW5' , {
							url: '/puppies/B-Litter/Week-5',
							templateUrl: '/views/puppies/bLitter/week5.html'
						})

						.state('bLitterW6' , {
							url: '/puppies/B-Litter/Week-6',
							templateUrl: '/views/puppies/bLitter/week6.html'
						})

						.state('bLitterW7' , {
							url: '/puppies/B-Litter/Week-7',
							templateUrl: '/views/puppies/bLitter/week7.html'
						})

						.state('bLitterW8' , {
							url: '/puppies/B-Litter/Week-8',
							templateUrl: '/views/puppies/bLitter/week8.html'
						})

						.state('bLitterW9' , {
							url: '/puppies/B-Litter/Week-9',
							templateUrl: '/views/puppies/bLitter/week9.html'
						})

						.state('bLitterW30' , {
							url: '/puppies/B-Litter/Week-30',
							templateUrl: '/views/puppies/bLitter/week30.html'
						})

					.state('cLitter' , {
						url: '/puppies/C-Litter',
						templateUrl: 'views/puppies/cLitter/cLitter.html'
					})

						.state('cLitterW1' , {
							url: '/puppies/C-Litter/Week-1',
							templateUrl: '/views/puppies/cLitter/week1.html'
						})

						.state('cLitterW2' , {
							url: '/puppies/C-Litter/Week-2',
							templateUrl: '/views/puppies/cLitter/week2.html'
						})
						.state('cLitterW3' , {
							url: '/puppies/C-Litter/Week-3',
							templateUrl: '/views/puppies/cLitter/week3.html'
						})

						.state('cLitterW4' , {
							url: '/puppies/C-Litter/Week-4',
							templateUrl: '/views/puppies/cLitter/week4.html'
						})

						.state('cLitterW5' , {
							url: '/puppies/C-Litter/Week-5',
							templateUrl: '/views/puppies/cLitter/week5.html'
						})

						.state('cLitterW6' , {
							url: '/puppies/C-Litter/Week-6',
							templateUrl: '/views/puppies/cLitter/week6.html'
						})

						.state('cLitterW7' , {
							url: '/puppies/C-Litter/Week-7',
							templateUrl: '/views/puppies/cLitter/week7.html'
						})

						.state('cLitterW8' , {
							url: '/puppies/C-Litter/Week-8',
							templateUrl: '/views/puppies/cLitter/week8.html'
						})

						.state('cLitterW9' , {
							url: '/puppies/C-Litter/Week-9',
							templateUrl: '/views/puppies/cLitter/week9.html'
						})

						.state('cLitterW30' , {
							url: '/puppies/C-Litter/Week-30',
							templateUrl: '/views/puppies/cLitter/week30.html'
						})

					.state('dLitter' , {
						url: '/puppies/D-Litter',
						templateUrl: 'views/puppies/dLitter/dLitter.html'
					})

						.state('dLitterW1' , {
							url: '/puppies/D-Litter/Week-1',
							templateUrl: '/views/puppies/aLitter/week1.html'
						})

						.state('dLitterW2' , {
							url: '/puppies/D-Litter/Week-2',
							templateUrl: '/views/puppies/dLitter/week2.html'
						})
						.state('dLitterW3' , {
							url: '/puppies/D-Litter/Week-3',
							templateUrl: '/views/puppies/dLitter/week3.html'
						})

						.state('dLitterW4' , {
							url: '/puppies/D-Litter/Week-4',
							templateUrl: '/views/puppies/dLitter/week4.html'
						})

						.state('dLitterW5' , {
							url: '/puppies/D-Litter/Week-5',
							templateUrl: '/views/puppies/dLitter/week5.html'
						})

						.state('dLitterW6' , {
							url: '/puppies/D-Litter/Week-6',
							templateUrl: '/views/puppies/dLitter/week6.html'
						})

						.state('dLitterW7' , {
							url: '/puppies/D-Litter/Week-7',
							templateUrl: '/views/puppies/dLitter/week7.html'
						})

						.state('dLitterW8' , {
							url: '/puppies/D-Litter/Week-8',
							templateUrl: '/views/puppies/dLitter/week8.html'
						})

						.state('dLitterW9' , {
							url: '/puppies/D-Litter/Week-9',
							templateUrl: '/views/puppies/dLitter/week9.html'
						})

						.state('dLitterW30' , {
							url: '/puppies/D-Litter/Week-30',
							templateUrl: '/views/puppies/dLitter/week30.html'
						})					

					.state('eLitter' , {
						url: '/puppies/E-Litter',
						templateUrl: 'views/puppies/eLitter/eLitter.html'
					})

						.state('eLitterW1' , {
							url: '/puppies/E-Litter/Week-1',
							templateUrl: '/views/puppies/eLitter/week1.html'
						})

						.state('eLitterW2' , {
							url: '/puppies/E-Litter/Week-2',
							templateUrl: '/views/puppies/eLitter/week2.html'
						})
						.state('eLitterW3' , {
							url: '/puppies/E-Litter/Week-3',
							templateUrl: '/views/puppies/eLitter/week3.html'
						})

						.state('eLitterW4' , {
							url: '/puppies/E-Litter/Week-4',
							templateUrl: '/views/puppies/eLitter/week4.html'
						})

						.state('eLitterW5' , {
							url: '/puppies/E-Litter/Week-5',
							templateUrl: '/views/puppies/eLitter/week5.html'
						})

						.state('eLitterW6' , {
							url: '/puppies/E-Litter/Week-6',
							templateUrl: '/views/puppies/eLitter/week6.html'
						})

						.state('eLitterW7' , {
							url: '/puppies/E-Litter/Week-7',
							templateUrl: '/views/puppiese/eLitter/week7.html'
						})

						.state('eLitterW8' , {
							url: '/puppies/E-Litter/Week-8',
							templateUrl: '/views/puppies/eLitter/week8.html'
						})

						.state('eLitterW9' , {
							url: '/puppies/E-Litter/Week-9',
							templateUrl: '/views/puppies/eLitter/week9.html'
						})

						.state('eLitterW30' , {
							url: '/puppies/E-Litter/Week-30',
							templateUrl: '/views/puppies/eLitter/week30.html'
						})					

					.state('fLitter' , {
						url: '/puppies/F-Litter',
						templateUrl: 'views/puppies/fLitter/fLitter.html'
					})

						.state('fLitterW1' , {
							url: '/puppies/F-Litter/Week-1',
							templateUrl: '/views/puppies/fLitter/week1.html'
						})

						.state('fLitterW2' , {
							url: '/puppies/F-Litter/Week-2',
							templateUrl: '/views/puppies/fLitter/week2.html'
						})
						.state('fLitterW3' , {
							url: '/puppies/F-Litter/Week-3',
							templateUrl: '/views/puppies/fLitter/week3.html'
						})

						.state('fLitterW4' , {
							url: '/puppies/F-Litter/Week-4',
							templateUrl: '/views/puppies/fLitter/week4.html'
						})

						.state('fLitterW5' , {
							url: '/puppies/F-Litter/Week-5',
							templateUrl: '/views/puppies/fLitter/week5.html'
						})

						.state('fLitterW6' , {
							url: '/puppies/F-Litter/Week-6',
							templateUrl: '/views/puppies/fLitter/week6.html'
						})

						.state('fLitterW7' , {
							url: '/puppies/F-Litter/Week-7',
							templateUrl: '/views/puppies/fLitter/week7.html'
						})

						.state('fLitterW8' , {
							url: '/puppies/F-Litter/Week-8',
							templateUrl: '/views/puppies/fLitter/week8.html'
						})

						.state('fLitterW9' , {
							url: '/puppies/F-Litter/Week-9',
							templateUrl: '/views/puppies/fLitter/week9.html'
						})

						.state('fLitterW30' , {
							url: '/puppies/F-Litter/Week-30',
							templateUrl: '/views/puppies/fLitter/week30.html'
						})					

					.state('gLitter' , {
						url: '/puppies/G-Litter',
						templateUrl: 'views/puppies/gLitter/gLitter.html'
					})	

						.state('gLitterW1' , {
							url: '/puppies/G-Litter/Week-1',
							templateUrl: '/views/puppies/gLitter/week1.html'
						})

						.state('gLitterW2' , {
							url: '/puppies/G-Litter/Week-2',
							templateUrl: '/views/puppies/gLitter/week2.html'
						})
						.state('gLitterW3' , {
							url: '/puppies/G-Litter/Week-3',
							templateUrl: '/views/puppies/gLitter/week3.html'
						})

						.state('gLitterW4' , {
							url: '/puppies/G-Litter/Week-4',
							templateUrl: '/views/puppies/gLitter/week4.html'
						})

						.state('gLitterW5' , {
							url: '/puppies/G-Litter/Week-5',
							templateUrl: '/views/puppies/gLitter/week5.html'
						})

						.state('gLitterW6' , {
							url: '/puppies/G-Litter/Week-6',
							templateUrl: '/views/puppies/gLitter/week6.html'
						})

						.state('gLitterW7' , {
							url: '/puppies/G-Litter/Week-7',
							templateUrl: '/views/puppies/gLitter/week7.html'
						})

						.state('gLitterW8' , {
							url: '/puppies/G-Litter/Week-8',
							templateUrl: '/views/puppies/gLitter/week8.html'
						})

						.state('gLitterW9' , {
							url: '/puppies/G-Litter/Week-9',
							templateUrl: '/views/puppies/gLitter/week9.html'
						})

						.state('gLitterW30' , {
							url: '/puppies/G-Litter/Week-30',
							templateUrl: '/views/puppies/gLitter/week30.html'
						})																													



				// Info / MISC
				// ========================================

				.state('livingQuarters' , {
					url: '/living-quarters',
					templateUrl: 'views/livingQuarters.html',
					// controller: 'PlayCtrl'
				})

				.state('history' , {
					url: '/history',
					templateUrl: 'views/history.html',
					// controller: 'RandomCtrl'
				})

				.state('history2' , {
					url: '/history-continued',
					templateUrl: 'views/history2.html',
					// controller: ''
				})

				.state('necessities' , {
					url: '/necessities',
					templateUrl: 'views/necessities.html',
					// controller: 'PlayCtrl'
				})

				.state('necessities2' , {
					url: '/necessities-continued',
					templateUrl: 'views/necessities2.html',
					// controller: ''
				})

				.state('picturePinwall' , {
					url: '/picture-pinwall',
					templateUrl: 'views/picturePinwall.html',
					// controller: 'RandomCtrl'
				})

				//

				.state('movies' , {
					url: '/movies',
					templateUrl: 'views/movies.html',
					// controller: 'PlayCtrl'
				})

				.state('about' , {
					url: '/about',
					templateUrl: 'views/about.html'
					// controller: 'RandomCtrl'
				})

				.state('inMemory' , {
					url: '/in-memory',
					templateUrl: 'views/inMemory.html',
					// controller: 'PlayCtrl'
				})

				.state('merchandise' , {
					url: '/merchandise',
					templateUrl: 'views/merchandise.html',
					// controller: 'RandomCtrl'
				})

				.state('links' , {
					url: '/links',
					templateUrl: 'views/links.html',
					// controller: 'RandomCtrl'
				})


			;

		}

	])


	.controller('HomeCtrl' , ['$scope' , function($scope) {
		
		$scope.theBoys = function() {
			$state.go('boys');
		};	
		
	}])




;




