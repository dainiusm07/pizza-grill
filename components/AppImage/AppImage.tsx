import clsx from "clsx";
import React, { forwardRef, useEffect, useState } from "react";

type AppImageProps = React.HTMLAttributes<HTMLDivElement> & {
  src: string;
  overlayColor?: string;
  overlayOpacity?: number;
  rounded?: boolean;
  lazyLoad?: boolean;
  isVisible?: boolean;
};

const AppImage = forwardRef<HTMLDivElement, AppImageProps>(
  (
    {
      overlayColor = "#000",
      overlayOpacity = 0,
      rounded = false,
      lazyLoad = true,
      isVisible,
      className,
      children,
      style,
      src,
      ...props
    },
    ref
  ) => {
    const [loaded, setLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const loadAppImage = (image: HTMLImageElement) => {
      setIsLoading(true);

      image.onload = () => {
        setLoaded(true);
        setIsLoading(false);
      };

      image.src = src;
    };

    useEffect(() => {
      const image = new Image();

      if (loaded || isLoading) {
        return;
      }

      if ((lazyLoad && isVisible) || !lazyLoad) {
        loadAppImage(image);
      }

      return () => {
        image.onload = undefined;
      };
    }, [isVisible, loaded]);

    const imageStyle: React.CSSProperties = {
      ...style,
      backgroundImage: loaded ? `url(${src})` : undefined,
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
        ref={ref}
        style={imageStyle}
        {...props}
      >
        {Boolean(overlayOpacity) && (
          <div className="absolute inset-0" style={overlayStyle} />
        )}
      </div>
    );
  }
);

export default AppImage;
