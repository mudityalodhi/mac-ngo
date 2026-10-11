import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { org } from '../config/organization.js'
const v = { primary:'bg-sun text-navy-dark hover:bg-yellow-300', dark:'bg-navy text-white hover:bg-navy-dark', outline:'border-2 border-white text-white hover:bg-white hover:text-navy', outlineDark:'border-2 border-navy text-navy hover:bg-navy hover:text-white' }
export function Button({ to, href, variant='primary', children, className='', ...p }){
  const c = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition ${v[variant]} ${className}`
  if(to) return <Link to={to} className={c} {...p}>{children}</Link>
  if(href) return <a href={href} className={c} {...p}>{children}</a>
  return <button className={c} {...p}>{children}</button>
}
export function Heading({ label, title, text, light, center }){
  return(<div className={`mb-10 max-w-2xl ${center?'mx-auto text-center':''}`}>
    {label&&<p className="mb-2 text-sm font-semibold uppercase tracking-widest text-coral">{label}</p>}
    <h2 className={`text-3xl font-bold sm:text-4xl ${light?'text-white':'text-navy'}`}>{title}</h2>
    {text&&<p className={`mt-4 text-lg ${light?'text-white/80':'text-muted'}`}>{text}</p>}</div>)
}
export const Section = ({ children, className='', id }) => <section id={id} className={`px-5 py-16 sm:py-20 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>
export function Img({ src, alt, className='' }){
  const [bad,setBad]=useState(false)
  if(bad) return <div role="img" aria-label={alt} className={`flex items-center justify-center bg-navy/10 p-4 text-center text-sm text-muted ${className}`}>Photo placeholder — add image to public/images</div>
  return <img src={src} alt={alt} loading="lazy" onError={()=>setBad(true)} className={`object-cover ${className}`}/>
}
export function InitiativeCard({ i }){
  const Icon=i.icon
  return(<article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <span className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${i.color}`}><Icon aria-hidden="true"/></span>
    <h3 className="text-xl font-bold text-navy">{i.title}</h3><p className="mt-2 flex-1 text-muted">{i.short}</p>
    <Link to={`/initiatives#${i.id}`} className="mt-4 inline-flex items-center gap-1 font-semibold text-navy hover:text-coral">Learn More <ArrowRight size={16} aria-hidden="true"/></Link></article>)
}
export function ContactLines({ dark }){
  return(<ul className={`space-y-1 ${dark?'text-white/90':''}`}>
    {org.phones.map(p=><li key={p}><a className="underline" href={`tel:+91${p}`}>{p}</a></li>)}
    <li><a className="break-all underline" href={`mailto:${org.email}`}>{org.email}</a></li></ul>)
}
