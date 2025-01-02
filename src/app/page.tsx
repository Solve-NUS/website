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
        <div className="flex gap-2 justify-center items-center text-gray-400">
          <Link href="https://tinyurl.com/ovalsunset">
            <FontAwesomeIcon icon={faTelegram} className="fa-2x" />
          </Link>

          <Link href="https://www.instagram.com/ovalsunset/">
            <FontAwesomeIcon icon={faSquareInstagram} className="fa-2x" />
          </Link>

          <Link href="mailto:solveatnus@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="fa-2x"/>
          </Link>

          <Link href="https://nus.campuslabs.com/engage/organization/solve-at-nus">
            <FontAwesomeIcon icon={faSchool} className="fa-2x"/>
          </Link>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-300" />

      <div className="flex flex-col gap-2 items-start text-left">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">What do we do?</h2>
          <p className="text-lg text-gray-800">
            Solve@NUS is a puzzle club dedicated to puzzle hunts, which are
            events where teams work together to solve a series of puzzles. Our
            sessions are spent solving puzzles, writing puzzles, or learning
            about puzzles. We also participate in external puzzle hunts
            together!
          </p>
        </div>
        <hr className="my-2 border-t border-gray-300" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">What sort of puzzles do we do?</h2>
          <p className="text-lg text-gray-800">
            The puzzles we solve aren&apos;t just limited to your traditional
            crosswords or sudokus: they can come in the form of audio tracks, a
            text adventure game, a devious logic puzzle, or anything else under
            the sun!
          </p>
        </div>
        <hr className="my-2 border-t border-gray-300" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            That&apos;s cool! Where do I find out more?
          </h2>
          <p className="text-lg text-gray-800">
            Head to our{" "}
            <Link href="/about" className="text-sky-700 hover:underline">
              About page
            </Link>{" "}
            to learn more about our club! Alternatively, if you&apos;re already
            hooked, you can{" "}
            <Link
              href="https://tinyurl.com/ovalsunset"
              className="text-sky-700 hover:underline"
            >
              join our Telegram group
            </Link>
            ,{" "}
            <Link
              href="https://www.instagram.com/ovalsunset/"
              className="text-sky-700 hover:underline"
            >
              follow our Instagram
            </Link>
            , and (if you&apos;re an NUS student){" "}
            <Link
              href="https://nus.campuslabs.com/engage/organization/solve-at-nus"
              className="text-sky-700 hover:underline"
            >
              join us as an official member on NUSync
            </Link>
            . We look forward to seeing you at sessions!{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
