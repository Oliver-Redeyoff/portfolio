import "./RoundAbout.css";

import { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import ReactCurvedText from "react-curved-text";

function RoundAbout(props) {
  const [options, setOptions] = useState({});
  const [size, setSize] = useState(100);
  const ref = useRef(null);

  useEffect(() => {
    setSize(ref.current.clientHeight);
  });

  useEffect(() => {
    setOptions(props.options);
  }, [props]);

  function drawCurvedText(key) {
    const index = getIndexOfKey(key);

    return (
      <div key={key} className="pointer-events-none absolute left-0 top-0">
        <ReactCurvedText
          width={size}
          height={size}
          cx={size / 2}
          cy={size / 2}
          rx={size / 2 - 10}
          ry={size / 2 - 10}
          startOffset={(Math.PI * size) / 4 + ((Math.PI * size) / 10) * index}
          text={options[key].name}
          textPathProps={{ textAnchor: "middle" }}
          textProps={{
            className: "option-text-left",
            fill: props.theme == "dark" ? "white" : "black",
            onClick: () => {
              props.setSelectedOption(key);
            },
          }}
        />
      </div>
    );
  }

  function getIndexOfKey(key) {
    return Object.keys(props.options).indexOf(key);
  }

  return (
    <div className="relative h-[100%] w-[100%]">
      {Object.keys(options).map((key, index) => (
        <AnimatePresence>
          {key == props.selectedOption && (
            <motion.div
              className="absolute bottom-[25%] left-0 flex w-[100%] items-end justify-center text-5xl"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              // transition={{ duration: 1 }}
            >
              {options[props.selectedOption]?.icon}
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      <div
        className="rotate-[ absolute left-[12%] top-[50%] flex w-[76%] translate-y-[-50%] justify-end dark:text-white"
        style={{ rotate: 90 - props.selectedAngle + "deg" }}
      >
        {"->"}
      </div>

      <motion.div
        className="round-about box-border h-full w-full rounded-full border-2 border-dotted border-gray-400 p-8"
        animate={{
          rotate:
            (getIndexOfKey(props.selectedOption) * 380) / 10 -
            props.selectedAngle +
            0.1, // we use 380 instead of 360 as it wasn't aligning
        }}
        transition={{
          type: "spring",
          bounce: 0.5,
        }}
        ref={ref}
      >
        <div className="box-border h-full w-full rounded-full border-2 border-dotted border-gray-400"></div>

        {Object.keys(options).map((option) => drawCurvedText(option))}
      </motion.div>
    </div>
  );
}

export default RoundAbout;
