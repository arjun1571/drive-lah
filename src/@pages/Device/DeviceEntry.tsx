import { useState } from "react";
import FileUpload from "../../@components/Input/FileUpload";
import Input from "../../@components/Input/Input";

const DeviceEntry = ({ deviceNumber }: { deviceNumber: number }) => {
  const [isDeviceOwned, setIsDeviceOwned] = useState(false);

  const handleToggle = () => {
    setIsDeviceOwned(!isDeviceOwned);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div className="p-4">
      <h4 className="text-md font-semibold text-gray-500">Device {deviceNumber}</h4>
      <div className="flex justify-between w-full gap-10 mt-3">
        <div className="md:w-1/2">
          <Input label="Device Type" placeholder="Enter device type" type="text" noMargin />
          {isDeviceOwned && (
            <Input label="Serial Number" placeholder="Enter the serial number of this device" type="text" />
          )}
        </div>
        <div className="md:w-1/2">
          <div className="flex items-center justify-between">
            <h6 className="text-gray-500 text-md font-semibold">Bringing your own device?</h6>
            <div
              onClick={handleToggle}
              className={`ml-4 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                isDeviceOwned ? "bg-sky-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  isDeviceOwned ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
          <p className="text-gray-500 font-semibold mt-2">
            <small>
              Toggle this on if you are bringing your own device. Leave it off if Drive Mate is to provide the device.
            </small>
          </p>
          {isDeviceOwned && (
            <>
              <p className="text-sm text-gray-500 font-medium mt-3">Upload an image of the device</p>
              <FileUpload label="Click to upload" onChange={handleFileChange} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default DeviceEntry;
