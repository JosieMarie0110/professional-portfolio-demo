import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
const links = [['#career','Career'],['#experience','Customers'],['#projects','Engineering lab'],['#cloud-map','Cloud map'],['#architecture','Architecture'],['#leadership','Leadership']];
export default function Navbar() {
 const [open,setOpen]=useState(false);
 return <header className="site-header"><div className="container nav-wrap"><a className="brand" href="#home" aria-label="Han Solo portfolio home"><span className="brand-mark"><Rocket size={18}/></span><span>SOLO<span className="brand-dim"> / GALAXY OPS</span></span></a><button className="mobile-menu" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X size={22}/>:<Menu size={22}/>}</button><nav id="primary-navigation" className={open?'nav-links open':'nav-links'} aria-label="Primary navigation">{links.map(([href,label])=><a href={href} key={href} onClick={()=>setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#projects" onClick={()=>setOpen(false)}>View builds ↗</a></nav></div></header>;
}
