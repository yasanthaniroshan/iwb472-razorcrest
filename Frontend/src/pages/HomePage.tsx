import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <h1 className="font-bold">YourApp</h1>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Code className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Documentation
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Learn how to integrate our tools with your app.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/features" title="Features">
                      All the amazing things you can do.
                    </ListItem>
                    <ListItem href="/about" title="About">
                      Learn about our mission and values.
                    </ListItem>
                    <ListItem href="/blog" title="Blog">
                      Read our latest news and articles.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <h1>Pricing</h1>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center ml-auto space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
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
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <FeatureCard
                icon={<Zap className="w-10 h-10 mb-4" />}
                title="Lightning Fast"
                description="Experience unparalleled speed and performance."
              />
              <FeatureCard
                icon={<Layers className="w-10 h-10 mb-4" />}
                title="Highly Customizable"
                description="Tailor the app to fit your unique needs and preferences."
              />
              <FeatureCard
                icon={<Code className="w-10 h-10 mb-4" />}
                title="Developer Friendly"
                description="Built with developers in mind, offering powerful APIs and integrations."
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
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
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 YourApp. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <h1 className="text-sm hover:underline underline-offset-4">
                Terms of Service
              </h1>
              <h1 className="text-sm hover:underline underline-offset-4">
                Privacy Policy
              </h1>
              <h1 className="text-sm hover:underline underline-offset-4">
                Contact Us
              </h1>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface ListItemProps {
  className?: string;
  title: string;
  children?: ReactNode;
  [key: string]: any;
}

function ListItem({ className, title, children, ...props }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
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
