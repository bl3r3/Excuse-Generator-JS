/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  //Get container
  let excuse = document.getElementById("excuse");

  //Sentences
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  //FUNCTION GET SENTENCE

  const getSentence = arr => {
    let result;
    let random = Math.floor(Math.random() * arr.length);

    //WITH FOREACH

    // arr.forEach((sentence, i) => {
    //     if (i === random) {
    //         result = sentence
    //     }
    // })

    //WITH FOR LOOP

    for (let i = 0; i < arr.length; i++) {
      if (i === random) {
        result = arr[i];
      }
    }
    return result;
  };

  //CREATE SENTENCE

  const createSentence = (who, action, what, when) => {
    let result = `${who} ${action} ${what} ${when}`;
    return (excuse.innerHTML = result);
  };

  createSentence(
    getSentence(who),
    getSentence(action),
    getSentence(what),
    getSentence(when)
  );
};
