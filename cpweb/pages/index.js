import { Fragment } from "react";
import Link from 'next/link';
function HomePage(){
   return <div>
   <h1>Welcome to CPWeb</h1>
   <h2>A website for CP Enthusiast to upgrade their skills.</h2>
   <Fragment>
      <Link href='/problems/'>ProblemSet</Link>
   </Fragment>
  </div>
}
export default HomePage;