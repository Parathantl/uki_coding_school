// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '2124724784206171', // your App ID
        'clientSecret'  : 'f9079b77c9eb721aa2314f6df894cf33',
        'callbackURL'   : 'https://ukiassignment3byparathan.herokuapp.com/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'emails', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'g4fod0hSvYKQ1zt92aXPNzk9c',
        'consumerSecret'    : 'orJipbM0ZqQFILDddZ7EMKKmbkL43VaOalQzmrfz3Iz0UQrghp',
        'callbackURL'       : 'https://ukiassignment3byparathan.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '279980922996-hjbp3opm40vgcdt3qbco842isvr0vv09.apps.googleusercontent.com',
        'clientSecret'  : '6mP7AnIV1tEhjh5_K_pbmGzN',
        'callbackURL'   : 'https://ukiassignment3byparathan.herokuapp.com/auth/google/callback'
    }

};
