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
      <div key={key} className="pointer-events-none absolute left-0 top-0 font-bold text-xl">
        <ReactCurvedText
          width={size}
          height={size}
          cx={size / 2}
          cy={size / 2}
          rx={size / 2 - 10}
          ry={size / 2 - 10}
          startOffset={
            (Math.PI * size) / 4.6 +
            ((Math.PI * size) / props.optionSpacing) * index
          }
          text={options[key].name}
          textPathProps={{ textAnchor: "middle" }}
          textProps={{
            className: "option-text-left",
            // fill: props.theme == "dark" ? "white" : "#1e293b",
            fill:
              props.theme == "dark"
                ? options[key].darkColor ?? "black"
                : options[key].lightColor ?? "white",
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
              className="absolute flex h-[100%] w-[100%] top-0 left-0 items-center justify-center text-6xl"
              // style={{
              //   left:
              //     size / 2 -
              //     40 +
              //     Math.cos((90 - props.selectedAngle) * (Math.PI / 180)) *
              //       (size * props.iconPosition),
              //   top:
              //     size / 2 -
              //     40 +
              //     Math.sin((90 - props.selectedAngle) * (Math.PI / 180)) *
              //       (size * props.iconPosition),
              // }}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
            >
              {options[props.selectedOption]?.icon}
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      <div
        className="absolute left-[65px] top-[50%] flex translate-y-[0%] justify-end transition-all dark:text-white"
        style={{
          rotate: 90 - props.selectedAngle + "deg",
          width: "calc(100% - 130px)",
        }}
      >
        {"->"}
      </div>

      <motion.div
        className="round-about box-border h-full w-full rounded-full border-2 border-dotted border-gray-400 p-8"
        animate={{
          rotate:
            (getIndexOfKey(props.selectedOption) * 380) / props.optionSpacing -
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
