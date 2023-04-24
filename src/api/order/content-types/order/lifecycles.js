module.exports = {
  beforeCreate: async (event) => {
    const { data } = event.params;
    if (data.has_custom_price) {
      data.final_price = data.custom_price;
    }
  }
}
