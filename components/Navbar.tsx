import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex flex-wrap justify-between items-center p-3 px-5 w-screen font-medium text-xl border-b-2">
      <h1 className="font-bold text-4xl">Chefy</h1>
      <div>
        <Link href="/about" className="m-10">
          About
        </Link>
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-m leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          Login
        </button>
      </div>
    </div>
  );
};
