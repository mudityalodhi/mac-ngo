import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { org } from '../config/organization.js'
import { initiatives } from '../data/initiatives.js'
import { Button, ContactLines } from './ui.jsx'
const links=[['/','Home'],['/about','About Us'],['/initiatives','Our Initiatives'],['/our-work','Our Work'],['/get-involved','Get Involved'],['/contact','Contact']]
export default function Layout(){
  const [open,setOpen]=useState(false); const { pathname, hash } = useLocation()
  useEffect(()=>{ setOpen(false); if(hash){ setTimeout(()=>document.querySelector(hash)?.scrollIntoView(),50) } else window.scrollTo(0,0) },[pathname,hash])
  const cls=({isActive})=>`rounded-md px-3 py-2 text-sm font-medium ${isActive?'text-sun':'text-white/90 hover:text-white'}`
  return(<>
  <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[100] focus:bg-sun focus:p-3">Skip to content</a>
  <header className="sticky top-0 z-50 bg-navy-dark/95 backdrop-blur"><nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
    <Link to="/" className="flex items-center gap-2 text-white"><img src={org.logo} alt="" className="h-10 w-10"/><span className="text-sm font-bold leading-tight sm:text-base">{org.name}</span></Link>
    <div className="hidden items-center gap-1 lg:flex">{links.map(([t,l])=><NavLink key={t} to={t} end={t==='/'} className={cls}>{l}</NavLink>)}
      <Button to="/get-involved" className="ml-3 !py-2 text-sm">Join Our Mission</Button></div>
    <button className="rounded-md p-2 text-white lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav>
    <div id="mobile-menu" className={`grid transition-all duration-300 lg:hidden ${open?'grid-rows-[1fr]':'grid-rows-[0fr] invisible'}`}>
      <div className="min-h-0 overflow-hidden"><div className="flex flex-col gap-1 px-5 pb-5">{links.map(([t,l])=><NavLink key={t} to={t} end={t==='/'} className={cls}>{l}</NavLink>)}<Button to="/get-involved" className="mt-2">Join Our Mission</Button></div></div></div></header>
  <main id="main"><Outlet/></main>
  <footer className="bg-navy-dark px-5 pb-8 pt-14 text-white/80"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
    <div><div className="flex items-center gap-2 text-white"><img src={org.logo} alt="" className="h-10 w-10"/><strong>{org.name}</strong></div><p className="mt-3 text-sm">{org.message}</p></div>
    <div><h2 className="mb-3 font-semibold text-sun">Quick Links</h2><ul className="space-y-1 text-sm">{links.map(([t,l])=><li key={t}><Link className="hover:text-white" to={t}>{l}</Link></li>)}</ul></div>
    <div><h2 className="mb-3 font-semibold text-sun">Initiatives</h2><ul className="space-y-1 text-sm">{initiatives.map(i=><li key={i.id}><Link className="hover:text-white" to={`/initiatives#${i.id}`}>{i.title}</Link></li>)}</ul></div>
    <div className="text-sm"><h2 className="mb-3 font-semibold text-sun">Contact</h2><ContactLines dark/><p className="mt-2">{org.address}</p>
      <ul className="mt-2">{org.social.map(s=><li key={s.name}>{s.url?<a className="underline" href={s.url} target="_blank" rel="noreferrer">{s.name}: {s.handle}</a>:<span>{s.name}: {s.handle}</span>}</li>)}</ul></div></div>
    <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-sm">© {new Date().getFullYear()} {org.name}. All rights reserved.</p></footer></>)
}
