import { Travel } from "../assets/Travel";
import styles from "./_header.module.scss";

export const Header: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>{import.meta.env.VITE_APP_NAME}</h1>
        <Travel />
      </div>
    </>
  );
};
