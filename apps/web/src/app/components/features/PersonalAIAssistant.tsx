export const PersonalAIAssistant = () => {
  return (
    <div>
      <div>
        <h3 className="font-black text-xl tracking-wider">
          Personal assistant
        </h3>
        <p>
          Your personal assistant curates a todo list and schedules events for
          you based on messages you receive.
        </p>
      </div>
      <div className="h-8"></div>
      <div className="border-2 border-gray-700 rounded-lg p-4 flex justify-end">
        <div className="border-2 border-gray-700 rounded-lg p-2 w-[60%]">
          <div className="pb-4 flex justify-end">
            <div className="w-6 h-6 rounded-full bg-red-300"></div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="bg-gray-600/30 h-[24px] p-[4px] rounded-md">
              <div className="w-[16px] h-[16px] bg-white/30 rounded-full"></div>
            </div>

            <div className="bg-gray-600/30 h-[24px] p-[4px] rounded-md">
              <div className="w-[16px] h-[16px] bg-white/30 rounded-full"></div>
            </div>

            <div className="bg-gray-600/30 h-[24px] p-[4px] rounded-md">
              <div className="w-[16px] h-[16px] bg-white/30 rounded-full"></div>
            </div>
          </div>
          <div className="h-8"></div>
          <div className="grid grid-cols-3 gap-1">
            <div className="bg-green-600/30 rounded-md h-6"></div>
            <div className="bg-green-400/30 rounded-md h-12"></div>
            <div className="bg-green-600/30 rounded-md h-6"></div>
            <div className="bg-green-800/30 rounded-md h-12"></div>
            <div className="bg-green-600/30 rounded-md h-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
