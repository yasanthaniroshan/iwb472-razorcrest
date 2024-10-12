import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <NavBar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 h-screen">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to YourApp
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
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <PricingCard
                title="Basic"
                price="$9.99"
                description="Perfect for individuals and small teams."
                features={["Feature 1", "Feature 2", "Feature 3"]}
              />
              <PricingCard
                title="Pro"
                price="$19.99"
                description="Ideal for growing businesses and organizations."
                features={[
                  "All Basic features",
                  "Feature 4",
                  "Feature 5",
                  "Priority support",
                ]}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                description="Tailored solutions for large-scale operations."
                features={[
                  "All Pro features",
                  "Custom integrations",
                  "Dedicated account manager",
                  "24/7 support",
                ]}
              />
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

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

function PricingCard({
  title,
  price,
  description,
  features,
}: PricingCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{price}</p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <ArrowRight className="w-4 h-4 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
