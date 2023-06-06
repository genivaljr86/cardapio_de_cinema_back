/**
 * A set of functions called "actions" for `bulk-order-details`
 */

export default {
  async create(ctx, next) {

    const { data: dataRequest } = ctx.request.body;

    try {
      const orderDetailsData = await Promise.all(
        dataRequest.map(
          request => (
            strapi
              .service("api::bulk-order-details.bulk-order-details")
              .create(request)
          )
        )
      )
      ctx.body = orderDetailsData;

    } catch (error) {
      ctx.badRequest("Bulk Order Details controller error", { moreDetails: error });
    }
  }
};
