Template.GifteeHome.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('giftees');
    });
});

Template.GifteeHome.helpers({
    giftees: ()=> {
        return Giftees.find({createdBy: Meteor.userId()});
    }
});