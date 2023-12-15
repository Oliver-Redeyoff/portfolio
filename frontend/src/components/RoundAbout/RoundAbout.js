import "./RoundAbout.css";

import { useState, useEffect, useRef } from "react";

import ReactCurvedText from "react-curved-text";

function RoundAbout(props) {
  const [options, setOptions] = useState({});
  const [size, setSize] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setSize(ref.current.clientHeight);
  });

  useEffect(() => {
    setOptions(props.options);
  }, [props]);

  function drawCurvedText(key) {
    // var offset = 0;
    // console.log(index);
    // console.log(selectedOption % options.length);

    // const left_index =
    //   selectedOption == 0
    //     ? options.length - 1
    //     : (selectedOption - 1) % options.length;

    // const middle_index = selectedOption;

    // const right_index = (selectedOption + 1) % options.length;

    // if (index == left_index) {
    //   offset = (3.14 * size) / 8;
    // } else if (index == middle_index) {
    //   offset = ((3.14 * size) / 8) * 2;
    // } else if (index == right_index) {
    //   offset = ((3.14 * size) / 8) * 3;
    // } else {
    //   offset = ((3.14 * size) / 8) * 6;
    // }

    // var offset_index = index - selectedOption;

    const index = getIndexOfKey(key)

    return (
      <div key={key} className="pointer-events-none absolute left-0 top-0">
        <ReactCurvedText
          width={size}
          height={size}
          cx={size / 2}
          cy={size / 2}
          rx={size / 2 - 10}
          ry={size / 2 - 10}
          startOffset={((3.14 * size) / 4.2) + (3.14 * size) / 7 * index}
          text={options[key].name}
          textPathProps={{ textAnchor: "middle" }}
          textProps={{
            className: "option-text-left",
            onClick: () => {
              props.setSelectedOption(key);
            },
          }}
        />
      </div>
    );
  }

  function getIndexOfKey(key) {
    return Object.keys(props.options).indexOf(key)
  }

  return (
      <div className="w-[100%] h-[100%]">

        <div className="absolute bottom-[27%] left-[50%] text-5xl transform translate-x-[-50%]">{options[props.selectedOption]?.icon}</div>

        <div className="absolute bottom-[12%] left-[50%] rotate-90 transform translate-x-[-50%] dark:text-white">{"->"}</div>

        <div
          className="round-about box-border h-full w-full rounded-full p-8 border-2 border-dotted border-gray-400"
          ref={ref}
          style={{
            transform: "rotate(" + (getIndexOfKey(props.selectedOption) * 360 / 7) + "deg)",
            transition: "all 0.3s",
          }}
        >

          <div className="box-border h-full w-full rounded-full border-2 border-dotted border-gray-400"></div>

          {Object.keys(options).map((option) => drawCurvedText(option))}
        </div>
      </div>
  );
}

export default RoundAbout;
