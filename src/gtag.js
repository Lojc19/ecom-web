// Theo dõi khi người dùng xem một sản phẩm
export function trackProductView(product) {
    window.gtag('event', 'view_item', {
      items: [{
        code: product.code,
        name: product.name,
        category: product.category,
        room: product.room,
        specs: product.specs,
        price: product.price
      }]
    });
  }
  
  // Theo dõi khi người dùng thêm sản phẩm vào giỏ hàng
  export function trackAddToCart(product) {
    window.gtag('event', 'add_to_cart', {
      items: [{
        code: product.code,
        name: product.name,
        category: product.category,
        room: product.room,
        specs: product.specs,
        price: product.price
      }]
    });
  }
  
  // Theo dõi khi người dùng mua hàng
  export function trackPurchase(order) {
    window.gtag('event', 'purchase', {
      transaction_id: order.orderId,
      value: order.total,
      currency: 'VND',
      PaymentMethod: order.PaymentMethod,
      items: order.products.map(item => ({
        code: item.code,
        name: item.name,
        category: item.category,
        room: item.room,
        specs: item.specs,
        price: item.price
      }))
    });
  }
  