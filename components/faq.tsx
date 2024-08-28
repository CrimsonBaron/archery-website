"use client";

import { easeInOut, motion } from "framer-motion";
import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> =
  function AccordionItemComponent({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <motion.header
          animate={{ backgroundColor: isOpen ? "bg-gray-100" : "bg-white" }} // Optional highlight on open
          className="p-4 cursor-pointer border-b border-gray-300 dark:border-gray-700 flex justify-start items-center"
          initial={false}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, opacity: isOpen ? 0.5 : 1 }}
            className={`text-3xl ${isOpen ? " text-current/20" : "text-primary"} px-2 flex items-center justify-center`}
          >
            +
          </motion.span>
          {title}
        </motion.header>
        <motion.div
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden"
          initial={false}
          transition={{ duration: 0.3, ease: easeInOut }}
        >
          <div className="p-4">
            {" "}
            {/* Conditional padding */}
            {children}
          </div>
        </motion.div>
      </div>
    );
  };

const Faq: React.FC = function FaqComponent() {
  return (
    <>
      <AccordionItem title="How do I install Arc Search?">
        <div>Ahoj</div>
      </AccordionItem>
      <AccordionItem title="How do I install Arc Search?">
        <div>Ahoj</div>
      </AccordionItem>
      <AccordionItem title="How do I install Arc Search?">
        <div>Ahoj</div>
      </AccordionItem>
      <AccordionItem title="How do I install Arc Search?">
        <div>Ahoj</div>
      </AccordionItem>
      <AccordionItem title="How do I install Arc Search?">
        <div>Ahoj</div>
      </AccordionItem>
    </>
  );
};

export default Faq;
