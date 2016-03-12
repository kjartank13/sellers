angular.module("project3App").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\r\n<html ng-app=\"project3App\" class=\"Sellers\">\r\n<head>\r\n	<title>WEPO Assignment 3 - Online Web Store</title>\r\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n	<meta charset=\"utf-8\">\r\n	<link rel=\"stylesheet\" href=\"styles/vendor.css\">\r\n	<link rel=\"stylesheet\" href=\"styles/app.css\">\r\n	<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\">\r\n</head>\r\n\r\n	<main class=\"container-fluid\">\r\n		<div class=\"langButtons\">\r\n			<button class=\"btn btn-primary\" ng-controller=\"langController\" ng-click=\"switchLanguage(\'is\')\">Íslenska</button>\r\n			<button class=\"btn btn-primary\" ng-controller=\"langController\" ng-click=\"switchLanguage(\'en\')\">Enska</button>\r\n		</div>\r\n		<div class=\"Main clearfix\" ng-view id=\"content\"></div>\r\n	</main>\r\n\r\n	<toaster-container></toaster-container>\r\n\r\n	<!-- inject:vendor:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:app:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:templates:js -->\r\n	<!-- endinject -->\r\n</body>\r\n\r\n</html>\r\n");
$templateCache.put("components/product-dlg/product-dlg.tpl.html","<div class=\"modal-content\">\n\n		<div class=\"modal-header\">\n			<h1>{{\"product-dlg.Title\" | translate}}</h1>\n		</div>\n\n		<div class=\"modal-body\">\n\n			{{\"product-dlg.Name\" | translate}}: <input class=\"newProductInput\" type=\"text\" ng-model=\"newprod.name\"/>\n			<br>\n			<br>\n			{{\"product-dlg.Price\" | translate}}: <input class=\"newProductInput\" type=\"text\" ng-model=\"newprod.price\"/>\n			<br>\n			<br>\n			{{\"product-dlg.QtySold\" | translate}}: <input class=\"newProductInput\" type=\"text\" ng-model=\"newprod.quantitySold\"/>\n			<br>\n			<br>\n			{{\"product-dlg.QtyStock\" | translate}}: <input class=\"newProductInput\" type=\"text\" ng-model=\"newprod.quantityInStock\"/>\n			<br>\n			<br>\n			{{\"product-dlg.ImgPath\" | translate}}: <input class=\"newProductInput\" type=\"text\" ng-model=\"newprod.imagePath\"/>\n			<br>\n			<br>\n			<button class=\"btn btn-primary\" ng-click=\"onOk()\">OK</button>\n			<button class=\"btn btn-primary\"ng-click=\"onCancel()\">{{\"seller-dlg.Cancel\" | translate}}</button>\n		</div>\n		<br>\n	</div>");
$templateCache.put("components/seller-details/seller-details.html","\n<div class=\"aboutSeller\">\n	<img class=\"profileImage\" ng-src=\"{{ currSeller.imagePath }}\" alt=\"sellerpic\">\n\n	{{ currSeller.name }} -\n	{{ currSeller.category }}\n\n</div>\n<br>\n\n<!--<button class=\"btn btn-default\" ng-click=\"onAddProduct()\">Add Product</button>-->\n<button class=\"btn btn-default\" ng-click=\"onEditSeller()\">{{\"seller-details.EditSeller\" | translate}}</button>\n<button class=\"btn btn-default\" ng-click=\"onAddProduct()\">{{\"seller-details.NewProduct\" | translate}}</button>\n\n<div class=\"tabs\">\n	<ul class=\"tablist\" ng-init=\"tab = 1\">\n	    <li class=\"tabitem\" ng-class=\"{active:tab===1}\">\n	    	<a href ng-click=\"tab = 1\">{{\"seller-details.AllProducts\" | translate}}</a>\n	    </li>\n	    <li class=\"tabitem\">\n	    	<a href ng-click=\"tab = 2\">{{\"seller-details.Top10\" | translate}}</a>\n	    </li>\n	    \n	    <br><br>\n	   	\n	   	<br>\n\n	   	<div class=\"tab1div\">\n	   		\n		   	<div ng-show=\"tab === 1\" class=\"img-thumbnails clearfix\" ng-repeat=\"product in allProducts\" ng-click=\"selectProduct(product.product.id)\" style=\"float: left; padding: 1em\">\n                <img ng-src=\"{{product.imagePath}}\" height=\"170\" width=\"170\" />\n                <h4>{{product.name}}</h4> \n                <h4>{{product.price}} ISK</h4>\n            </div>\n\n	   	</div>\n	   	\n	   	<br>\n\n	   	<div class=\"tab2div\">\n		   	<table class=\"table table-striped table-hover\" ng-show=\"tab === 2\">\n	    		<tr>\n		    		<th columnName=\"Name\">{{\"seller-details.Name\" | translate}}</th>\n		    		<th columnName=\"SalesNumber\">{{\"seller-details.NumberSales\" | translate}}</th>\n	    		</tr>\n	    		<tr ng-repeat=\"product in bestProducts\">\n	    			<td>{{ product.name }}</td>\n	    			<td>{{ product.quantitySold }}</td>\n	   			 </tr>\n			</table>\n		</div>\n\n	</ul>\n\n</div>");
$templateCache.put("components/seller-dlg/seller-dlg.tpl.html","\n\n		<div class=\"modal-content\">\n\n		<div class=\"modal-header\">\n			<h1>{{\"seller-dlg.Title\" | translate}}</h1>\n		</div>\n\n		<div class=\"modal-body\">\n\n			{{\"seller-dlg.Name\" | translate}}: <input class=\"newSellerInput\" type=\"text\" ng-model=\"seller.name\"/>\n			<br>\n			<br>\n			{{\"seller-dlg.Category\" | translate}}: <input class=\"newSellerInput\" type=\"text\" ng-model=\"seller.category\" />\n			<br>\n			<br>\n			{{\"seller-dlg.ImgPath\" | translate}}: <input class=\"newSellerInput\" type=\"text\" ng-model=\"seller.imagePath\" />\n			<br>\n			<br>\n			<button class=\"btn btn-primary\" ng-click=\"onOk()\">OK</button>\n			<button class=\"btn btn-primary\"ng-click=\"onCancel()\">{{\"seller-dlg.Cancel\" | translate}}</button>\n		</div>\n		<br>\n	</div>\n\n<!-- <div class=\"modal-footer\">\n<h3>Modal footer</h3>\n</div> -->\n\n");
$templateCache.put("components/seller-dlg/seller-edit-dlg.tpl.html","<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <h1>{{\"seller-edit-dlg.Title\" | translate}}</h1>\n    </div>\n    <div class=\"modal-body\">\n        {{\"seller-dlg.Name\" | translate}}: <input class=\"newSellerInput\" type=\"text\" ng-model=\"seller.name\" value=\"{{seller.name}}\"/>\n        <br>\n        <br>\n        {{\"seller-dlg.Category\" | translate}}: <input class=\"newSellerInput\" type=\"text\" ng-model=\"seller.category\" />\n        <br>\n        <br>\n        {{\"seller-dlg.ImgPath\" | translate}}: <input class=\"newSellerInput\" type=\"text\" ng-model=\"seller.imagePath\" />\n        <br>\n        <br>\n        <button class=\"btn btn-primary\" ng-click=\"onOk()\">{{\"seller-edit-dlg.update\" | translate}}</button>\n        <button class=\"btn btn-primary\"ng-click=\"onCancel()\">{{\"seller-dlg.Cancel\" | translate}}</button>\n    </div>\n    <br>\n</div>");
$templateCache.put("components/sellers/index.html","<!-- <h1>{{ \"sellers.Title\" | translate}}</h1> -->\r\n<h1 class=\"title\">{{\"sellers.Title\" | translate}}</h1>\r\n\r\n<button class=\"btn btn-primary\" ng-click=\"onAddSeller()\">{{\"sellers.NewSeller\" | translate}}</button>\r\n\r\n<table class=\"table table-striped table-hover\">\r\n    <tr table-sort=\"Name\">\r\n    	<th columnName=\"Name\">\r\n    		{{\"sellers.Name\" | translate}}\r\n    	</th>\r\n    	<th columnName=\"Category\">\r\n    		{{\"sellers.Category\" | translate}}\r\n    	</th>\r\n    </tr>\r\n    <!-- <tr ng-repeat=\"seller in sellers track by $index\"> -->\r\n    <tr ng-repeat=\"seller in sellers\">\r\n    	<td ng-click=\"selectSeller(seller)\">{{ seller.name }}</td>\r\n    	<td ng-click=\"selectSeller(seller)\">{{ seller.category }}</td>\r\n    </tr>\r\n</table>");
$templateCache.put("shared/notify/centris-notify-undo.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<!-- Note: basically the same template as the default template,\r\n	     but with an added \"Undo\" button. Note: we don\'t assume that\r\n	     there will be any need for custom HTML in the title/message,\r\n	     so that support has been removed. -->\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{title}}\r\n	</div>\r\n	<div>\r\n		<a class=\"centris-notify-undo pull-right\"\r\n			ng-click=\"centrisUndo(message.type, message.id)\"\r\n			translate=\"Undo\" />\r\n	</div>\r\n</div>");
$templateCache.put("shared/notify/centris-notify.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{message}}\r\n	</div>\r\n</div>");}]);