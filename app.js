var datas;
var secData;
var playlistUrl = 'https://api.spotify.com/v1/search?type=album&query='
var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}
  
  $scope.getPlaylist = function(){
	$http.get(playlistUrl + $scope.playlist).success(function(responses){
		secData = $scope.albums = responses.albums.items
		console.log(responses);
	})
  }
  
  $scope.getSonglist = function(album){
	$http.get(album + '/tracks').success(function(response) {
		datas = $scope.songlists = response.items
	})
  }
  
  $("#albumList").click(function() {
	 $(this).hide(); 
  });
  
  
  $scope.play = function(song) {
    if($scope.currentSong == song) {
      $scope.audioObject.pause()
      $scope.currentSong = false
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  }
})

$('body').tooltip({
    selector: '[title]'
});