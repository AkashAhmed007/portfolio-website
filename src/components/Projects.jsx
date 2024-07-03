export default function Projects() {
  return (
    <div className="border-b-2">
      <h1 className="text-3xl font-bold text-center p-5 bg-black text-white">Projects</h1>
      <div className="bg-black text-white lg:grid lg:grid-cols-2 lg:gap-2 pr-5">
        <div className="shadow-xl m-2 rounded-md">
          <figure>
            <img
            className="hover:scale-75 hover:transition delay-200 duration-500 ease-in-out transform-gpu translate-x-4"
              src="real.PNG"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">All-in-One Reality Hub</h2>
            <p>It is a real-state Websites.</p>
            <div className="card-actions">
            <a
                rel="noopener noreferrer"
                href="https://darling-vacherin-0487e1.netlify.app/"
                target="_blank"
                className="px-2 py-2 text-lg font-semibold border border-violet-400 rounded dark:bg-violet-600 dark:text-gray-50"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-xl m-2">
          <figure>
            <img
            className="hover:scale-75 hover:transition delay-200 duration-500 ease-in-out transform-gpu translate-x-4"
              src="Media.PNG"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Help The Future</h2>
            <p>It is a volunteer management website.</p>
            <div className="card-actions">
            <a
                rel="noopener noreferrer"
                href="https://volunteer-management-auth.web.app/"
                target="_blank"
                className="px-2 py-2 text-lg font-semibold border border-violet-400 rounded dark:bg-violet-600 dark:text-gray-50"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-xl m-2">
          <figure>
            <img
            className="hover:scale-75 hover:transition delay-200 duration-500 ease-in-out transform-gpu translate-x-4"
              src="employee.PNG"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">People-HR</h2>
            <p>It is a employee management website.</p>
            <div className="card-actions">
            <a
                rel="noopener noreferrer"
                href="https://fancy-paletas-055252.netlify.app/"
                target="_blank"
                className="px-2 py-2  text-lg font-semibold border border-violet-400 rounded dark:bg-violet-600 dark:text-gray-50"
              >
               View Details
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-xl m-2">
          <figure>
            <img
            className="hover:scale-75 hover:transition delay-200 duration-500 ease-in-out transform-gpu translate-x-4"
              src="book.PNG"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Book Vibe</h2>
            <p>It is Book Review and Library website.</p>
            <div className="card-actions">
            <a
                rel="noopener noreferrer"
                href="https://6605a15fc09bc5008398c2a3--eloquent-griffin-c087a0.netlify.app/"
                target="_blank"
                className="px-2 py-2  text-lg font-semibold border border-violet-400 rounded dark:bg-violet-600 dark:text-gray-50"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
