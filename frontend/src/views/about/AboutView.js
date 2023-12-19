import "./AboutView.css";

import { motion, AnimatePresence } from "framer-motion";

function AboutView(props) {
  const themes = ["light", "dark"];

  return (
    <div className="">
      <h1 className="m-0 mb-8 text-5xl">Hi there!</h1>
      <p>
        My name is Oliver Redeyoff, I am a software developer specialising in
        web development.
      </p>
    </div>
  );
}

export default AboutView;
