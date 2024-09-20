import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import catSprites from "../../assets/cat-sprite-sheet.png";

const catMoveAnimation = keyframes`
  0% { background-position: 0 -160px; }
  100% { background-position: -256px -160px; }
`;

const catClimbAnimation = keyframes`
  0% { background-position: 0 -1536px; }
  100% { background-position: -256px -1536px; }
`;

const catSitAnimation = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -256px 0; }
`;

const catSleepAnimation = keyframes`
  0% { background-position: 0 -320px; }
  100% { background-position: -256px -320px; }
`;

const smallScreenMovementAnimation = keyframes`
   0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(200px, 0);
  }
  75% {
    transform: translate(220px, -204px);
  }
  100% {
    transform: translate(220px, -204px);
  }
`;

const bigScreenMovementAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(1080px, 0);
  }
  75% {
    transform: translate(1130px, -350px);
  }
  100% {
    transform: translate(1130px, -350px);
  }
`;

const AnimatedCatWrapper = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  bottom: -14px;
  left: -150px;
  background-image: url(${catSprites});
  animation: ${({ $catMovement }) =>
    $catMovement === "walking" || $catMovement === "walking2"
      ? css`1.5s steps(8) infinite ${catMoveAnimation}`
      : $catMovement === "climbing"
      ? css`1.5s steps(8) infinite ${catClimbAnimation}`
      : $catMovement === "sitting"
      ? css`1.5s steps(8) infinite ${catSitAnimation}`
      : $catMovement === "sleeping"
      ? css`1.5s steps(8) infinite ${catSleepAnimation}`
      : "none"};
  transform: scale(2);
  image-rendering: pixelated;
  z-index: 2;

  @media screen and (min-width: 900px) {
    left: -1000px;
    transform: scale(3);
    bottom: 5px;
  }
`;

const HorizontalPetMovement = styled.div`
  position: absolute;
  bottom: 36px;
  left: 0;
  width: 36px;
  animation: ${smallScreenMovementAnimation} 20s linear 1 forwards;

  @media screen and (min-width: 900px) {
    animation: ${bigScreenMovementAnimation} 20s linear 1 forwards;
  }
`;

export default function AnimatedCat() {
  const [catMovement, setCatMovement] = useState("walking");
  const [prevWidth, setPrevWidth] = useState(window.innerWidth);

  const resetAnimation = () => {
    setCatMovement("walking");
  };

  useEffect(() => {
    let changeMovement;
    let finishClimbing;
    let finishSitting;

    const setMovementTimers = () => {
      changeMovement = setTimeout(() => {
        setCatMovement("climbing");
      }, 10000);

      finishClimbing = setTimeout(() => {
        setCatMovement("sitting");
      }, 15000);

      finishSitting = setTimeout(() => {
        setCatMovement("sleeping");
      }, 20000);
    };

    setMovementTimers();

    const handleResize = () => {
      const currentWidth = window.innerWidth;

      if (
        (prevWidth < 900 && currentWidth >= 900) ||
        (prevWidth >= 900 && currentWidth < 900)
      ) {
        resetAnimation();

        clearTimeout(changeMovement);
        clearTimeout(finishClimbing);
        clearTimeout(finishSitting);
        setMovementTimers();
        setPrevWidth(currentWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(changeMovement);
      clearTimeout(finishClimbing);
      clearTimeout(finishSitting);
    };
  }, [prevWidth]);

  return (
    <HorizontalPetMovement>
      <AnimatedCatWrapper $catMovement={catMovement} />
    </HorizontalPetMovement>
  );
}
