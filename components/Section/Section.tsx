import clsx from "clsx";
import { HTMLAttributes, forwardRef } from "react";
import ContentContainer from "../ContentContainer/ContentContainer";

type SectionProps = HTMLAttributes<HTMLElement> & {
  background?: JSX.Element;
  container?: boolean;
};

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, background, container = true, ...props }, ref) => {
    return (
      <section className={clsx("relative", className)} ref={ref} {...props}>
        {background && (
          <div className="absolute inset-0 -z-1">{background}</div>
        )}
        {container ? (
          <ContentContainer className="h-full">{children}</ContentContainer>
        ) : (
          children
        )}
      </section>
    );
  }
);

export default Section;
