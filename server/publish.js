Meteor.publish('giftees', function(){
	return Giftees.find({createdBy: this.userId});
});

Meteor.publish('blogPost', function(id){
	check(id, String);
	return BlogPosts.find({_id: id});
});

Meteor.publish('blogPosts', function(){
	return BlogPosts.find();
});

Meteor.publish('contacts', function(){
	return Contacts.find();
});