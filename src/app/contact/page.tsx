const Contact: React.FC = () => {
  return (
    <>
      <h1>Contact</h1>
      <div className="flex flex-col gap-2 text-left">
        <div>
          <p>
            For official enquiries, please reach out to us at{" "}
            <a href="mailto:solveatnus@gmail.com">solveatnus@gmail.com</a>.
          </p>
          <p>To keep up with our activities, join us on:</p>
          <ul>
            <li>
              <a href="https://tinyurl.com/ovalsunset">Telegram</a>
            </li>
            <li>
              <a href="https://www.instagram.com/solveatnus/">Instagram</a>
            </li>
            <li>
              <a href="https://discord.gg/6Jez2WAq5f">Discord</a>
            </li>
            <li>
              <a href="https://nus.campuslabs.com/engage/organization/solve-at-nus">
                NUSync
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
