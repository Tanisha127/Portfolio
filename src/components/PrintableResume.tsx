import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

// Access resume URL from Vite environment variable
const resumeUrl = import.meta.env.VITE_RESUME_URL || "/Portfolio/resume.pdf";

const PrintableResume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center bg-brand-purple text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all mb-8"
      >
        <Download className="mr-2 h-5 w-5" />
        Download Resume
      </motion.button>
    </div>
  );
};

export default PrintableResume;
