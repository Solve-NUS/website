import MarkdownRenderer from "@/parseMarkdown";

const Contact: React.FC = () => {
  return <MarkdownRenderer filePath="/content/contact.md" />;
};

export default Contact;
