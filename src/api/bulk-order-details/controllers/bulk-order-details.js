'use strict';

/**
 * A set of functions called "actions" for `bulk-order-details`
 */

module.exports = {
  async bulkOrderDetails(ctx, next) {

    const { data: dataRequest } = ctx.request.body;

    try {
      const orderDetailsData = await Promise.all(
        dataRequest.map(
          request => (
            strapi
              .service("api::bulk-order-details.bulk-order-details")
              .bulkOrderDetails(request)
          )
        )
      )
      ctx.body = orderDetailsData;

    } catch (err) {
      ctx.badRequest("Bulk Order Details controller error", { moreDetails: err });
    }
  },
};
