const About: React.FC = () => {
  return (
    <>
      <h1>About</h1>
      <div className="flex flex-col gap-2 text-left">
        <div>
          <h2>What does Solve@NUS do?</h2>
          <p>
            Solve@NUS is a puzzle club dedicated to puzzle hunts! Puzzle hunts
            are events where teams work together to solve a series of puzzles.
            In a puzzle, you are given some information and have to extract a
            word or phrase (usually in English) as the answer, typically without
            direct instructions too. These puzzles typically come without direct
            instructions too.
          </p>
          <p>
            Our sessions are spent solving puzzles, writing puzzles, or learning
            about puzzles. We also participate in external puzzle hunts
            together, including but not limited to Brown Puzzle Hunt, Puzzle
            Rojak, and Galactic Puzzle Hunt.
          </p>
          <p>We aim to:</p>
          <ul>
            <li>
              Share our passion for solving and writing puzzles by gathering
              like-minded puzzlers through fun, engaging events
            </li>
            <li>
              Promote a schoolwide culture of thinking creatively to solve
              problems
            </li>
          </ul>
          <hr></hr>
          <h2>What sort of puzzles do you do?</h2>
          <p>
            The puzzles we solve aren&apos;t just limited to your traditional
            crosswords or sudokus: they can come in the form of audio tracks, a
            text adventure game, a devious logic puzzle, or anything else under
            the sun!
          </p>
          <p>
            A typical puzzle set we run at our sessions consists of five
            puzzles: four feeder puzzles and one metapuzzle. A metapuzzle uses
            the answers of the feeder puzzles in the same set as the meta.
            Larger hunts consist of many more of such sets, which are used to
            measure progress.
          </p>
          <hr></hr>
          <h2>I&apos;m interested! When do you hold sessions?</h2>
          <p>We hold sessions every Friday, 7–9pm, at NUS FASS&apos; AS6-0209.</p>
          <hr></hr>
          <h2>
            Aw, I can&apos;t make it then. How can I keep up with your activities
            anyway?
          </h2>
          <p>
            You can{" "}
            <a href="https://tinyurl.com/ovalsunset">join our Telegram group</a>
            ,{" "}
            <a href="https://www.instagram.com/solveatnus/">
              follow our Instagram
            </a>
            , join our <a href="https://discord.gg/6Jez2WAq5f">Discord</a>, and
            (if you&apos;re an NUS student){" "}
            <a href="https://nus.campuslabs.com/engage/organization/solve-at-nus">
              join us as an official member on NUSync
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
