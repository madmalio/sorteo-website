import Image from "next/image";
import { Cog, Copy, Search, Heart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-100 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      {/* --- HERO SECTION --- */}
      <section className="flex max-w-4xl flex-col items-center p-8 text-center">
        <h1 className="pb-2 text-5xl font-bold leading-snug tracking-tight text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
          Effortless File Organization
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 md:text-xl">
          Sorteo is a simple yet powerful desktop utility to help you organize
          your digital files into clean, structured folders.
        </p>
        <a
          href="/download"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Download for Windows
        </a>
      </section>

      {/* --- SCREENSHOT --- */}
      <div className="mt-12 px-4">
        <Image
          src="/sorteo-screenshot.png"
          alt="Screenshot of the Sorteo application"
          width={1000}
          height={700}
          className="rounded-xl shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/20"
        />
      </div>

      {/* --- FEATURES SECTION --- */}
      <section className="w-full max-w-6xl py-24 px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Why Choose Sorteo?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Everything you need to conquer digital clutter.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm dark:bg-gray-800">
            <Cog className="h-12 w-12 text-blue-500" />
            <h3 className="mt-6 text-xl font-bold">Flexible Sorting</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {
                "Organize files by date, type, or create your own custom folder structures with an easy-to-use interface."
              }
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm dark:bg-gray-800">
            <Search className="h-12 w-12 text-blue-500" />
            <h3 className="mt-6 text-xl font-bold">Safe Operations</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {
                "Perform a 'Dry Run' to preview exactly where your files will go before you move or copy a single one."
              }
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm dark:bg-gray-800">
            <Copy className="h-12 w-12 text-blue-500" />
            <h3 className="mt-6 text-xl font-bold">Move or Copy</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {
                "Choose whether to move files to their new home or simply create a copy, leaving the original files untouched."
              }
            </p>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="w-full bg-white py-24 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Get Organized in 3 Simple Steps
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Start cleaning up your files in under a minute.
            </p>
          </div>
          <div className="mt-16 flex flex-col justify-between gap-12 md:flex-row md:gap-8">
            <div className="flex items-start gap-4">
              <div className="text-6xl font-bold text-gray-300 dark:text-gray-700">
                01
              </div>
              <div>
                <h3 className="text-xl font-semibold">Select Folders</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {
                    "Choose an origin folder with your messy files and a destination folder for the organized results."
                  }
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-6xl font-bold text-gray-300 dark:text-gray-700">
                02
              </div>
              <div>
                <h3 className="text-xl font-semibold">Choose Rules</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {
                    "Select which file types to sort and pick a folder structure, like `Year/Month` or `File Type`."
                  }
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-6xl font-bold text-gray-300 dark:text-gray-700">
                03
              </div>
              <div>
                <h3 className="text-xl font-semibold">Start Sorting</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {
                    "Click 'Start Sorting' to move or copy your files into a clean, predictable folder structure."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="w-full py-24">
        <div className="mx-auto max-w-4xl px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is Sorteo completely free?</AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  {
                    "Yes, Sorteo is 100% free to use. If you find it helpful, consider supporting its development with a tip."
                  }
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is Sorteo safe to use?</AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  {
                    "Absolutely. Sorteo only moves or copies files based on your commands. It does not delete anything, and the 'Dry Run' feature lets you preview all changes safely. The code is also open source for anyone to review."
                  }
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What operating systems does Sorteo support?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  {
                    "Currently, Sorteo is available for Windows. A macOS version is planned for the future."
                  }
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* NEW: Final Call to Action Section */}
      <section className="w-full bg-slate-100 py-20 dark:bg-gray-950">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Ready to Get Organized?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Download Sorteo for free and start conquering your digital clutter
            today.
          </p>
          <a
            href="/download"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Download for Windows
          </a>
        </div>
      </section>
    </main>
  );
}
