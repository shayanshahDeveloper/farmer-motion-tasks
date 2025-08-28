import { motion } from "motion/react";
import { useState } from "react";

const data = [
  { title: "This is Title 1", content: "This is the content of Item 1" },
  { title: "This is Title 2", content: "This is the content of Item 2" },
  { title: "This is Title 3", content: "This is the content of Item 3" },
  { title: "This is Title 4", content: "This is the content of Item 4" },
  { title: "This is Title 5", content: "This is the content of Item 5" },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItem = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {data.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => handleItem(index)}
            className="bg-gray-400 p-1 rounded"
          >
            {item.title}
          </button>

          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="bg-yellow-500 text-white">{item.content}</h1>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
