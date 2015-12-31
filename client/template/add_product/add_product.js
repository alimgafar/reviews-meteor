Template.add_product.events({
	'submit .add_product' : function(event) {
		var name = event.target.name.value;
		var category = event.target.category.value;
		var description = event.target.description.value;
		var is_featured = event.target.is_featured.value;

		var file = $("productImage").get(0).file(0);
		return false;
		if(file) {
			var fsFile = new FS.File(file);
			ProductImages.insert(fsFile, function(err, result) {
				if(! err) {
					var productImage = '/cfs/files/ProductImage' + result._id;
					Product.insert({
						'name' : name,
						'category' : category,
						'description' : description,
						'is_featured' : is_featured,
						'image' : productImage,
						createdAt : new Date()
					});
				};

			});
		} else {
			var productImage = '/img/noimage.png'; // have an image on the filesystem that is a placeholder for a missing image.
			Products.insert({
				'name' : name,
				'category' : category,
				'description' : description,
				'is_featured' : is_featured,
				'image' : productImage,
				createdAt : new Date()
			});

		}


		// Now that we're done with the data, clear the form
		event.target.name.value = "";
		event.target.category.value = "";
		event.target.description.value = "";
		event.target.is_featured.value = "";

		FlashMessages.sendSuccess("Product Added");
		Router.go("/home");

		console.log(category);
		return false;
	}

});