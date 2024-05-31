import React from 'react';

function App() {
  return (
    <div>
      <div className="mt-20 flex justify-center">
        <div className="border-4 border-red-500 rounded-xl p-4 w-5/6 sm:w-2/5">
          <div className="flex justify-center text-black font-bold text-2xl">
            Digital Team
          </div>
          <div className="flex justify-center mt-6 text-zinc-400 font-bold text-sm text-center">
            <div className="bg-white w-full p-8 space-y-4">
              <div>Name-Surname</div>
              <input placeholder="Pick Your Name Surname" className="bg-zinc-200 rounded-xl p-2 w-full" />
              <div>Mail</div>
              <input placeholder="Enter Your Mail" className="bg-zinc-200 rounded-xl p-2 w-full" />
              <div>Password</div>
              <input placeholder="Enter Your Password" className="bg-zinc-200 rounded-xl p-2 w-full" />
              <div>Team ID</div>
              <input placeholder="Enter Your Accoun ID" className="bg-zinc-200 rounded-xl p-2 w-full" />
              <div className="grid justify-end">
                <div className="bg-red-500 px-6 py-2 rounded-xl text-white cursor-pointer">
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <div className="border-4 border-red-500 rounded-xl p-4 w-5/6 sm:w-2/5">
          <div className="flex justify-center text-black font-bold text-2xl">
            Account
          </div>
          <div className="flex justify-center mt-6 text-zinc-600 font-bold text-sm text-center">
            <div className="bg-white w-full p-8 space-y-4">
              <div>Name</div>
              <input placeholder="Enter Your Name" className="bg-zinc-200 rounded-xl p-2 w-full" />
              <div>Company Name</div>
              <input placeholder="Enter Your Company Name" className="bg-zinc-200 rounded-xl p-2 w-full" />
              <div>URL</div>
              <input placeholder="Enter Your url" className="bg-zinc-200 rounded-xl p-2 w-full" />
              <div className="grid justify-end">
                <div className="bg-red-500 px-6 py-2 rounded-xl text-white cursor-pointer">
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
