"use strict";

angular.module("sharedServices", ["toastr", "pascalprecht.translate"])
.config(function ($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: 'lang_',
		suffix: '.json'
	});

	$translateProvider.preferredLanguage("is");
});
