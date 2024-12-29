import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSchool } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  return (
    <>
      <Image src="/logo.svg" width={250} height={250} alt="Solve@NUS logo" />
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Solve@NUS</h1>
        <p className="text-xl text-gray-600">
          The puzzle club of the National University of Singapore.
        </p>
        <div className="flex gap-2 justify-center items-center">
          <Link href="https://tinyurl.com/ovalsunset">
            <FontAwesomeIcon icon={faTelegram} className="fa-xl" />
          </Link>

          <Link href="https://www.instagram.com/ovalsunset/">
            <FontAwesomeIcon icon={faSquareInstagram} className="fa-xl" />
          </Link>

          <Link href="mailto:solveatnus@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>

          <Link href="https://nus.campuslabs.com/engage/organization/solve-at-nus">
            <FontAwesomeIcon icon={faSchool} />
          </Link>
        </div>
      </div>

      {/* TODO: Figure out how to add hr; not sure why not showing up */}

      <div className="flex flex-col gap-2 items-start text-left">
        <div>
          <h2 className="text-l font-bold">What do we do?</h2>
          <p>
            Solve@NUS is a puzzle club dedicated to puzzle hunts, which are
            events where teams work together to solve a series of puzzles. Our
            sessions are spent solving puzzles, writing puzzles, or learning
            about puzzles. We also participate in external puzzles hunt
            together!
          </p>
        </div>
        <div>
          <h2 className="text-l font-bold">What sort of puzzles do we do?</h2>
          <p>
            The puzzles we solve aren't just limited to your traditional
            crosswords or sudokus: they could come in the form of audio tracks,
            a text adventure game, a devious logic puzzle, or anything else
            under the sun!
          </p>
        </div>
        <div>
          <h2 className="text-l font-bold">
            That's cool! Where do I find out more?
          </h2>
          <p>
            Head to our{" "}
            <Link href="/about" className="text-sky-700 hover:underline">
              About page
            </Link>{" "}
            to learn more about our club! Alternatively, if you're already
            hooked, you can join our Telegram group, follow our Instagram, join
            our Discord, and (if you're an NUS student) join us as an official
            member on NUSync. We look forward to seeing you at sessions!{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
