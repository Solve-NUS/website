import MarkdownRenderer from "@/parseMarkdown";

const About: React.FC = () => {
  return (
    <MarkdownRenderer filePath="/content/about.md" />
  );
};

export default About;
