import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { IconDownload } from "@tabler/icons-react";

export const FloatingDownloadButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleDownload = () => {
    // Replace with your actual brochure PDF path
    const brochurePath = "/brochure/Brochure.pdf"; 
    const link = document.createElement("a");
    link.href = brochurePath;
    link.setAttribute("download", "Brochure.pdf"); // Suggests filename
    link.setAttribute("target", "_blank"); // Opens in a new tab/window
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed bottom-4 right-4 z-[9998]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleDownload}
        className={cn(
          "relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg",
          "bg-gray-50 text-neutral-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 transition-colors duration-200"
        )}
      >
        <IconDownload className="h-6 w-6" />
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -top-10 -right-2 text-sm bg-gray-800 text-white px-3 py-1 rounded-md whitespace-nowrap"
            >
              Download Brochure
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
