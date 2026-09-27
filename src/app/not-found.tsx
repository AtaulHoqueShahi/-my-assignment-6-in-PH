import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0b0d0f] px-4">
      <div className="w-full max-w-xl text-center">

        <p className="text-7xl font-black tracking-tight text-[#ccff00] sm:text-8xl">
          404
        </p>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
          PAGE NOT FOUND
        </p>

        <h1 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
          Nothing Here
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500">
          The workout or page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
        >
          Go to Workouts
        </Link>

      </div>
    </main>
  );
};

export default NotFound;