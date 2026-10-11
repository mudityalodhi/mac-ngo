import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'
import { gallery, categories } from '../data/gallery.js'
import { Section, Img } from '../components/ui.jsx'
export default function OurWork(){
  usePageMeta('Our Work','Photos from Make A Change Foundation community activities.')
  const [cat,setCat]=useState('All'); const [sel,setSel]=useState(null)
  const items=gallery.filter(g=>cat==='All'||g.category===cat)
  useEffect(()=>{ const k=e=>e.key==='Escape'&&setSel(null); window.addEventListener('keydown',k); return()=>window.removeEventListener('keydown',k)},[])
  return(<>
  <section className="bg-navy px-5 py-20 text-white"><div className="mx-auto max-w-6xl"><h1 className="text-4xl font-extrabold sm:text-5xl">Our Work</h1></div></section>
  <Section><div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">{categories.map(c=><button key={c} onClick={()=>setCat(c)} aria-pressed={cat===c} className={`rounded-full px-5 py-2 font-medium ${cat===c?'bg-navy text-white':'bg-soft text-navy hover:bg-navy/10'}`}>{c}</button>)}</div>
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(g=><li key={g.id}><button onClick={()=>setSel(g)} className="group block w-full overflow-hidden rounded-2xl text-left shadow-sm" aria-label={`Enlarge: ${g.caption}`}>
      <Img src={g.src} alt={g.alt} className="aspect-[4/3] w-full transition duration-300 group-hover:scale-105"/><span className="block bg-white p-3 text-sm">{g.caption}{g.date&&` · ${g.date}`}</span></button></li>)}</ul></Section>
  {sel&&<div role="dialog" aria-modal="true" aria-label={sel.caption} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4" onClick={()=>setSel(null)}>
    <button autoFocus className="absolute right-4 top-4 rounded-full bg-white p-2" aria-label="Close" onClick={()=>setSel(null)}><X/></button>
    <figure onClick={e=>e.stopPropagation()} className="max-w-4xl"><Img src={sel.src} alt={sel.alt} className="max-h-[80vh] w-full rounded-lg"/><figcaption className="mt-2 text-center text-white">{sel.caption}</figcaption></figure></div>}</>)
}
