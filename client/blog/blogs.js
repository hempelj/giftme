// Template data subscriptions

Template.BlogHome.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('blogPosts');
    });
});

Template.BlogPost.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('blogPost', id);
    });
});


// Template helpers

Template.BlogHome.helpers({
    blogPosts: ()=> {
        return BlogPosts.find({})
    }
});

Template.BlogPost.helpers({
    blogPost: ()=> {
        var id = FlowRouter.getParam('id');
        return BlogPosts.findOne({_id: id});
    }
});
