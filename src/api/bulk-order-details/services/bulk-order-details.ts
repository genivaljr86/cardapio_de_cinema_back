/**
 * bulk-order-details service
 */

export default () => (
  {
    create: async (data) => {
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
    deleteOrphans: async (data) => {
      let entries = []
      try {
        entries = await strapi
          .db
          .query('api::order-detail.order-detail')
          .findMany({
            select: ['id'],
            where: { order_id: null },
          });
      } catch (error) {
        console.log('error', error);
      }

      if (entries.length > 0) {
        try {
          const orderDetailsDeleteResponse = await Promise.all(
            entries.map(
              entry => (
                strapi
                  .entityService
                  .delete('api::order-detail.order-detail', entry.id)
              )
            )
          )
          strapi.log('Order Details cleaned')

        } catch (error) {
          strapi.log("Bulk Order Details controller error", { moreDetails: error })
        }
      }
    },
  }
);
