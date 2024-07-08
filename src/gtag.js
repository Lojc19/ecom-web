import ReactGA from "react-ga4";

export function trackProductView(product) {
  ReactGA.event({
    category: "View detail Product",
    action: "view_detail",
    label: product.code, // optional
  });
}

  
export function trackAddToCart(product) {
  ReactGA.event({
    category: "Add to cart",
    action: "add_to_cart",
    label: product.code, // optional
  });
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
  