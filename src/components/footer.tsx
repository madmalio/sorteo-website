import { Coffee } from "lucide-react";
import { SiGithub } from "react-icons/si";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-8 py-6 sm:flex-row">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Sorteo. All Rights Reserved.
        </p>
        <div className="mt-4 flex items-center gap-6 sm:mt-0">
          {/* Ko-fi Link */}
          <a
            href="#" // TODO: Add your Ko-fi link here
            target="_blank"
            rel="noopener noreferrer"
            title="Support on Ko-fi"
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Coffee className="h-6 w-6" />
          </a>
          {/* GitHub Link */}
          <a
            href="https://github.com/madmalio/sorteo"
            target="_blank"
            rel="noopener noreferrer"
            title="View on GitHub"
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <SiGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
