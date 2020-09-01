import React from "react";

const PhoneBookModal = ({ isPhoneBookModal, isContactAdd, phoneBook, handleContactAdd, handleModal }) => {
  return (
    <section>
      {isPhoneBookModal && (
        <div className="fixed inset-x-0 bottom-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div className={isPhoneBookModal ? "fixed inset-0 transition-opacity" : "hidden"}>
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
                {isContactAdd ? (
                  <h1 className="text-xl font-bold text-gray-600 ">Add Contacts</h1>
                ) : (
                  <h1 className="text-xl font-bold text-gray-600 ">Your Contacts</h1>
                )}
                <div>
                  {isContactAdd ? (
                    <div>
                      <button
                        onClick={handleContactAdd}
                        className="inline-flex object-center px-2 py-1 m-0 my-3 mr-2 font-sans text-base text-gray-700 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none "
                      >
                        Back
                      </button>
                      <button className="inline-flex object-center px-2 py-1 m-0 my-3 font-sans text-base text-white bg-blue-600 border border-gray-300 rounded-md shadow-sm focus:outline-none ">
                        Save
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={handleContactAdd}
                      className="inline-flex object-center px-2 py-1 m-0 my-3 font-sans text-base text-gray-700 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none "
                    >
                      Add Contact
                    </button>
                  )}
                </div>
              </header>

              <body>
                {isContactAdd ? (
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
                ) : (
                  <div>
                    {phoneBook &&
                      phoneBook.map((phone) => (
                        <div className="flex items-center mx-6 my-3 space-x-4">
                          <img
                            className="block w-16 h-16 mr-2 rounded-full"
                            src="https://source.unsplash.com/1600x900/?nature,water"
                            alt=""
                          />
                          <div>
                            <h2 className="font-bold text-gray-700">{phone.name}</h2>
                            <p className="text-gray-600 ">{phone.email}</p>
                            <p className="text-gray-600">{phone.phone_no}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
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

export default PhoneBookModal;
