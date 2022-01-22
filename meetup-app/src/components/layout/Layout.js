import MainNav from "./MainNav";
import classes from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <div>
      <MainNav />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

export default Layout;
