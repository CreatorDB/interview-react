import React from 'react';

export const Test3Page = () => {
  // intro el ref
  const introEl = React.useRef<HTMLParagraphElement | null>(null);

  // intro el height
  const [introElHeight, setIntroElHeight] = React.useState<number>(0);

  // has show button state
  const [hasShowButton, setHasShowButton] = React.useState<boolean>(false);

  // handle click show more
  const handleClickShowMore = () => {
    if (introEl.current) {
      introEl.current.classList.remove('line-clamp-3');
      setHasShowButton(false);
    }
  };

  // get intro el height on mount
  React.useEffect(() => {
    if (introEl.current) {
      const { height } = introEl.current.getBoundingClientRect();
      setIntroElHeight(height);
      setHasShowButton(height > 72);
    }
  }, []);

  return (
    <>
      <h1 className="text-lg font-bold">There is something weird</h1>
      <div>
        {/* intro */}
        <p ref={introEl} className={[introElHeight > 72 ? 'line-clamp-3' : '', 'w-60'].join(' ')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magnam dolorem aliquid consectetur nemo
          ipsam ex ab maxime blanditiis voluptatum officiis repudiandae praesentium atque doloremque, beatae excepturi
          reprehenderit quisquam ratione! Officia voluptate ratione quidem ea dolores eos facere omnis molestias!
        </p>
        {/* show more button */}
        {hasShowButton && <button onClick={handleClickShowMore}>Show more</button>}
      </div>
    </>
  );
};
