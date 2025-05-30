import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faSquareInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSchool } from "@fortawesome/free-solid-svg-icons";
import MarkdownRenderer from "@/parseMarkdown";

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

          <Link href="https://www.instagram.com/ovalsunset/">
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
        <MarkdownRenderer filePath="./content/home.md" />
      </div>
    </>
  );
};

export default Home;
