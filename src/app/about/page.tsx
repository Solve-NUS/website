import MarkdownRenderer from "@/parseMarkdown";

const About: React.FC = () => {
  return (
    <>
      <h1>About</h1>
      <div className="flex flex-col gap-2 text-left">
        <MarkdownRenderer filePath="content/about.md" />
      </div>
    </>
  );
};

export default About;
