import Link from "next/link";
import { Fragment } from "react";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Problems</div>
      <nav>
          <ul>
              <li>
              <Fragment>
              <Link href="./problems">ProblemSet</Link>
              </Fragment>
              </li>
              <li>
                  <Fragment>
                      <Link href="/">HomePage</Link>
                  </Fragment>
              </li>
          </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
