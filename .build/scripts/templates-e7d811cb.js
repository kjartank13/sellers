angular.module("project3App").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\r\n<html ng-app=\"project3App\" class=\"Sellers\">\r\n<head>\r\n	<title>WEPO Assignment 3 - Online Web Store</title>\r\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n	<meta charset=\"utf-8\">\r\n	<link rel=\"stylesheet\" href=\"styles/vendor.css\">\r\n	<link rel=\"stylesheet\" href=\"styles/app.css\">\r\n	<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\">\r\n</head>\r\n\r\n	<main class=\"container-fluid\">\r\n		<button class=\"btn btn-primary\" ng-controller=\"langController\" ng-click=\"switchLanguage(\'is\')\">Íslenska</button>\r\n		<button class=\"btn btn-primary\" ng-controller=\"langController\" ng-click=\"switchLanguage(\'en\')\">Enska</button>\r\n		<div class=\"Main clearfix\" ng-view id=\"content\"></div>\r\n	</main>\r\n\r\n	<toaster-container></toaster-container>\r\n\r\n	<!-- inject:vendor:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:app:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:templates:js -->\r\n	<!-- endinject -->\r\n</body>\r\n\r\n</html>\r\n");
$templateCache.put("components/seller-details/seller-details.html","\n<div class=\"aboutSeller\">\n	<img class=\"profileImage\" ng-src=\"{{ currSeller.imagePath }}\" alt=\"sellerpic\">\n\n	{{ currSeller.name }} -\n	{{ currSeller.category }}\n\n</div>\n<br>\n\n\n<div class=\"tabs\">\n	<ul class=\"tablist\" ng-init=\"tab = 1\">\n	    <li class=\"tabitem\" ng-class=\"{active:tab===1}\">\n	    	<a href ng-click=\"tab = 1\">{{\"seller-details.AllProducts\" | translate}}</a>\n	    </li>\n	    <li class=\"tabitem\">\n	    	<a href ng-click=\"tab = 2\">{{\"seller-details.Top10\" | translate}}</a>\n	    </li>\n	    \n	    <br><br>\n	   	\n	   	<br>\n\n	   	<div class=\"tab1div\">\n	   		\n		   	<ul class=\"allProductsList\" ng-show=\"tab === 1\" ng-repeat=\"product in allProducts\">\n		   		<li class=\"allProductsItem\"> \n		   			\n		   			<div class=\"itemDetails\">\n			   			<img class=\"productImage\" ng-src=\"{{ product.imagePath }}\" alt=\"productpic\">\n			   			<br>\n			   			<div class=\"prodName\">{{ product.name }}</div> \n			   			<div class=\"prodPrice\">{{ product.price }} ISK</div>\n		   			</div>\n\n		   		</li>\n		   	</ul>\n\n	   	</div>\n	   	\n	   	<br>\n\n	   	<div class=\"tab2div\">\n		   	<table class=\"table table-striped table-hover\" ng-show=\"tab === 2\">\n	    		<tr>\n		    		<th columnName=\"Name\">{{\"seller-details.Name\" | translate}}</th>\n		    		<th columnName=\"SalesNumber\">{{\"seller-details.NumberSales\" | translate}}</th>\n	    		</tr>\n	    		<tr ng-repeat=\"product in bestProducts\">\n	    			<td>{{ product.name }}</td>\n	    			<td>{{ product.quantitySold }}</td>\n	   			 </tr>\n			</table>\n		</div>\n\n	</ul>\n\n</div>");
$templateCache.put("components/seller-dlg/seller-dlg.tpl.html","<!-- <div class=\"modal-header\">\n<h1>Modal header</h1>\n</div>\n\n<div class=\"modal-body\">\n<h2>Modal body</h2>\n</div>\n\n<div class=\"modal-footer\">\n<h3>Modal footer</h3>\n</div> -->\n\n<input type=\"text\" ng-model=\"seller.name\" />\n<br>\n<input type=\"text\" ng-model=\"seller.category\" />\n<br>\n<input type=\"text\" ng-model=\"seller.imagePath\" />\n\n<button ng-click=\"onOk()\">OK</button>");
$templateCache.put("components/sellers/index.html","<!-- <h1>{{ \"sellers.Title\" | translate}}</h1> -->\r\n<h1 class=\"title\">{{\"sellers.Title\" | translate}}</h1>\r\n\r\n<button ng-click=\"onAddSeller()\">Add</button>\r\n\r\n<table class=\"table table-striped table-hover\">\r\n    <tr table-sort=\"Name\">\r\n    	<th columnName=\"Name\">\r\n    		{{\"sellers.Name\" | translate}}\r\n    	</th>\r\n    	<th columnName=\"Category\">\r\n    		{{\"sellers.Category\" | translate}}\r\n    	</th>\r\n    </tr>\r\n    <!-- <tr ng-repeat=\"seller in sellers track by $index\"> -->\r\n    <tr ng-repeat=\"seller in sellers\">\r\n    	<td ng-click=\"selectSeller(seller)\">{{ seller.name }}</td>\r\n    	<td ng-click=\"selectSeller(seller)\">{{ seller.category }}</td>\r\n    </tr>\r\n</table>");
$templateCache.put("shared/notify/centris-notify-undo.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<!-- Note: basically the same template as the default template,\r\n	     but with an added \"Undo\" button. Note: we don\'t assume that\r\n	     there will be any need for custom HTML in the title/message,\r\n	     so that support has been removed. -->\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{title}}\r\n	</div>\r\n	<div>\r\n		<a class=\"centris-notify-undo pull-right\"\r\n			ng-click=\"centrisUndo(message.type, message.id)\"\r\n			translate=\"Undo\" />\r\n	</div>\r\n</div>");
$templateCache.put("shared/notify/centris-notify.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{message}}\r\n	</div>\r\n</div>");}]);