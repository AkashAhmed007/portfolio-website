export default function Hero() {
  return (
    <div id="about" className="bg-black border-b-2">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:space-around gap-2">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="profile.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-xl"
            />
          </div>
          <div className="text-white flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold leading-none sm:text-4xl">
              I am, <br />
              <span className="dark:text-violet-600">Md. Akash Ahmed</span>
            </h1>
            <p className="mt-6 mb-6 text-lg sm:mb-8 p-7 border rounded-md">
              <span className="text-xl font-bold text-violet-600">Front-End Developer</span><br />
              I create user friendly fully responsive website as per customer requirements.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-2 py-2  text-lg font-semibold border border-violet-400 rounded dark:bg-violet-600 dark:text-gray-50"
              >
                See Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
