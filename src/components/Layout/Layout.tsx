import React, { PropsWithChildren } from "react";
import styles from "./_layout.module.scss";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};
