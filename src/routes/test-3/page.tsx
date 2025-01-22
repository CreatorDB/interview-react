import React from 'react';

export const Test3Page = () => {
  const introEl = React.useRef<HTMLParagraphElement | null>(null);

  const [introElHeight, setIntroElHeight] = React.useState<number>(0);

  const [hasShowButton, setHasShowButton] = React.useState<boolean>(false);

  const handleClickShowMore = () => {
    if (introEl.current) {
      introEl.current.classList.remove('line-clamp-3');
      setHasShowButton(false);
    }
  };

  // Get intro element height when component mounted and check if show more button is needed
  React.useEffect(() => {
    if (introEl.current) {
      const { height } = introEl.current.getBoundingClientRect();
      setIntroElHeight(height);
      setHasShowButton(height > 72);
    }
  }, []);

  return (
    <>
      <h1 className="text-lg font-bold">What happens when navigating to this page from other routes?</h1>
      <div>
        {/* intro */}
        <div ref={introEl} className={[introElHeight > 72 ? 'line-clamp-3' : '', 'w-60'].join(' ')}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magnam dolorem aliquid consectetur nemo
            ipsam ex ab maxime blanditiis voluptatum officiis repudiandae praesentium atque doloremque, beatae excepturi
            reprehenderit quisquam ratione! Officia voluptate ratione quidem ea dolores eos facere omnis molestias!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dignissimos accusantium tempore? In
            voluptatem eaque aspernatur illum! Vel soluta perspiciatis non temporibus, est, cupiditate repellat iusto
            voluptatum placeat aperiam omnis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas totam possimus laboriosam nemo aliquid atque
            molestias officiis velit, reprehenderit, esse natus magni dolorum soluta inventore, fugiat obcaecati quasi
            libero maxime.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus praesentium expedita, tenetur aliquam
            repellendus doloremque quaerat. Quia, nulla deserunt, iusto, quasi amet delectus sit aspernatur enim
            voluptatem voluptatum dolorem.
          </p>
        </div>
        {/* show more button */}
        {hasShowButton && (
          <button className="text-blue-500" onClick={handleClickShowMore}>
            Show more
          </button>
        )}
      </div>
    </>
  );
};
