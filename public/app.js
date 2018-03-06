var rmApp = angular.module('rmApp', [
    'duScroll',
    'ui.bootstrap',
    'ngAnimate'
  ]);

rmApp.controller('RMCtrl', ['$scope', '$document', '$uibModal', function($scope, $document, $uibModal){

  $scope.navPos = {
    height: $document.scrollTop(),
    hideNav: true
  }

  $scope.isNavCollapsed = true;


  $scope.skills = {
    skill0 :{
              skill: 'AngularJS',
              level: 4
            },
    skill1: {
              skill: 'JavaScript ECMAScript 5',
              level: 4
            },
    skill2: {
              skill: 'HTML5',
              level: 5
            },
    skill3: {
              skill: 'CSS3',
              level: 4
            },
    skill4: {
              skill: 'Firebase Realtime Data',
              level: 5
            },
    skill5: {
              skill: 'jQuery',
              level: 3
            },
    skill6: {
              skill: 'UI-Bootstrap',
              level: 5
            },
    skill7: {
              skill: 'UI-Router',
              level: 5
            },
    skill8: {
              skill: 'Sass',
              level: 4
            },
    skill9: {
              skill: 'Gulp',
              level: 3
            },
    skill10: {
              skill: 'GitHub',
              level: 4
            },
    skill11: {
              skill: 'Bitbucket',
              level: 4
            },
    skill12: {
              skill: 'Firebase Hosting',
              level: 5
            },
    skill13: {
              skill: 'Heroku',
              level: 3
            },
    skill14: {
              skill: 'AJAX',
              level: 4
            },
    skill15: {
              skill: 'Google Analytics',
              level: 3
            },
    skill16: {
              skill: 'Open Graph Protocol',
              level: 5
            },
    skill17: {
              skill: 'Handlebars',
              level: 2
            },
    skill18: {
              skill: 'React',
              level: 2
            },
    skill19: {
              skill: 'Mobile Responsiveness',
              level: 5
            },
    skill20: {
              skill: 'Mocha',
              level: 4
            },
    skill21: {
              skill: 'Chai',
              level: 3
            },
    skill22: {
              skill: 'Sinon',
              level: 3
            },
    skill23: {
              skill: 'Protractor',
              level: 4
            },
    skill24: {
              skill: 'Test Driven Development',
              level: 3
            },
    skill25: {
              skill: 'Unit Testing',
              level: 4
            }
  }
  // $scope.test = function(){
  //   $scope.navPos.hideNav = !$scope.navPos.hideNav;
  // }

  $scope.viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  $document.on('scroll', function() {
    var height = $document.scrollTop();

    if(height===0){
      $scope.navPos.hideNav = false;
      $scope.$digest()
    }
    else{
      $scope.navPos.hideNav = true;
      $scope.$digest()
    }
    // console.log('Document scrolled to ', $document.scrollLeft(), $document.scrollTop());
    // console.log($scope.navPos.hideNav )
  });

  $scope.toTheTop = function() {
    $document.scrollTopAnimated(0, 5000).then(function() {
      // console.log('You just scrolled to the top!');
    });
  }

  var section3 = angular.element(document.getElementById('section-3'));
  $scope.toSection3 = function() {
    $document.scrollToElementAnimated(section3);
  }
  var section2 = angular.element(document.getElementById('section-2'));
  $scope.toSection2 = function() {
    $document.scrollToElementAnimated(section2);
  }
  $scope.portfolios = {
    portfolio0: {
      name: 'Preston Cinema Systems Website',
      caption: 'Designed and developed the entire PCS website from scratch, including features such as a build-a-system tutorial, FAQs and quote generator/shopping cart. System uses Firebase as the backend database which allows customers to upload quote requests and authenticates users who have access to these requests. The website also uses Google analytics for website feedback and is responsive to all device sizes.',
      img: 'assets/img/finalPCSscreenshot.png',
      date: 'August 2017',
      link: 'https://prestoncinema.com/',
      technology: 'AngularJS, Firebase, UI-Router, UI-Bootstrap, Gulp, Bitbucket, HTML5, CSS3'
    },
    portfolio1: {
      name: 'Cryptocurrency Tracker',
      caption: 'Developing a web app that allows users to login using their Gmail credentials and store their BTC, ETH and LTC transactions in a backend database. Using the CryptoCompare API, this React app grabs the current price of BTC, ETH and LTC and compares it to the transactions made by the user to show how well their portfolio is doing. Future features include adding/subtracting different types of cryptocurrencies, adding more entry verification and sorting transactions.',
      img: 'assets/img/cryptoTracker.png',
      date: 'In progress',
      link: 'https://crypto-tracker-1111.firebaseapp.com/',
      technology: 'React, Firebase, React-Bootstrap, GitHub, Bitbucket, HTML5, CSS3'
    },
    portfolio2: {
      name: 'Inventory Tracking System',
      caption: 'Designed and built a custom inventory tracking system that generates custom barcodes, interfaces with a barcode scanner to scan items in/out, and instantly updates the backend database with each scan.',
      img: 'assets/img/inventoryScreenshotFinal.png',
      date: 'In progress',
      link: 'https://inventory-tracking-c3b88.firebaseapp.com/#!/home',
      technology: 'AngularJS, Firebase, UI-Router, UI-Bootstrap, HTTP GET requests, HTML5, CSS3'
    },
    portfolio3: {
      name: 'Hangman: Head to Head',
      caption: 'A game of hangman where two players face off in trying to guess a word without losing all their lives. This site utilizes Firebase as a backend allowing two people with the link to play simultaneously and constantly updates on the progress each player has made.',
      img: 'assets/img/hangman.jpg',
      date: 'February 2017',
      link: 'https://hangman-game-eaec8.firebaseapp.com/',
      technology: 'jQuery, Bootstrap, AJAX request to API, HTML5, CSS3'
    },
    portfolio4: {
      name: 'My Feeds',
      caption: "A project that pulls information from a variety of APIs and organizes it in a clean, easy to use interface. Read the 10 most recent headlines, check out the forecast in Los Angeles or look at NASA's pictures of the day.",
      img: 'assets/img/feedr.jpg',
      date: 'January 2017',
      link: 'https://feedr-a7ce1.firebaseapp.com/',
      technology: 'jQuery, Bootstrap, AJAX requests to multiple APIs, HTML5, CSS3'
    }
  }

  $scope.openPortfolio = function (_portfolio) {
    var modalInstance = $uibModal.open({
       controller: "ModalInstanceCtrl",
      templateUrl: 'modal.html',
             size: 'lg',
          resolve: {
          allInfo: function(){
             return _portfolio;
             }
           }
         });
  };

  $scope.myValue=false;



}])

.value('duScrollOffset', 30);


rmApp.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});

rmApp.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'allInfo', function ($scope, $uibModalInstance, allInfo){
  $scope.allInfo = allInfo;
  $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
  };
}]);
