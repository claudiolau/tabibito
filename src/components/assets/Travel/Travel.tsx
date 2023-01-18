import { Player, Controls } from "@lottiefiles/react-lottie-player";
import styles from "./_travel.module.scss";

export const Travel: React.FC = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src={import.meta.env.VITE_IMAGE}
        className={styles.travel}
      />
      <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} />
    </>
  );
};
