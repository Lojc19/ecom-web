import ReactGA from "react-ga4";

export function trackProductView(product) {
  ReactGA.event({
    category: "View detail Product",
    action: "click",
    label: product.code, // optional
  });
}

  
export function trackAddToCart(product) {
    ReactGA.event('add_to_cart', {
      product_category: product._id,
      product_room: product.room._id,
      product_name: product.name,
      product_code: product.code,
      currency: 'VNĐ', // hoặc loại tiền tệ bạn đang sử dụng
      product_price: product.price,
    })
  }

  export function trackPurchase(order) {
    ReactGA.event('event', 'purchase', {
      transaction_id: order.orderId,
      value: order.total,
      currency: 'VND',
      PaymentMethod: order.PaymentMethod,
      items: order.products.map(item => ({
        code: item.code,
        name: item.name,
        category: item.category._id,
        room: item.room._id,
        specs: item.specs,
        price: item.price
      }))
    });
  }
  