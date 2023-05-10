module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/bulk-order-details',
      handler: 'bulk-order-details.bulkOrderDetails',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
