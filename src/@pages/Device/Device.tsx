import DeviceEntry from "./DeviceEntry";

const Device = () => {
  return (
    <div className="scrollbar-hide">
      <div className="p-4 scrollbar-hide">
        <h1 className="text-2xl text-[#009999] font-semibold">Device Management</h1>
        <p className="my-2 text-gray-500 font-semibold">
          Add details of the device, if any already installed on your car. If none, then continue to the next step.
        </p>
      </div>
      <p className="border-b-2 border-gray-50 w-full"></p>
      <DeviceEntry deviceNumber={1} />
      <p className="border-b-2 border-gray-50 w-full"></p>
      <DeviceEntry deviceNumber={2} />
      <p className="border-b-2 border-gray-50 w-full"></p>
      <DeviceEntry deviceNumber={3} />
    </div>
  );
};

export default Device;
