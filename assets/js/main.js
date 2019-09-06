const blogArea = document.getElementById("blogArea");

const blogs = [
  {
    title: "UFC 242: Khabib vs. Poirier",
    place: "Abu Dhabi, United Arab Emirates",
    time: "2:00 PM E.S.T.",
    date: "September 7th, 2019",
    fights: [
      {
        division: "Lightweight",
        title: false,
        lineup: "Main Event",
        fighters: ["Khabib Nurmagomedov", "Dustin Poirier"],
        body: "The main event is the lightweight championship match-up between Champion Khabib Nurmagomedov and Interim-Champion Dustin Poirier."
      }
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

  // testing output
  newBlog.append(newTitle, newPlace, newDate, fightsArea);
  blogArea.append(newBlog);
}

addBlogToPage()
