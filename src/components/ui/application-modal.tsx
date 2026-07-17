"use client";

import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { type LeadSource } from "@/components/ui/application-form";
import { ApplicationExperience } from "@/components/ui/application-experience";

type ApplicationModalProps = {
  isOpen: boolean;
  leadSource: LeadSource;
  onClose: () => void;
  resetSignal?: number;
};

export function ApplicationModal({
  isOpen,
  leadSource,
  onClose,
  resetSignal = 0,
}: ApplicationModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(7,17,31,0.46)] px-4 py-6 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="relative max-h-[calc(100vh-2rem)] w-full max-w-5xl overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close application form"
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(109,132,170,0.16)] bg-white/82 text-[var(--muted)] shadow-[0_12px_26px_rgba(16,32,58,0.08)] transition hover:text-[var(--foreground)]"
            >
              <X className="h-4 w-4" />
            </button>

            <div id={titleId} className="sr-only">
              Application form dialog
            </div>

            <ApplicationExperience
              leadSource={leadSource}
              resetSignal={resetSignal}
              containerClassName="px-1 pb-1 pt-10 sm:px-2"
              formWrapperClassName="surface-card-strong p-5 sm:p-7"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
