function About() {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-full flex flex-col p-4 gap-4 mt-6 md:mt-0 md:w-1/2 md:border md:border-dashed md:border-black md:rounded-2xl">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <p className="text-md flex flex-col gap-2">
            <b>
              Text Utils: A Personal Project for Building User-Friendly Tools{" "}
            </b>
            <p>
              Text Utils started as a personal exploration of the powerful
              features offered by React and Tailwind CSS. We're passionate about
              creating user-friendly web applications that streamline daily
              tasks. This project serves as a platform for us to experiment with
              different functionalities and design patterns, ultimately aiming
              to develop a collection of handy text manipulation tools.
            </p>
            <b className="tex-xl">
              Our Mission: Empowering Users Through Text Transformation{" "}
            </b>
            <p>
              Our core mission is to empower users with a set of accessible and
              easy-to-use text manipulation tools. We want to provide users with
              the ability to transform their text efficiently, saving them
              valuable time and effort.
            </p>
            <b className="tex-xl">Current Features and Ongoing Development:</b>
            <p>
              Right now, Text Utils offers basic case conversion functionalities
              (uppercase and lowercase), allowing users to easily switch between
              different text formats. The application also includes a clear
              preview area for users to copy the transformed text. We're
              actively working on expanding the toolset to include a wider range
              of functionalities.
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
