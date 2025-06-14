import Link from "next/link";

const Archive: React.FC = () => {
  return (
    <>
      <h1>Archives</h1>
      <div className="flex flex-col gap-2 text-left">
        <div>
          <p>
            We are in the process of preparing solutions and uploading our old
            puzzle sets here. Stay tuned for more!
          </p>
          <h2>AY24/25 Sem 2</h2>
          <ul>
            <li>
              <Link href="/archives/AY2425S2_W1.pdf">
                Week 1: Musical Theatre
              </Link>
            </li>
            <li>
              <Link href="/archives/AY2425S2_W4.pdf">Week 4: Linguistics</Link>
            </li>
            <li>
              <Link href="/archives/AY2425S2_W13.pdf">Week 13: Week 13</Link>
            </li>
          </ul>
          <h2>AY24/25 Sem 1</h2>
          <ul>
            <li>
              <a href="https://nuspuzzlehunt.com/">
                Week 2: Orientation Hunt 2024
              </a>
            </li>
            <li>
              <Link href="/archives/AY2425S1_W3.pdf">Week 3: Food Fiesta</Link>
            </li>
            <li>
              <Link href="/archives/AY2425S1_W6.pdf">Week 6: NYT Games</Link>
            </li>
            <li>
              <Link href="/archives/AY2425S1_W9.pdf">
                Week 9: Love Languages
              </Link>
            </li>
            <li>
              <Link href="/archives/AY2425S1_W12.pdf">Week 12: Board Games</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Archive;
