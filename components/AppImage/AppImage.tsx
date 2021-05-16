import clsx from "clsx";

type AppImageProps = React.HTMLAttributes<HTMLDivElement> & {
  src: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  rounded?: boolean;
};

const AppImage: React.FC<AppImageProps> = ({
  overlayColor = "#000",
  overlayOpacity = 0.3,
  overlay = false,
  rounded = false,
  className,
  children,
  src,
  ...props
}) => {
  const style: React.CSSProperties = {
    // backgroundColor: "#000",
    backgroundImage: `url(${src})`,
  };
  const overlayStyle: React.CSSProperties = {
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
  };

  return (
    <div
      className={clsx(
        "relative z-1 shadow-xl bg-cover bg-blend-darken bg-center overflow-hidden",
        rounded && "rounded-lg",
        className
      )}
      style={style}
      {...props}
    >
      {/* <div className="absolute inset-0 bg-black -z-1" /> */}
      {overlay && <div className="absolute inset-0" style={overlayStyle} />}
    </div>
  );
};

export default AppImage;
