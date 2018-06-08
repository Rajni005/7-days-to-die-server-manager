/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/isLoggedIn.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "isLoggedIn")
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */


module.exports.policies = {

  // isLoggedIn gets included in most of these because it contains the redirect logic

  sdtdServerController: {
    '*': ["isLoggedIn",'isServerOwner'],
    'add-server': 'isLoggedIn',
    'add-server-view': 'isLoggedIn',
    'view-gbl': 'isLoggedIn',
  },

  ShopController: {
    '*': ['isLoggedIn'],
    'listing-add': ["isLoggedIn",'isServerOwner'],
    'listing-edit': ["isLoggedIn",'isServerOwner'],
    'listing-delete': ["isLoggedIn",'isServerOwner'],
    'listing-buy' : 'isLoggedIn',
  },

  customCommandController: {
    '*': ["isLoggedIn",'isServerOwner'],
  },

  playerController: {
    '*': ['isLoggedIn', 'isPlayerOwner']
  },

  userController: {
    '*': 'isLoggedIn',
    'profile': ['isLoggedIn','isLoggedInUser'],
    'dashboard': ['isLoggedIn','isLoggedInUser']
  },

  authController: {
    'discordLogin': 'isLoggedIn',
    'discordReturn': 'isLoggedIn'
  },

  sdtdTicketController: {
    'view-ticket': ["isLoggedIn", 'canSeeTicket'],
    'open-tickets': true,
    'server-tickets-view': ["isLoggedIn",'isServerOwner'],
  }

};
