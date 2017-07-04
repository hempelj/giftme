// If you aren't logged in, redirect to home page
FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home')
	}
}]);

if(Meteor.isClient) {
	
	// Redirect on log in/log out
	Accounts.onLogin(function(){
		FlowRouter.go('/gifteeHome');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('/');
	});
};

FlowRouter.route('/', {
    name: 'home',
    action() {
    	// If you're already logged in, redirect to gifteeHome
    	if(Meteor.userId()){
			FlowRouter.go('gifteeHome');
		}
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout', {main: 'Home'});
    }
});

FlowRouter.route('/gifteeForm', {
	name: 'gifteeForm',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('gifteeForm');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'GifteeForm'});
	}
});

FlowRouter.route('/gifteeHome', {
	name: 'gifteeHome',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('gifteeHome');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'GifteeHome'});
	}
});

FlowRouter.route('/orderForm/:_id', {
	name: 'orderForm',
	action() {
	    GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'OrderForm'});
	},
});

FlowRouter.route('/orders', {
	name: 'orders',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('orders');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Orders'});
	}
});

FlowRouter.route('/about', {
	name: 'about',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('about');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'About'});
	}
});

FlowRouter.route('/blog', {
	name: 'blog',
	action() {
	    GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'BlogHome'});
	},
});

FlowRouter.route('/blogPost/:id', {
	name: 'blogPost/:id',
	action() {
	    GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'BlogPost'});
	},
});

FlowRouter.route('/blogForm', {
	name: 'blogForm',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('blogForm');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'BlogForm'});
	}
});

FlowRouter.route('/contact', {
	name: 'contact',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('contact');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'ContactForm'});
	}
});