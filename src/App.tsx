import { useState } from "react";
import NavBar from "./@components/NavBar/NavBar";
import "./App.css";
import Icon from "./@components/Icon/Icon";
import Location from "./@pages/Location/Location";
import About from "./@pages/About/About";
import Futures from "./@pages/Futures/Futures";
import Rules from "./@pages/Rules/Rules";
import Pricing from "./@pages/Pricing/Pricing";
import Promotion from "./@pages/Promotion/Promotion";
import Insurance from "./@pages/Insurance/Insurance";
import Subscription from "./@pages/Subscription/Subscription";
import Device from "./@pages/Device/Device";
import Picture from "./@pages/Picture/Picture";
import Button from "./@components/Button/Button";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const tabData = [
    "Location",
    "About",
    "Futures",
    "Rules",
    "Pricing",
    "Promotion",
    "Picture",
    "Insurance",
    "Subscription",
    "Device",
  ];

  const DefaultContent: React.FC = () => (
    <div>
      <h2 className="text-2xl font-semibold">Default Content</h2>
      <p>Select a tab to view its content.</p>
    </div>
  );

  const [activeTab, setActiveTab] = useState<string>("Subscription");
  const [completedTabs, setCompletedTabs] = useState<string[]>([
    "Location",
    "About",
    "Futures",
    "Rules",
    "Pricing",
    "Promotion",
    "Picture",
    "Insurance",
  ]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (!completedTabs.includes(tab)) {
      setCompletedTabs([...completedTabs, tab]);
    }
  };

  const handleNextClick = () => {
    const currentIndex = tabData.indexOf(activeTab);
    if (currentIndex >= 0 && currentIndex < tabData.length - 1) {
      const nextTab = tabData[currentIndex + 1];
      handleTabClick(nextTab);
    }

    if (!completedTabs.includes(activeTab)) {
      setCompletedTabs([...completedTabs, activeTab]);
    }
  };

  const stripePromise = loadStripe("your-publishable-key");

  const renderContent = () => {
    switch (activeTab) {
      case "Location":
        return <Location />;
      case "About":
        return <About />;
      case "Futures":
        return <Futures />;
      case "Rules":
        return <Rules />;
      case "Pricing":
        return <Pricing />;
      case "Promotion":
        return <Promotion />;
      case "Picture":
        return <Picture />;
      case "Insurance":
        return <Insurance />;
      case "Subscription":
        return (
          <Elements stripe={stripePromise}>
            <Subscription />
          </Elements>
        );
      case "Device":
        return <Device />;
      default:
        return <DefaultContent />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 ">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>

      <div className="flex-grow overflow-y-auto scrollable-content md:p-0 p-3">
        <div className="md:flex max-w-7xl mx-auto md:pt-14 md:pb-32 pb-14">
          {/* Left side tabs - conditional rendering for select on small screens */}
          <div className="md:w-1/6 md:p-4">
            {/* Display buttons on medium and larger screens */}
            <div className="hidden md:block">
              {tabData.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`flex items-center justify-between w-full p-2 mb-2 font-bold cursor-pointer ${
                    activeTab === tab
                      ? " border-l-4 p-2 border-[#009999] text-[#009999] font-bold"
                      : " border-l-4 border-gray-50"
                  } ${
                    completedTabs.includes(tab)
                      ? "text-[#009999]"
                      : !completedTabs.includes(tab) && activeTab === tab
                      ? "text-[#009999]"
                      : "text-gray-400"
                  }`}
                >
                  <span>{tab}</span>
                  {completedTabs.includes(tab) && <Icon className="text-[#009999]" name="check_circle" />}
                </button>
              ))}
            </div>
            {/* Display select dropdown on small screens */}
            <div className="md:hidden ">
              <select
                value={activeTab}
                onChange={(e) => handleTabClick(e.target.value)}
                className="w-full p-3 mb-2 border border-gray-300 rounded"
              >
                {tabData.map((tab) => (
                  <option key={tab} value={tab}>
                    {tab}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right side content */}
          <div className="md:w-4/5 bg-white border rounded-lg md:p-4 p-2">{renderContent()}</div>
        </div>
      </div>

      <div className="md:fixed bottom-0 w-full md:flex md:justify-center bg-white py-4 border-t-2 border-gray-100 md:ms-6">
        <div className="max-w-6xl w-full flex md:justify-end px-3">
          <Button
            className="hover:bg-yellow-500 bg-yellow-300 text-white md:px-20  md:w-auto w-full py-3 text-xl font-semibold rounded-lg"
            round="md"
            onClick={handleNextClick}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
