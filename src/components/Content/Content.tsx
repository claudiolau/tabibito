import { PropsWithChildren } from "react";
import styles from "./_content.module.scss";

export const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.middle}>
        <div>{children}</div>
      </div>
    </>
  );
};
