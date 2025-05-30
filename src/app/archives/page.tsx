import MarkdownRenderer from "@/parseMarkdown";

const Archive: React.FC = () => {
  return (
    <>
      <h1>Archives</h1>
      <div className="flex flex-col gap-2 text-left">
        <MarkdownRenderer filePath="./content/archives.md" />
      </div>
    </>
  );
};

export default Archive;
