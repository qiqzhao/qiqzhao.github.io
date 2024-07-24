import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "../../components/markdown-style.css";

interface IProps {
  content?: string;
}

const CustomMarkdown: FC<IProps> = ({ content }: IProps) => {
  const MarkdownComponents = {
    code: ({ children, className }: any) => {
      return (
        <SyntaxHighlighter language={className?.slice(9)} style={nord}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  const renderContent = content?.replace(/\.\.\/public/g, "") || "";
  return (
    <ReactMarkdown
      className="markdown"
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={MarkdownComponents}
    >
      {renderContent}
    </ReactMarkdown>
  );
};

export default CustomMarkdown;
