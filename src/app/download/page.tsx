"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { FaWindows } from "react-icons/fa";
import { useState } from "react";
import { ThankYouModal } from "@/components/thank-you-modal";

export default function DownloadPage() {
  // State to control the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-slate-100 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
        <div className="w-full max-w-4xl flex-grow px-8 py-16">
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight">Downloads</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Download the latest version of Sorteo.
            </p>
            <Link
              href="/"
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              &larr; Back to Home
            </Link>
          </div>

          {/* Release List */}
          <div className="mt-16 space-y-12">
            {/* Version 1.0.0 - LATEST */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
              <div className="flex flex-col justify-between gap-6 sm:flex-row">
                <div>
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold">Version 1.0.0</h2>
                    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Latest
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Released on October 8, 2025
                  </p>

                  <div className="mt-4 flex items-center gap-2 rounded-md border border-gray-300 bg-gray-100 p-2 dark:border-gray-700 dark:bg-gray-800">
                    <FaWindows className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Windows
                    </span>
                  </div>
                </div>
                <a
                  href="/sorteo-v1.0.0-windows.zip"
                  download
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-lg bg-blue-600 px-6 text-base font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download (.zip)
                </a>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-800">
                <h3 className="font-semibold">What's New:</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Initial public release.</li>
                  <li>Core features: Move, Copy, and Dry Run.</li>
                  <li>Support for various sorting structures.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ThankYouModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
