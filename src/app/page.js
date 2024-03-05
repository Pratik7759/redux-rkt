import DisplayUser from "@/components/DisplayUser";
import DisplayUserForm from "@/components/forms/DisplayUserForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... lg:min-h-screen flex flex-col lg:flex-row gap-8 lg:gap-20 items-center justify-center px-10">
      <div className="mt-8">
        <Image
          height={500}
          width={500}
          src="/assets/images/resume_img_2.webp"
          alt="Resume Example"
          className="rounded-lg shadow-md"
        />
      </div>
      <div>
        <h1 className="text-4xl font-semibold mb-8">
          Welcome to Resume Builder
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-[500px]">
          Create a professional-looking resume in minutes with our easy-to-use
          resume builder. Showcase your skills, experiences, and achievements to
          stand out from the crowd.
        </p>
        <Link
          href="/forms/contacts"
          type="submit"
          className="whitespace-nowrap mt-6 w-full lg:w-1/2 flex justify-center mx-auto py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500"
        >
          Start Making Your Resume
        </Link>
      </div>
    </main>
  );
}
