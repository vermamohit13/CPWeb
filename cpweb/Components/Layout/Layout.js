import MainNavigation from "../Navigation/MainNavigation";
import classes from "./Layout.module.css";
import { useLayoutEffect } from "react";

function Layout(props){
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}
export default Layout;