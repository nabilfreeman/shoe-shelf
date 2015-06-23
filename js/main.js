var page = document.querySelector("#page");

var moltin = new Moltin({publicId: 'DJtv6nj6aHFE7nqM4Bhu46IPOBI8D7fPmA9cN4cu'});
moltin.Authenticate(function() {

// Make your calls here

	moltin.Product.List(null, function(products) {
		
		products.forEach(function(product){

			console.log(product);

			var tile = document.createElement("div");
			tile.className = "tile";

			tile.innerHTML = '<img src="' + product.images[0].url.https + '">'
				+ '<div class="metadata">'
					+ '<h1>' + product.title + '</h1>'
					+ '<h2>' + product.price.value + '</h2>'
					+ '<p>' + product.description + '</p>'
				+ '</div>';

			page.appendChild(tile);

		});

	}, function(error) {
		// Something went wrong...
	});


});