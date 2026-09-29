/** " // " or " - " between the parts of a heading, e.g. a name and a role. */
const SEPARATOR = /\s+(\/\/|-)\s+/;

interface BlurbHeadingProps {
  text: string;
}

/**
 * A page blurb's heading. On desktop it reads as written; compact mode
 * (styles in pages.scss) puts each part on its own line and drops the
 * separator, e.g. "KATAPLEXIA // キャタプレクシア" becomes two lines.
 */
export function BlurbHeading({text}: BlurbHeadingProps) {
  // split() with a capture group keeps the separators at odd indexes
  const parts = text.split(SEPARATOR);
  return (
    <h1 className="blurb-heading">
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className="blurb-heading__separator">
            {` ${part} `}
          </span>
        ) : (
          <span key={index} className="blurb-heading__part">
            {part}
          </span>
        ),
      )}
    </h1>
  );
}
