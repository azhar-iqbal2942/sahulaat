import React from "react";

const ProfileModal = ({ isEditModal, handleModal }) => {
  return (
    <section>
      {isEditModal && (
        <div className="fixed inset-x-0 bottom-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div className={isEditModal ? "fixed inset-0 transition-opacity" : "hidden"}>
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div
            className="overflow-hidden transition-all transform bg-white rounded shadow-xl sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <section>
              <header className="flex items-center justify-between h-10 mx-6 my-3 ">
                <h1 className="text-xl font-bold text-gray-600 ">Update Profile</h1>

                <div>
                  <button className="inline-flex object-center px-2 py-1 m-0 my-3 font-sans text-base text-white bg-blue-600 border border-gray-300 rounded-md shadow-sm focus:outline-none ">
                    Update
                  </button>
                </div>
              </header>
              <body>
                <form>
                  <div className="justify-between gap-2 mx-6 mt-3 lg:flex lg:flex-row sm:flex-col">
                    <div>
                      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-600 uppercase">
                        First Name
                      </label>
                      <input
                        className="block px-4 py-1 text-gray-700 border border-gray-400 rounded appearance-none focus:outline-none "
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-600 uppercase">
                        Last Name
                      </label>
                      <input
                        className="block px-4 py-1 text-gray-700 border border-gray-400 rounded appearance-none focus:outline-none "
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="justify-between gap-2 mx-6 mt-3 lg:flex lg:flex-row sm:inline-flex sm:align-middle ">
                    <div className="">
                      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-600 uppercase">
                        Email
                      </label>
                      <input
                        className="block px-4 py-1 text-gray-700 border border-gray-400 rounded appearance-none focus:outline-none "
                        type="email"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-600 uppercase">
                        Phone No
                      </label>
                      <input
                        className="block px-4 py-1 text-gray-700 border border-gray-400 rounded appearance-none focus:outline-none "
                        type="text"
                      />
                    </div>
                  </div>
                </form>
              </body>
            </section>
            <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  onClick={handleModal}
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                >
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfileModal;
