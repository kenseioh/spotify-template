var yoData;
var data;
var secData;
//var baseUrl = 'https://api.spotify.com/v1/search?type=track&query='
var playlistUrl = 'https://api.spotify.com/v1/search?type=playlist&query='
var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}
  $scope.getPlaylist = function(){
	$http.get(playlistUrl + $scope.playlist).success(function(responses){
		secData = $scope.playlists = responses.playlists.items
	})
  }
  
  $scope.songlist = function(){
	yoData = $scope.songlists.playlists.items
  }
  
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

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});