/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */
/* jscs:disable maximumLineLength */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

// default locale is the first one
export const locales = ['en', 'cs'];

export const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';

export const analytics = {

  // https://analytics.google.com/
  google: { trackingId: process.env.GOOGLE_TRACKING_ID || 'UA-XXXXX-X' },

};

export const auth = {

  jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '995840447174593',
    secret: process.env.FACEBOOK_APP_SECRET || '5677e0bdfb6022697dec132f856512f0',
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd',
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ',
  },

};

export const universe = {

  speed: {
    production: process.env.UNIVERSE_PRODUCTION_SPEED || process.env.UNIVERSE_SPEED || 1,
    // TODO think! maybe better name buildings instead of construction
    construction: process.env.UNIVERSE_CONSTRUCTION_SPEED || process.env.UNIVERSE_SPEED || 1,
    research: process.env.UNIVERSE_RESEARCH_SPEED || process.env.UNIVERSE_SPEED || 1,
    shipyard: process.env.UNIVERSE_SHIPYARD_SPEED || process.env.UNIVERSE_SPEED || 1,
    fleets: process.env.UNIVERSE_FLEETS_SPEED || process.env.UNIVERSE_SPEED || 1,
  },

  debris: {

  },

  galaxies: process.env.UNIVERSE_GALAXIES || 9,

  bonusFields: process.env.UNIVERSE_BONUS_FIELDS || 0,

};
