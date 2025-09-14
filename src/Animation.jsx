
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Animation() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [showWishes, setShowWishes] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const playKeySound = () => {
    const audio = new Audio(
      "https://www.soundjay.com/mechanical/sounds/typewriter-key-1.mp3"
    );
    audio.play().catch(() => {});
  };

  const handleShowWishes = () => {
    setShowWishes(true);
    // play initial sound to unlock audio on mobile
    const audio = new Audio(
      "https://www.soundjay.com/mechanical/sounds/typewriter-key-1.mp3"
    );
    audio.play().catch(() => {});
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to right, #ec4899, #8b5cf6, #4338ca)",
        color: "white",
        overflow: "hidden",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {size.width > 0 && size.height > 0 && showWishes && (
        <Confetti width={size.width} height={size.height} />
      )}

      {!showWishes && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleShowWishes}
          style={{
            padding: "1rem 2rem",
            fontSize: "1.25rem",
            fontWeight: "bold",
            background: "white",
            color: "#8b5cf6",
            border: "none",
            borderRadius: "0.75rem",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            cursor: "pointer",
          }}
        >
          Click Me 🎉
        </motion.button>
      )}

      {showWishes && (
        <>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{
              background: "white",
              color: "black",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              maxWidth: "90%",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              🎂 Happy Birthday Meuamor🎉
            </h1>
            {/* <div style={{ fontSize: "1rem" }}>
              <ReactTyped
                strings={[
                  "Wishing you lots of happiness 🎁",
                  "Wishing you have a happy life ❤️",
                  "May all your dreams come true 💫",
                  "Have an amazing year ahead ❤️",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                onCharTyped={playKeySound}
              />
            </div> */}
            <div style={{ fontSize: "1rem", whiteSpace: "pre-line" }}>
  <ReactTyped
    strings={[
      "Wishing you lots of happiness 🎁\nWishing you have a happy life ❤️\nMay all your dreams come true 💫\nHave an amazing year ahead ❤️",
      "I Love You as always🖤🩶💞"
    ]}
    typeSpeed={50}
    showCursor={false}
    onCharTyped={playKeySound}
  />
</div>

          </motion.div>

          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", bounce: 0.5 }}
            style={{ marginTop: "2rem", fontSize: "2rem" }}
          >
            🎈🎈🎈
          </motion.div>
        </>
      )}
    </div>
  );
}
