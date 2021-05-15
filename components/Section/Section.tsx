import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import ContentContainer from "../ContentContainer/ContentContainer";

type SectionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  background?: JSX.Element | boolean;
};

const Section: React.FC<SectionProps> = ({
  children,
  className,
  background = true,
  ...props
}) => {
  return (
    <section
      className={clsx("relative", background === true && "bg-white", className)}
      {...props}
    >
      {typeof background !== "boolean" && (
        <div className="absolute inset-0 -z-1">{background}</div>
      )}
      <ContentContainer className="h-full">{children}</ContentContainer>
    </section>
  );
};

export default Section;
