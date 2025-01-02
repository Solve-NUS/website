"use client"

import { useEffect, useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

interface MarkdownRendererProps {
  filePath: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filePath }) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const res = await fetch(filePath);
      const text = await res.text();
      const processedContent = await remark().use(html).process(text);
      setContent(processedContent.toString());
    };

    fetchMarkdown();
  }, [filePath]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
// Example: <MarkdownRenderer filePath="/file.md" />
export default MarkdownRenderer;
