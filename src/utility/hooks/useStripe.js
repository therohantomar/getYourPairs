import { loadStripe } from "@stripe/stripe-js";

let stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

export function useStripe(info) {
  const lineItems = [];
  info.forEach((element) => {
    let extractedObject = {
      quantity: element.quantity,
      price: element.priceId,
    };

    lineItems.push(extractedObject);
  });

  async function handlePayment() {
    try{
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems,
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
      });
  
      if (error) {
        console.log("Payment Failed", error);
      }

    }
    catch{
      console.error("some error in loading stripe!")
    }

  }
  return handlePayment;
}
