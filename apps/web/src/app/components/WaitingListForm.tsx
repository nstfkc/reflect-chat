export const WaitingListForm = () => {
  return (
    <div>
      <span className="text-2xl font-bold">Join to the waiting list</span>
      <div className="flex flex-col md:flex-row items-start gap-8 rounded-lg p-4">
        <div className="w-full md:w-1/2">
          <div className="font-semibold">
            By joining to the waiting list you will get:
          </div>
          <ul className="list-disc list-inside pl-4">
            <li>
              Lifelong <strong>50%</strong> discount(*)
            </li>
            <li>Access to the reflect private community</li>
            <li>To make feature requests</li>
            <li>Early access to the beta apps</li>
            <li>To join development discussions</li>
          </ul>
          <div>And many more...</div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email" className="text-xs font-semibold">
              Email
            </label>
            <input
              className="bg-white/60 w-full rounded-md px-2 py-1 outline-alt1"
              type="email"
              name="email"
              value=""
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <div className="px-2"></div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <input
                  className="accent-secondary"
                  type="checkbox"
                  id="terms"
                  name="terms"
                  value=""
                />
                <label htmlFor="terms" className="">
                  I accept terms and conditions
                </label>
              </div>
              <a href="" className="font-bold text-sm underline">
                Terms and conditions
              </a>
            </div>
            <button className="bg-secondary text-primary px-8 py-2 rounded-md font-semibold">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
