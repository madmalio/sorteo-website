"use client";

import { Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ThankYouModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ThankYouModal({ isOpen, onOpenChange }: ThankYouModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="border-gray-200 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Thank You for Downloading!
          </DialogTitle>
          <DialogDescription className="pt-4 text-gray-600 dark:text-gray-400">
            {
              "Your download has started. If you find Sorteo useful, please consider supporting its development with a tip!"
            }
          </DialogDescription>
        </DialogHeader>
        <a
          href="#" // TODO: Link to your Ko-fi page
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-pink-700"
        >
          <Heart className="mr-2 h-5 w-5" />
          Support the Project
        </a>
      </DialogContent>
    </Dialog>
  );
}
