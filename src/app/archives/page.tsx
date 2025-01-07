import MarkdownRenderer from "@/parseMarkdown";

const Archive: React.FC = () => {
  return (
    <MarkdownRenderer filePath="/content/archives.md" />
  );
};

export default Archive;
