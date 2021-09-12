import MainNavigation from "../MainNavigation/MainNavigation";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={classes.main}>
      <MainNavigation />
      <main className={props.main}>{props.children}</main>
    </div>
  );
};
export default Layout;
