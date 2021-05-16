import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import ContentContainer from "../ContentContainer/ContentContainer";

type SectionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  background?: JSX.Element;
  container?: boolean;
};

const Section: React.FC<SectionProps> = ({
  children,
  className,
  background,
  container = true,
  ...props
}) => {
  return (
    <section className={clsx("relative", className)} {...props}>
      {background && <div className="absolute inset-0 -z-1">{background}</div>}
      {container ? (
        <ContentContainer className="h-full">{children}</ContentContainer>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
