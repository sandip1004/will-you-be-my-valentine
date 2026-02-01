"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPos, setNoPos] = useState({ top: 0, left: 0 }); // for moving No button

  const yesButtonSize = noCount * 20 + 16;

 const phrases = [
  "No 🙈",
  "Are you sureee? 🥺",
  "What if Tapadipa asks really nicely? 💕",
  "Pretty pleaseee 🌸",
  "With extra love on top 💖",
  "What about a chocolate just for you, Swarna? 🍫",
  "Swarnaaa please 🥹",
  "I’ll be very very sad 😔",
  "Look at my puppy eyes 🐶👉👈",
  "Okay now I’m pouting 😗",
  "Still smiling though, for you 😊",
  "Just one tiny yes? 🤏",
  "Please babeee 💞",
  "You’re too cute to say no 😘",
  "I promise lots of hugs 🤗",
  "Okay… last try from Tapadipa 😅💗",
  "✨ Now you CAN’T say No to me, Swarna! 💖🥰",
];

  const handleNoClick = () => {
    // Only increment count if we are not on last phrase
    if (noCount < phrases.length - 1) {
      setNoCount(noCount + 1);
    }
    // If last phrase, do nothing → button "runs away"
  };

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const isLastPhrase = noCount === phrases.length - 1;

  // Move No button randomly **only after last phrase**
  const moveNoButton = () => {
    if (isLastPhrase) {
      const top = Math.floor(Math.random() * 200 - 100); // random offset
      const left = Math.floor(Math.random() * 200 - 100); // random offset
      setNoPos({ top, left });
    }
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center relative">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold text-pink-400 text-center">
          🎉 YAYYYY!!! I ❤️ YOU, Swarna!! 🎀
          <br />
          Tapadipa is floating on cloud nine ☁️💞
        </div>

        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl text-center text-pink-400 font-bold animate-pulse">
            💞 Swarna… will you be my Valentine? 🥰
          </h1>

          <div className="flex items-center relative">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            {/* No button */}
            <button
              onClick={handleNoClick}
              onMouseEnter={moveNoButton} // moves only after last phrase
              style={{
                position: "relative",
                top: noPos.top,
                left: noPos.left,
                transition: "0.2s ease",
              }}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
