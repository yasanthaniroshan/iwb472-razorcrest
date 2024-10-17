import { Button } from "@/components/ui/button";

import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import "./homepage.css";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <NavBar />
      <main className="flex-1">
        <section className="relative w-screen py-12 md:py-24 lg:py-32 xl:py-48 h-full z-0">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl text-blue-500 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to InvoTrak
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                The revolutionary app that simplifies your workflow and boosts
                productivity.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-5 mt-32 px-4 overflow-hidden">
            <img
              src={"/image3.jpg"}
              alt="Feature image 1"
              className="block w-60 h-auto max-w-full border-4 border-white m-10 rounded-3xl shadow-[0_0px_25px_-3px_rgba(0,0,0,0.3)]"
            />
            <img
              src={"/image2.jpg"}
              alt="Feature image 1"
              className="block w-96 h-auto max-w-full border-4 border-white m-10 rounded-2xl shadow-[0_0px_25px_-3px_rgba(0,0,0,0.3)]"
            />
            <img
              src={"/image4.jpg"}
              alt="Feature image 3"
              className="block w-60 h-auto max-w-full border-4 border-white m-10 rounded-3xl shadow-[0_0px_25px_-3px_rgba(0,0,0,0.3)]"
            />
          </div>
        </section>
        <section className="relative w-screen sm:h-[20vh] md:h-[50vh] lg:h-[75vh] py-12 md:py-24 lg:py-32 bg-blue-500 dark:bg-gray-800 z-10 shadow-[0_0_100px_-15px_rgba(0,0,0,0.3)] text-center flex justify-center items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl/none lg:mr-20 text-white mb-8">
              Automated Billing Emails
            </h1>
            <h2 className="text-lg sm:text-lg md:text-2xl lg:text-3xl font-light text-blue-50 text-white tracking-tighter sm:text-3xl mx-32">
              Simplifies billing by automating invoice generation, sending
              emails, and tracking payments in real-time. It's an easy-to-use
              platform designed to streamline your invoicing process, saving you
              time and helping you stay on top of your finances.
            </h2>
          </div>
        </section>
        <section className="relative pt-24 md:pt-32 lg:pt-42 z-100 h-[60vh]">
          <div className="text-center mb-32">
            <h1 className="text-3xl text-gray-400 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Features
            </h1>
          </div>
          <div className="flex flex-row w-screen">
            <img
              src={"/svg1.svg"}
              alt="svg1"
              className="sm:w-[18rem] md:w-[24rem] lg:w-[36rem] xl:w-[46rem] sm:pl-20 lg:pl-32 feature"
            />
            <div className="space-y-2 ml-20 content-center text-left w-full ">
              <h1 className="text-lg font-bold sm:text-xl md:text-2xl  text-teal-400 lg:text-4xl/none lg:mr-20">
                Automated Billing Emails
              </h1>
              <p className="text-gray-500 md:text-md dark:text-gray-400 mr-20">
                Automatically create and send billing emails, ensuring timely
                invoices and payment reminders.
              </p>
            </div>
          </div>
        </section>
        <section className="pt-12 md:pt-24 lg:pt-52 z-100  h-[60vh]">
          <div className="flex flex-row w-screen">
            <div className="space-y-2 mr-20 content-center text-right w-full">
              <h1 className="text-lg font-bold sm:text-xl md:text-2xl  text-amber-400 lg:text-4xl/none lg:ml-20">
                Customizable Invoice Templates
              </h1>
              <p className="text-gray-500 md:text-md dark:text-gray-400 lg:ml-20">
                Personalize your invoices with customizable templates, including
                your logo and payment details.
              </p>
            </div>
            <img
              src={"/svg2.svg"}
              alt="svg2"
              className="sm:w-[18rem] md:w-[24rem] lg:w-[36rem] xl:w-[46rem] sm:pr-20 lg:pr-32 feature"
            />
          </div>
        </section>
        <section className="pt-12 md:pt-24 lg:pt-72 h-[60vh] mb-24 md:mb-36 lg:mb-60">
          <div className="flex flex-row w-screen">
            <img
              src={"/svg1.svg"}
              alt="svg1"
              className="sm:w-[18rem] md:w-[24rem] lg:w-[36rem] xl:w-[46rem] sm:pl-20 lg:pl-32 feature z-100"
            />
            <div className="space-y-2 ml-20 content-center w-full">
              <h1 className="text-lg font-bold sm:text-xl text-green-400 md:text-2xl lg:text-4xl/none lg:mr-20">
                Real-Time Payment Tracking
              </h1>
              <p className="text-gray-500 md:text-md dark:text-gray-400 mr-20">
                Instantly track payments with real-time updates for completed,
                pending, or overdue invoices.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
