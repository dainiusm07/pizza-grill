import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ContentContainerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={clsx("max-w-5xl mx-auto", className)} {...props}>
      {children}
    </div>
  );
};

export default ContentContainer;
