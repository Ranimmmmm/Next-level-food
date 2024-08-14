import LogoImg from "../../assets/logo.png"  
import Link from 'next/link';
import Image from "next/image";
import NavLink from "../nav-link";
import classes from './main-header.module.css'
import MainHeaderBackground from "./main-headerBackground";
export default function MainHeader(){
    return (
      <>
        <MainHeaderBackground />
        <header className={classes.header}>
          <Link  className={classes.logo} href="/">
            <Image src={LogoImg} alt="logo image" priority/>
            Next level food
          </Link>
    
          <nav className={classes.nav}>
            <ul>
              <li>
                <NavLink href="/meals">Browse Meals</NavLink>
              </li>
              <li>
                <NavLink href="/community-1">Foodies community</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </>
      
    );
}
    
