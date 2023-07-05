const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What's your name? Nicknames are also acceptable :) ",
  (question1) => {
    console.log(`Nice to meet you ${question1}. Let's get to know you better!`);

    rl.question("What's an activity you like doing? ", (question2) => {
      console.log(
        `That is awesome that you like ${question2}. I think it is cool too!`
      );

      rl.question("What do you listen to while doing that? ", (question3) => {
        console.log(`${question3} is a great choice!`);

        rl.question(
          "Which meal is your favorite (e.g., dinner, brunch, etc.)? ",
          (question4) => {
            console.log(`${question4} is so goooood!`);

            rl.question(
              "What's your favorite thing to eat for that meal? ",
              (question5) => {
                console.log(`${question5}, really? 😲`);

                rl.question(
                  "Which sport is your absolute favorite? ",
                  (question6) => {
                    console.log(
                      `My knees won't let me play ${question6} anymore.`
                    );

                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at! ",
                      (question7) => {
                        console.log(`${question7} is a great superpower!`);

                        rl.question(
                          "What is your favorite color? ",
                          (question8) => {
                            console.log(
                              `I think that ${question8} looks great on you!`
                            );

                            rl.question(
                              "What is your favorite animal? ",
                              (question9) => {
                                console.log(
                                  `${question9} is said to be a very loyal animal.`
                                );
                                console.log(
                                  "Wow! You are officially the most intriguing person I've talked to today. Now, let me paint a 'real' picture of you based on your profile.😎"
                                );

                                console.log(
                                  `Introducing ${question1} – the ultimate thrill-seeker! When not indulging in their favorite activity of ${question2}, you can catch them jamming out to ${question3} tunes, creating a symphony of chaos. Their love for ${question4} knows no bounds, especially when it comes to devouring mouthwatering ${question5}. Despite their relentless passion for ${question6}, their knees have given up on them, leaving them with nothing but nostalgic memories. But fear not, for ${question7} is their superpower, capable of bending minds and making everyone laugh uncontrollably! Their vibrant personality shines through their wardrobe, with a splash of ${question8} that can make any rainbow envious. And let's not forget their loyal companion, the ever-loyal ${question9}, who stands by their side through thick and thin. Brace yourself, world, because ${question1} is here to conquer the funny bone, one joke at a time! You're a true legend in the making! 🤩`
                                );

                                rl.close();
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
