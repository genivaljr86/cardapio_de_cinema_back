export default {
  routes: [
    {
      method: 'POST',
      path: '/bulk-order-details',
      handler: 'bulk-order-details.create',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};
