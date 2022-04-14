var mutations = {
    createCustomer: `mutation {
      createCustomer(
        input: {
          firstname: "John"
          lastname: "Doe"
          email: "john.doe@example.com"
          password: "b1b2b3l@w+"
          is_subscribed: true
        }
      ) {
        customer {
          firstname
          lastname
          email
          is_subscribed
        }
      }
    }`,
    generateCustomerToken: `mutation {
      generateCustomerToken(email: "john.doe@example.com", password: "b1b2b3l@w+") {
        token
      }
    }`,
    createCustomerCart: `{
      customerCart{
        id
      }
    }`,
    createGuestCart: `mutation {
      createEmptyCart
    }`,
    addSimpleProductToCart: `mutation {
      addSimpleProductsToCart(
        input: {
          cart_id: "CART_ID"
          cart_items: [
            {
              data: {
                quantity: 1
                sku: "${process.env.SIMPLE_PRODUCT_SKU}"
              }
            }
          ]
        }
      ) {
        cart {
          items {
            id
            product {
              sku
              stock_status
            }
            quantity
          }
        }
      }
    }`,
    setShippingAddress: `mutation {
      setShippingAddressesOnCart(
        input: {
          cart_id: "CART_ID"
          shipping_addresses: [
            {
              address: {
                firstname: "John"
                lastname: "Doe"
                company: "Company Name"
                street: ["3320 N Crescent Dr", "Beverly Hills"]
                city: "Los Angeles"
                region: "CA"
                region_id: 12
                postcode: "90210"
                country_code: "US"
                telephone: "123-456-0000"
                save_in_address_book: false
              }
            }
          ]
        }
      ) {
        cart {
          shipping_addresses {
            firstname
            lastname
            company
            street
            city
            region {
              code
              label
            }
            postcode
            telephone
            country {
              code
              label
            }
            available_shipping_methods{
              carrier_code
              carrier_title
              method_code
              method_title
            }
          }
        }
      }
    }`,
    setBillingAddress: `mutation {
      setBillingAddressOnCart(
        input: {
          cart_id: "CART_ID"
          billing_address: {
            address: {
              firstname: "John"
              lastname: "Doe"
              company: "Company Name"
              street: ["64 Strawberry Dr", "Beverly Hills"]
              city: "Los Angeles"
              region: "CA"
              region_id: 12
              postcode: "90210"
              country_code: "US"
              telephone: "123-456-0000"
              save_in_address_book: true
            }
          }
        }
      ) {
        cart {
          billing_address {
            firstname
            lastname
            company
            street
            city
            region{
              code
              label
            }
            postcode
            telephone
            country {
              code
              label
            }
          }
        }
      }
    }`,
    setShippingMethod: `mutation {
      setShippingMethodsOnCart(input: {
        cart_id: "CART_ID"
        shipping_methods: [
          {
            carrier_code: "flatrate"
            method_code: "flatrate"
          }
        ]
      }) {
        cart {
          shipping_addresses {
            selected_shipping_method {
              carrier_code
              method_code
              carrier_title
              method_title
            }
          }
        }
      }
    }`,
    setGuestEmail: `mutation {
      setGuestEmailOnCart(input: {
        cart_id: "CART_ID"
        email: "guest@example.com"
      }) {
        cart {
          email
        }
      }
    }`,
    setPaymentMethod: `mutation {
      setPaymentMethodOnCart(input: {
          cart_id: "CART_ID"
          payment_method: {
            code: "stripe_payments"
            stripe_payments: {
              cc_stripejs_token: "pm_card_visa"
            }
          }
      }) {
        cart {
          selected_payment_method {
            code
          }
        }
      }
    }`,
    placeOrder: `mutation {
      placeOrder(input: {cart_id: "CART_ID"}) {
        order {
          order_number
        }
      }
    }`
}

module.exports = mutations;

