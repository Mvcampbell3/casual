const blogArea = document.getElementById("blogArea");

const blogs = [
  {
    title: "UFC 243: Whittaker vs. Adesanya",
    place: "Melbourne, Australia",
    time: "10:00 PM E.S.T.",
    date: "October 5th, 2019",
    fights: [
      {
        division: "Middleweight",
        title: true,
        lineup: "Main Event",
        fighters: ["Rober Whittaker", "Israel Adesanya"],
        // body: "The main event is the middleweight championship fight between Robert Whittaker and Israel Adesayna. This is my most anticipated fight of the year. There are so many things that make this fight a must see event. Let's get the basic things out of the way. 1. It's a title fight. 2. It's in Australia, and both fighters hail from nearby New Zealand, and Whittaker moved to Australia at a young age. 3. Because of that it will probably be the largest crowd ever at a UFC event. 4. Australian fans are loud and crazy, which will add so much to the experience."
        body: `
        <h3 class="fightTitle">Fight of the Year?</h3>
        <p class="fight-content">The main event is the middleweight championship fight between Robert Whittaker and Israel Adesayna. This is my most anticipated fight of the year. There are so many things that make this fight a must see event. Let's get the basic ones out of the way...</p>
        <ul>
          <li>It's a title fight</li>
          <li>It's in Australia</li>
          <li>Both fighters come from Australia or New Zealand</li>
          <li>It should be the largest live show in UFC history</li>
        </ul>
        <hr>
        <p class="fight-content">Now we can get to the real reasons that this fight interests me so much. Mainly, it is going to answer questions. Hopefully. We haven't seen Robert 'the Reaper' Whittaker fight in a long time due to injuries. He had two absolute wars with Yoel Romero, and 50 minutes locked in a cage with the Soldier of God will do that to a man. In both of those fights, he was injured early on in the bout. The first fight, he aggrivated a knee injury in the first round. The second fight he broke his right hand somewhere in the first or second round. He still got the descision victories in both fights!</p>

        <p class="fight-content">So on Whittaker's side of it we have two important questions we want answered on October 5th. Is his body able to withstand the punishment of championship level MMA? How much of a toll did those Romero fights have? To the first part, it may seem easy to say that The Reaper is injury prone. I think that is ignoring what really happened, or at least, not fully comprehending what did. He fought Yoel Romero in back to back five round decisions. There isn't a middleweight on the planet who can say that, let alone win both fights. He was hurt in those fights, but I don't think that is because Whittaker is any more prone to injury than anyone else. It's just what happens to people who fight Romero. The second question is more interesting. If you aren't getting better between fights, whatever lead you may have on the rest of the division will wither away. Has he been able to keep developing his skills to the level at which he can grow as a fighter, or has his injuries kept him away from training too often? I think that the answer to that question will be on display in this fight</p>

        <hr>
        
        <p class="fight-content">Stylebender. Israel Adesayna's rise through the middleweight ranks has been historic. He has been extremely active with 6 fights in the past 18 months. He has fought in large spots on cards, as with the Anderson Silva fight, and the Kelvin Gastelum fight. He will not have the first-time challenger hurdles to overcome in this fight. In pretty much every single one of his fights in the UFC, there are those who say 'well now he is going to be in there with someone who is a legitmate contender, and well will see how he does with that.' There is no more of that talk, at least there should not be. Silva may be near the very end of his career, but he still looks competetive. Gastelum was in line for the title fight with Whittaker before the champ had to pull out just hours before the event. If you listen closely enough, however, you can just make out from the background noise the gumbleings of those who seem the think he has not faced the heart of the division. The Romeros, The Costas, The Souzas, The Widemans, and the Rockholds. I know a few of those names have moved up a weight class, but they were still there for the majority of Stylebender's rise. I think he is ready for the 'big leagues'. I think he has the skills, and talent, and the heart to be a UFC champion. The major question that will be answered on October 5th? If Gastelum can do what he did to Adesayna, what do you think Whittaker is going to be able to do?</p>

        <p class="fight-content">If the answers to Whittaker's questions from before are not firmly in the positive, Adesayna stands to become the next middleweight champion. If Whittaker is anything less than a better version of the fighter who knocked out Souza and beat Romero back to back, it is going to be a very difficult path to victory for him. Most of the time, when there is a match between top level MMA fighers, 
        you get an answer to the question 'Who was better that night'. On October 5th, we are going to see firsthand what level of carnage a man can overcome and still be the best. 
        
        <h4 class="sub-title">Prediction</h4>
        <p class="fight-content">I think that Whittaker is going to remind everyone why he is the champion in this division full of killers. He had to make it through murders' row to get to the top, and Israel Adesayna is not going to be able to handle him. Whittaker, 2nd round. TKO.</p>
        </p>

        `
      },
      
    ]
  }
]

function addBlogToPage() {
  blogs.forEach(one => createBlogHTML(one))
}

function createBlogHTML(blog){
  const newBlog = document.createElement("div");
  newBlog.classList = "newBlog";

  const newTitle = document.createElement("h2");
  newTitle.classList = "blogTitle";
  newTitle.textContent = blog.title;

  const newPlace = document.createElement("h3");
  newPlace.classList = "blogTitle";
  newPlace.textContent = blog.place;

  const newDate = document.createElement("h3");
  newDate.classList = "blogTitle";
  newPlace.textContent = blog.date;

  const fightsArea = document.createElement("div");
  fightsArea.classList = "fightsArea";

  blog.fights.forEach(fight => {
    const newFight = document.createElement("div");
    newFight.classList = "newFight";

    const fightFighters = document.createElement("h3");
    fightFighters.classList = "newFightTitle"
    fightFighters.textContent = fight.fighters.join(" vs. ");
    
    const fightDivision = document.createElement("h4");
    fightDivision.classList = "newFightTitle";
    fightDivision.textContent = fight.division;

    const fightTitle = document.createElement("h4");
    fightTitle.classList = "newFightTitle";
    fightTitle.textContent = fight.title ? "Yes": "No";

    const fightBody = document.createElement("div");
    fightBody.classList = "fightBody";
    fightBody.innerHTML = fight.body;

    newFight.append(fightFighters, fightDivision, fightTitle, fightBody);
    fightsArea.append(newFight);
  })

  // testing output
  newBlog.append(newTitle, newPlace, newDate, fightsArea);
  blogArea.append(newBlog);
}

addBlogToPage()
