export default {
  async afterDelete(event) {
    strapi
      .service("api::bulk-order-details.bulk-order-details")
      .deleteOrphans()
  }
}
