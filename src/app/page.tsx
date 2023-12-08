import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Home() {
  /*const handleSubmit = async (data) => {
    try {
      await fetch("/api/add-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
    onSubmit={handleSubmit}
  };*/
  return (
    <form>
      <div className="mx-auto max-w-2xl pt-10">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Greybacks FTC Scouting Form
          </h2>
          <div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Team Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="team-number"
                    id="team-number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Team Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="team-name"
                      id="team-name" //id
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Qualification Match Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="qualification-number"
                    id="qualification-number" //id
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Cycles
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="cycles"
                    id="cycles" //id
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <label className="block text-sm font-medium text-gray-900 col-span-3">
                Autonomous Position
                <div className="mt-2">
                  <select
                    id="autonomous-position"
                    name="autonomous-position"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
                  >
                    <option>Towards Backboard</option>
                    <option>Towards Landing Zone</option>
                  </select>
                </div>
              </label>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Drone
                </label>
                <div className="mt-2">
                  <select
                    name="drone"
                    id="drone" //id
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>N/A (+0 Points)</option>
                    <option>Landing Zone 1 (+30 Points)</option>
                    <option>Landing Zone 2 (+20 Points)</option>
                    <option>Landing Zone 3 (+10 Points)</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Additional Notes
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="notes"
                          id="notes" //id
                          rows={10}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  Climb Time
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="climb"
                    id="climb"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Additional Notes
            </label>
            <div className="mt-2">
              <textarea
                id="notes"
                name="notes"
                rows={10}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
