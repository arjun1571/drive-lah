import React, { useState } from "react";
import SubscriptionCard from "../../@components/SubscriptionCard/SubscriptionCard";
import Checkbox from "../../@components/CheckBox/CheckBox";
import CheckoutForm from "./CheckoutForm";

interface Plan {
  id: number;
  title: string;
  option1: string;
  option2: string;
  option3: string;
}

const plans: Plan[] = [
  {
    id: 1,
    title: "Just Mates",
    option1: "Bring your own GPS",
    option2: "Mileage reporting to be done by you",
    option3: "In-person key handover to guests",
  },
  {
    id: 2,
    title: "Good Mates",
    option1: "Primary GPS included",
    option2: "Automated mileage calculations",
    option3: "In-person key handover to guests",
  },
  {
    id: 3,
    title: "Pro Mates",
    option1: "Keyless access technology",
    option2: "Automated mileage calculations",
    option3: "Remote handover to guests",
  },
];

const Subscription: React.FC = () => {
  const [activePlan, setActivePlan] = useState<Plan | null>(plans[0]);
  const [gpsChecked, setGpsChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const selectPlan = (plan: Plan) => {
    setActivePlan(activePlan?.id === plan.id ? null : plan);
  };

  const handleGpsCheckboxChange = (checked: boolean) => {
    setGpsChecked(checked);
  };

  const handleTermsCheckboxChange = (checked: boolean) => {
    setTermsChecked(checked);
  };

  return (
    <div className="">
      <div className="p-4">
        <h1 className="text-2xl text-[#009999] font-semibold">Subscription Plan</h1>
        <p className="my-2 text-gray-600 font-semibold">Select the ideal subscription for your list</p>
      </div>
      <p className="border-b-2 border-gray-50 w-full"></p>

      <div className="p-4">
        <p className="text-gray-600 font-semibold">Select your plan</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-3">
          {plans.map((plan) => (
            <SubscriptionCard key={plan.id} plan={plan} activePlan={activePlan} selectPlan={selectPlan} />
          ))}
        </div>
      </div>
      <p className="border-b-2 border-gray-50 w-full mt-2"></p>

      <div className="p-4">
        <p className="text-gray-600 font-semibold text-xl">Select add-ons for your subscription</p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-2">
          <div className="md:w-1/2 order-last">
            <Checkbox
              label="BYO secondary GPS-$5/month"
              checked={gpsChecked}
              onChange={handleGpsCheckboxChange}
              disabled={false}
            />
            {activePlan?.title === "Good Mates" || activePlan?.title === "Pro Mates" ? (
              <>
                <p className="text-md text-gray-500 mt-3 mb-2 font-semibold">Add Card Details</p>
                <CheckoutForm />
              </>
            ) : (
              ""
            )}
          </div>
          <div className="md:w-1/2">
            {activePlan?.title === "Good Mates" && (
              <Checkbox
                label="Accept Terms and Conditions"
                checked={termsChecked}
                onChange={handleTermsCheckboxChange}
                disabled={false}
              />
            )}
            {activePlan?.title === "Pro Mates" && (
              <Checkbox
                label="Between trip insurance (coming soon)"
                checked={termsChecked}
                onChange={handleTermsCheckboxChange}
                disabled={false}
              />
            )}
          </div>
        </div>
      </div>
      <p className="border-b-2 border-gray-50 w-full mt-2"></p>

      <div className="p-4">
        <p className="text-gray-600 font-semibold text-md">
          Learn more about the plans here -{" "}
          <span className="text-sky-600 text-xl cursor-pointer">What is the right plan for me?</span>
        </p>
        <p className="mt-2">
          You will be able to switch between plans easily later as well. Speak to our host success team if you need any
          clarifications.
        </p>
      </div>
    </div>
  );
};

export default Subscription;
