import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

  // Facebook
ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '294075304373112',
    secret: '51a1273d3e7a7f46aec8829d8a6c4064'
});
