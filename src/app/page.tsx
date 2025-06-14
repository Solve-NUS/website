import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faSquareInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSchool } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  return (
    <>
      <Image src="./logo.svg" width={250} height={250} alt="Solve@NUS logo" />
      <div>
        <h1>Solve@NUS</h1>
        <p>The puzzle club of the National University of Singapore.</p>
        <div className="social-media-icons">
          <Link href="https://tinyurl.com/ovalsunset">
            <FontAwesomeIcon
              icon={faTelegram}
              className="fa-2x text-gray-400 hover:text-gray-600 transition ease-in-out duration-300"
            />
          </Link>

          <Link href="https://www.instagram.com/solveatnus/">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="fa-2x text-gray-400 hover:text-gray-600 transition ease-in-out duration-300"
            />
          </Link>

          <Link href="https://discord.gg/6Jez2WAq5f">
            <FontAwesomeIcon
              icon={faDiscord}
              className="fa-2x text-gray-400 hover:text-gray-600 transition ease-in-out duration-300"
            />
          </Link>

          <Link href="mailto:solveatnus@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="fa-2x text-gray-400 hover:text-gray-600 transition ease-in-out duration-300"
            />
          </Link>

          <Link href="https://nus.campuslabs.com/engage/organization/solve-at-nus">
            <FontAwesomeIcon
              icon={faSchool}
              className="fa-2x text-gray-400 hover:text-gray-600 transition ease-in-out duration-300"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-left">
        <div>
          <h2>What does Solve@NUS do?</h2>
          <p>
            Solve@NUS is a puzzle club dedicated to puzzle hunts, which are
            events where teams work together to solve a series of puzzles. Our
            sessions are spent solving puzzles, writing puzzles, or learning
            about puzzles. We also participate in external puzzle hunts
            together!
          </p>
          <hr></hr>
          <h2>What sort of puzzles do you do?</h2>
          <p>
            The puzzles we solve aren&apos;t just limited to your traditional
            crosswords or sudokus: they can come in the form of audio tracks, a
            text adventure game, a devious logic puzzle, or anything else under
            the sun!
          </p>
          <hr></hr>
          <h2>That&apos;s cool! Where do I find out more?</h2>
          <p>
            Head to our <a href="/about">About page</a> to learn more about our
            club! Alternatively, if you&apos;re already hooked, you can{" "}
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
            . We look forward to seeing you at sessions!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
