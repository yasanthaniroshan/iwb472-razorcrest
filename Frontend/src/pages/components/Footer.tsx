export default function Footer() {
  return (
    <>
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
    </>
  );
}
