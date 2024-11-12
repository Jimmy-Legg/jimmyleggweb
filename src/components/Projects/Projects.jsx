import ProjectCard from './ProjectCard'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Python Snake",
      description: "This project was made in high school, it is one of my first in python. It's a replica of the game called Snake. I coded this game using Python and the library PyGame to display it. In this version you can choose between 3 levels and 3 speeds for each the score is saved in a file.",
      link: "https://github.com/Leteno18/Snake",
      className: "a"
    },
    {
      title: "Python MiniGame",
      subtitle: "school project",
      description: "In this project I created Python console mini games for university. This project had a menu you could choose to play against a friend or a bot or 2 bots against each other. You had the option between 4 games: 4x4, tic tac toe, match game, number guessing game. If a game isn't familiar, a rules section is there if needed.",
      link: "https://github.com/Leteno18/SAE-S1.02",
      className: "b"
    },
    {
      title: "Java Project",
      description: "In this project, we had to create the java replica of the board game named Orchard for university. This game was created in groupe of 2. In this game you have to roll a dice to collect 40 fruits, you lose if you roll 9 time the crow and place all 9 pieces of a the puzzle. This game includes saving player data, music, a rules section and option section. For this project, we had to do versions of the game on git.",
      link: "https://github.com/Jimmy-Legg/Orchard",
      className: "c"
    },
    {
      title: "Current project",
      description: "Creating an app for Le Grand to manage data using MySQL nodeJS React. I cannot reveal any more details due to confidentiality.",
      className: "d"
    },
    {
      title: "CV",
      description: "Here you can find my CV",
      link: "pdf/Jimmy Legg.pdf",
      className: "e"
    }
  ]

  return (
    <div className="container" id="resources">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}

export default Projects