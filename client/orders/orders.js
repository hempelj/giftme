Template.Orders.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('orders');
    });
});

Template.OrderForm.helpers({
    orders: ()=> {
        return Orders.find({createdBy: Meteor.userId()})
    }
})