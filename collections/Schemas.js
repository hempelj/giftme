import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

var Schemas = {};

// Blog posts

BlogPosts = new Mongo.Collection('blogPosts');

BlogPosts.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});

Schemas.BlogPost = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    content: {
        type: String,
        label: "Content",
        autoform: {
            rows: 20
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return Meteor.userId();
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

BlogPosts.attachSchema(Schemas.BlogPost);

// Contacts

Contacts = new Mongo.Collection('contacts');

Contacts.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});

Schemas.Contact = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    content: {
        type: String,
        label: "Content",
        autoform: {
            rows: 4
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return Meteor.userId();
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

Contacts.attachSchema(Schemas.Contact);

// Orders

Orders = new Mongo.Collection('orders');

Orders.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});

Schemas.Order = new SimpleSchema({
    occasion: {
        type: String,
        label: "Occasion"
    },
    comments: {
        type: String,
        label: "Comments and specifications",
        autoform: {
            rows: 4
        },
        optional: true
    },
    createdBy: {
        type: String,
        label: "Creator",
        autoValue: function() {
            return Meteor.userId();
        },
        autoform: {
			type: "hidden"
		}
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        },
        autoform: {
			type: "hidden"
		}
    }
});

Orders.attachSchema(Schemas.Order);

// Contacts
/*
Contacts = new Mongo.Collection('contacts');

Contacts.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});

Schemas.Contact = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    content: {
        type: String,
        label: "Content",
        autoform: {
            rows: 4
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return Meteor.userId();
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

Contacts.attachSchema(Schemas.Contact);
*/
// Giftees

Giftees = new Mongo.Collection('giftees');

Giftees.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});

Schemas.Giftee = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    hobbies: {
        type: String,
        label: "Hobbies"
    },
    gift_preferences: {
        type: String,
        label: "What kind of gifts do they like?"
    },
    facebook_page: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        label: "Link to Facebook Profile",
        optional: true
    },
    amazon_wishlist: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        label: "Link to Amazon Wishlist",
        optional: true
    },
    pinterest: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        label: "Link to Pinterest Board",
        optional: true
    },
    twitter: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        label: "Link to Twitter",
        optional: true
    },
    other_comments: {
        type: String,
        label: "Other comments",
        autoform: {
            rows: 4
        },
        optional: true
    },
    createdBy: {
        type: String,
        label: "Creator",
        autoValue: function() {
            return Meteor.userId();
        },
        autoform: {
			type: "hidden"
		}
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        },
        autoform: {
			type: "hidden"
		}
    }
});

Giftees.attachSchema(Schemas.Giftee);