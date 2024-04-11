'use strict';

/**
 * email-key service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-key.email-key');
