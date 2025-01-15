import AppNav from "../components/AppNav";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <AppNav />

      <h1>App</h1>
    </div>
  );
}

export default AppLayout;
