import React, { useState } from "react";
import SubscriptionCard from "../../@components/SubscriptionCard/SubscriptionCard";

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

  const selectPlan = (plan: Plan) => {
    setActivePlan(activePlan?.id === plan.id ? null : plan);
  };

  return (
    <div className="">
      <div className="p-4">
        <h1 className="text-2xl text-[#009999] font-semibold">Subscription Plan</h1>
        <p className="my-2 text-gray-600 font-semibold">Select the ideal subscription for your list</p>
      </div>
      <p className="border-b-2 border-gray-50 w-full"></p>

      <div className=" p-4">
        <p className="text-gray-600 font-semibold">Select your plan</p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-3">
          {plans.map((plan) => (
            <SubscriptionCard key={plan.id} plan={plan} activePlan={activePlan} selectPlan={selectPlan} />
          ))}
        </div>

        {/* {activePlan && (
          <div className="mt-6 p-4 border rounded-md shadow-md bg-gray-50">
            <h3 className="text-xl font-semibold text-[#009999]">{activePlan.title} Details</h3>
          </div>
        )} */}
      </div>
      <p className="border-b-2 border-gray-50 w-full mt-2"></p>
      <div className="p-4">
        <p className=" text-gray-600 font-semibold  text-xl">Select add-one for your subscription</p>
      </div>
      <p className="border-b-2 border-gray-50 w-full mt-2"></p>
      <div className="p-4">
        <p className=" text-gray-600 font-semibold  text-md">
          Learn more about the plans here -{" "}
          <span className="text-sky-600 text-xl">What is the right plan for me ?</span>
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
