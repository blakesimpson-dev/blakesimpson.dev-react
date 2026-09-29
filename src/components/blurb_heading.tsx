const SEPARATOR = /\s+(\/\/|-)\s+/;

interface BlurbHeadingProps {
  text: string;
}

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
