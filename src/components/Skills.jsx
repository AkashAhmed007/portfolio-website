export default function Skills() {
  return (
    <div id="skill" className="bg-black text-white lg:h-50vh border-b-2 pb-5">
      <h1 className="text-3xl text-center p-5 font-bold">Skills</h1>
      <div className="lg:flex justify-center items-center lg:gap-10 md:gap-5 gap-3">
        <div className="lg:flex lg:flex-col justify-start items-start gap-3 p-5">
          <div>
            <p>HTML</p>
            <progress
              className="progress progress-primary w-96"
              value={80}
              max="100"
            ></progress>
          </div>
          <div>
            <p>CSS</p>
            <progress
              className="progress progress-secondary  w-96"
              value={70}
              max="100"
            ></progress>
          </div>
          <div>
            <p>Javascript</p>
            <progress
              className="progress progress-success w-96"
              value={75}
              max="100"
            ></progress>
          </div>
          <div>
            <p>React</p>
            <progress
              className="progress progress-warning w-96"
              value={50}
              max="100"
            ></progress>
          </div>
          <div>
            <p>Git/Github</p>
            <progress
              className="progress progress-warning w-96"
              value={50}
              max="100"
            ></progress>
          </div>
        </div>
        <div className="p-5">
          <div>
            <img src="./skill.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
