'use strict';

/**
 * bulk-order-details service
 */

module.exports = {
  bulkOrderDetails: async (data) => {
    try {
      const details = await strapi
        .entityService
        .create('api::order-detail.order-detail', {
          data
        })
      return details;
    } catch (err) {
      return err;
    }
  },
};
