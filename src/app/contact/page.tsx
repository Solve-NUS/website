import MarkdownRenderer from "@/parseMarkdown";

const Contact: React.FC = () => {
  return (
    <>
      <h1>Contact</h1>
      <div className="flex flex-col gap-2 text-left">
        <MarkdownRenderer filePath="content/contact.md" />
      </div>
    </>
  );
};

export default Contact;
