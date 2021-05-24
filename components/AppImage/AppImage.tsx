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
      // transform: "scale(1.3)",
    };

    const overlayStyle: React.CSSProperties = {
      backgroundColor: overlayColor,
      opacity: overlayOpacity,
    };

    const renderLoadingOverlay = () => (
      <div className="absolute inset-0 bg-gray-400" />
    );

    const renderOpacityOverlay = () =>
      Boolean(overlayOpacity) && (
        <div className="absolute inset-0" style={overlayStyle} />
      );

    return (
      <div
        className={clsx(
          "relative z-1 shadow-xl overflow-hidden",
          rounded && "rounded-lg",
          className
        )}
        ref={ref}
        // style={imageStyle}
        {...props}
      >
        <div className="h-full w-full bg-cover bg-center" style={imageStyle} />
        {isLoading ? renderLoadingOverlay() : renderOpacityOverlay()}
      </div>
    );
  }
);

export default AppImage;
