import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Layers, Zap } from "lucide-react";
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
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
        <section className="relative w-screen py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 z-10 shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.1)]">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <FeatureCard
                icon={<Zap className="w-8 h-15 mb-4" />}
                title="Lightning Fast"
                description="Experience unparalleled speed and performance."
              />
              <FeatureCard
                icon={<Layers className="w-8 h-15 mb-4" />}
                title="Highly Customizable"
                description="Tailor the app to fit your unique needs and preferences."
              />
              <FeatureCard
                icon={<Code className="w-8 h-15 mb-4" />}
                title="Developer Friendly"
                description="Built with developers in mind, offering powerful APIs and integrations."
              />
            </div>
          </div>
        </section>
        <section className="w-screen py-12 md:py-24 lg:py-32">
          <div className="flex flex-row w-screen">
            <img src={"/svg1.svg"} alt="svg1" className="w-[38rem] pl-32" />
            <div className="space-y-2">
              <h1 className="text-xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Feature 1
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                The revolutionary app that simplifies your workflow and boosts
                productivity.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
