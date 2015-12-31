// Static categories. No controls for users to create or update
Categories = new Mongo.Collection("categories");

// Products. Users can change these.
Products = new Mongo.Collection("products");

// Images
ProductImages = new FS.Collection("ProductImages", {
	stores: [new FS.Store.GridFS("ProductImages")]
});


