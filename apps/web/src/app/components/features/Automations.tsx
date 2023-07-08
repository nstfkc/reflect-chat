export const Automations = () => {
  return (
    <div>
      <div>
        <h3 className="font-black text-xl tracking-wider">Automations</h3>
        <p>
          Reflect allows you to hook into every event and create automations
          with ease for your workflows regardless of their complexity.
        </p>
      </div>
      <div className="h-8"></div>
      <div className="border-2 border-gray-700 rounded-lg p-4">
        <div>
          <div className="bg-green-600/30 rounded-md h-12"></div>
          <div className="px-12">
            <div className="h-12 w-2 bg-gradient-to-b from-green-600/30 to-red-600/30"></div>
          </div>
          <div className="bg-red-600/30 rounded-md h-12"></div>
          <div className="px-12 flex justify-end gap-16">
            <div className="h-12 w-2 bg-gradient-to-t from-green-600/30 to-red-600/30"></div>
            <div className="h-12 w-2 bg-gradient-to-t from-green-600/30 to-red-600/30"></div>
          </div>
          <div className="bg-green-600/30 rounded-md h-12"></div>
        </div>
      </div>
    </div>
  );
};
