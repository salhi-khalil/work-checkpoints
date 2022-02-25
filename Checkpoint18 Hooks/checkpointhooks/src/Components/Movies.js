//"Movies.js" constitutes the data used to initialise the array movies in "App.js"
const Movies = [
  {
    id: Math.random(), //added an "id": useful for generating keys when mapping and then routes
    title: "Crimson Peak",
    description:
      "In the aftermath of a family tragedy, an aspiring author is torn between love for her childhood friend and the temptation of a mysterious outsider. Trying to escape the ghosts of her past, she is swept away to a house that breathes, bleeds - and remembers.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BZmNkYzk3YjItOTMwYy00ZWViLWIxMTUtZDJiZmY0ZWExYjVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: 6.5,
    trailer: (
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/6yAbFYbi8XU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: Math.random(),
    title: "The Good Place",
    description:
      "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BYmMxNjM0NmItNGU1Mi00OGMwLTkzMzctZmE3YjU1ZDE4NmFjXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: 8.2,
    trailer: (
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/RfBgT5djaQw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: Math.random(),
    title: "This Beautiful Fantastic",
    description:
      "A young woman who dreams of becoming a children's book author makes an unlikely friendship with a cantankerous, rich old widower.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTY5MjEyMDk2N15BMl5BanBnXkFtZTgwODMyMTQzMTI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: 6.9,
    trailer: (
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/Rq_7LPpKcT8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: Math.random(),
    title: "Penny Dreadful",
    description:
      "Explorer Sir Malcolm Murray, American gunslinger Ethan Chandler, scientist Victor Frankenstein and medium Vanessa Ives unite to combat supernatural threats in Victorian London.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTQ0Mzg2NzcyNl5BMl5BanBnXkFtZTgwMDE1NzU2NDE@._V1_UY268_CR7,0,182,268_AL_.jpg",
    rating: 8.2,
    trailer: (
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/3YdeSNcAWos"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: Math.random(),
    title: "The Silence of the Lambs",
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: 8.6,
    trailer: (
      <iframe
        width="816"
        height="441"
        src="https://www.youtube.com/embed/W6Mm8Sbe__o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },

  {
    id: Math.random(),
    title: "Zoey's Extraordinary Playlist ",
    description:
      "A young woman discovers she has the ability to hear the innermost thoughts of people around her as songs and musical numbers.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BOWZlMTljZDktMWE0NC00OWZmLWJjZWYtNDJmNjAzODVmNjAwXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: 8.6,
    trailer: (
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/5be1Wa27U2o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: Math.random(),
    title: "The Room",
    description:
      "Johnny is a successful bank executive who lives quietly in a San Francisco townhouse with his fiancée, Lisa. One day, putting aside any scruple, she seduces Johnny's best friend, Mark. From there, nothing will be the same again.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: 3.7,
    trailer: (
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/tXqFXqs_8I4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: Math.random(),
    title: "Cats",
    description:
      "A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new Jellicle life.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNjRlNTY3MTAtOTViMS00ZjE5LTkwZGItMGYwNGQwMjg2NTEwXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: 2.8,
    trailer: (
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/gq50F-IDXDc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: Math.random(),
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: 9.3,
    trailer: (
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/6hB3S9bIaco"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: Math.random(),
    title: "The Good Doctor",
    description:
      "Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMzZjMWEwMGMtODdhMi00NGRkLTkwZTEtNmM4NjA3M2FlNzc2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg",
    rating: 8.1,
    trailer: (
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/msJggy8xtmI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
];

export default Movies;
