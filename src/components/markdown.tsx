import {createElement, Fragment, useMemo} from 'react';
import type {ReactNode} from 'react';
import {Lexer} from 'marked';
import type {MarkedToken, Token} from 'marked';

interface MarkdownProps {
  text: string;
  // Render one paragraph's contents without the <p>
  inline?: boolean;
}

// marked only tokenises; its HTML output is never used, so no dangerouslySetInnerHTML
export function Markdown({text, inline = false}: MarkdownProps) {
  const tokens = useMemo(() => new Lexer({breaks: true}).lex(text), [text]);
  const [first] = tokens;
  if (inline && tokens.length === 1 && first?.type === 'paragraph') {
    return renderTokens(first.tokens ?? []);
  }
  return renderTokens(tokens);
}

function renderTokens(tokens: Token[]): ReactNode {
  return tokens.map((token, index) => (
    <Fragment key={index}>{renderToken(token as MarkedToken)}</Fragment>
  ));
}

function renderToken(token: MarkedToken): ReactNode {
  switch (token.type) {
    case 'paragraph':
      return <p>{renderTokens(token.tokens)}</p>;
    case 'heading':
      return createElement(
        `h${String(token.depth)}`,
        null,
        renderTokens(token.tokens),
      );
    case 'list': {
      const items = token.items.map((item, index) => (
        <li key={index}>{renderTokens(item.tokens)}</li>
      ));
      return token.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
    }
    case 'text':
      return token.tokens
        ? renderTokens(token.tokens)
        : withLineBreaks(token.text);
    case 'strong':
      return <strong>{renderTokens(token.tokens)}</strong>;
    case 'em':
      return <em>{renderTokens(token.tokens)}</em>;
    case 'link':
      return (
        <a href={token.href} target="_blank" rel="noreferrer">
          {renderTokens(token.tokens)}
        </a>
      );
    case 'br':
      return <br />;
    case 'escape':
      return token.text;
    case 'space':
      return null;
    default:
      return token.raw;
  }
}

// Soft line breaks can stay inside text tokens; content newlines are always breaks
function withLineBreaks(text: string): ReactNode {
  const lines = text.split('\n');
  return lines.map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}
