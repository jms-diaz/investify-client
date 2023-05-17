const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row md:w-3/4 mx-auto content-center justify-center p-10"
    >
      <div className="bg-white h-96 w-full p-6 rounded shadow-xl">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Get In Touch</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde neque
          deserunt amet repudiandae at. Adipisci libero repudiandae, enim nulla
          at tempora ipsum. Ut nihil atque delectus enim eaque quos totam?
        </p>
      </div>
      <div className="gradient h-96 w-full p-6 rounded shadow-xl">
        <h2 className="text-xl md:text-2xl font-bold mb-3">Contact Us</h2>

        <form>
          <div className="mb-3">
            <label className="mb-2 block font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"
            />
          </div>

          <div className="mb-3">
            <label className="mb-2 block font-semibold">Inquiries</label>
            <textarea
              placeholder="Enter your inquiries"
              rows={5}
              className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500"
            ></textarea>
          </div>

          <div className="mb-3 flex items-end">
            <button className="mb-2 font-bold text-center text-black bg-white px-6  py-2 rounded-md">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
