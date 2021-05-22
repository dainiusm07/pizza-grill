import { HTMLAttributes } from "react";

type AnchorProps = HTMLAttributes<HTMLElement>;

const Anchor: React.FC<AnchorProps> = ({ id }) => {
  return <a id={id} className="block relative invisible -top-16" />;
};

export default Anchor;
