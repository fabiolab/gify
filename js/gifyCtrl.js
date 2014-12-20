/*
 * Main controller of the application
 * Handles the interaction of the main page
 */
gify.controller('gifyCtrl', function($scope,$upload,$http,gifyConf,gifoptions){
	
	// All the data of the scope are stored under the nested object "data"
	// (angular best pratices)
	$scope.data = {};
	$scope.data.progress = 0;
	$scope.data.options = gifoptions.data;
	
	$scope.data.files = [];

	$scope.init = function(){
		$http.get(gifyConf.host + '/gify/php/clear.php').
			success(function(data, status, headers, config) {
				console.log('Images clear from ../img/');
		}).error(function(data, status, headers, config) {
			console.log('Error while removing images from ../img/');
		});
	}

	$scope.init();
	
	$scope.$watch('data.files', function() {
	    for (var i = 0; i < $scope.data.files.length; i++) {
	    	var file = $scope.data.files[i];
	    	$scope.upload = $upload.upload({
		        url: gifyConf.host + '/gify/php/upload.php', // upload.php script, node.js route, or servlet url
		        // data: {myObj: $scope.myModelObj},
		        file: file, // single file or a list of files. list is only for html5
		        //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
		        //fileFormDataName: myFile, // file formData name ('Content-Disposition'), server side request form name
		                                    // could be a list of names for multiple files (html5). Default is 'file'

		    }).progress(function(evt) {
		        $scope.data.upprogress = parseInt(100.0 * evt.loaded / evt.total);
		    }).success(function(data, status, headers, config) {
		    	$scope.data.options.images.push(gifyConf.host + "/gify/php/getimage.php?image=" + config.file.name);
		        console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + data);
		    });
	    }
	});

	_removeItem = function(pArray,pItem){
		var i = pArray.indexOf(pItem);
		if(i != -1) {
			pArray.splice(i, 1);
		}		
	}

	$scope.removeImage = function(file){
		_removeItem(gifoptions.data.images,file);
	};

	$scope.createGif = function(){
		$scope.data.progress = 10;
		gifshot.takeSnapShot(gifoptions.data, function (obj) {
			$scope.$apply(function(){
				$scope.data.progress = 50;
			    if (!obj.error) {
					$scope.data.progress = 100;
			        $scope.data.mongif = obj.image;
			    }
			});
		});
	};
});