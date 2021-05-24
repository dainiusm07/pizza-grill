import { HTMLAttributes } from "react";

type AnchorProps = HTMLAttributes<HTMLElement>;

const Anchor: React.FC<AnchorProps> = ({ id }) => {
  return (
    <span id={id} tabIndex={-1} className="block relative invisible -top-16" />
  );
};

export default Anchor;
