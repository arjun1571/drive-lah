import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe.js has not loaded yet.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (cardElement) {
      console.log("Card input captured:", cardElement);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border p-4 rounded-lg">
        <CardElement />
      </div>
    </form>
  );
};

export default CheckoutForm;
