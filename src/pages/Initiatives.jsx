import usePageMeta from '../hooks/usePageMeta.js'
import { initiatives } from '../data/initiatives.js'
import { Button, Section } from '../components/ui.jsx'
export default function Initiatives(){
  usePageMeta('Our Initiatives','Six focus areas: sports, women empowerment, skill development, slum education, social welfare and community development.')
  return(<>
  <section className="bg-navy px-5 py-20 text-white"><div className="mx-auto max-w-6xl"><h1 className="text-4xl font-extrabold sm:text-5xl">Our Initiatives</h1><p className="mt-4 max-w-2xl text-lg text-white/85">Six focus areas, one goal: opportunity for everyone.</p></div></section>
  {initiatives.map((i,n)=>{const Icon=i.icon;return(
  <Section key={i.id} id={i.id} className={`scroll-mt-20 ${n%2?'bg-soft':''}`}><div className="grid items-center gap-10 md:grid-cols-2">
    <div className={`flex aspect-[4/3] items-center justify-center rounded-2xl ${i.color} ${n%2?'md:order-2':''}`}><Icon size={96} aria-hidden="true"/></div>
    <div><h2 className="text-3xl font-bold text-navy">{i.title}</h2><p className="mt-3 text-muted">{i.detail}</p>
      <h3 className="mt-4 font-semibold">The need</h3><p className="text-muted">{i.need}</p>
      <h3 className="mt-4 font-semibold">Types of activities</h3><ul className="list-disc pl-5 text-muted">{i.activities.map(a=><li key={a}>{a}</li>)}</ul>
      <Button to="/get-involved" variant="dark" className="mt-6">Get Involved</Button></div></div></Section>)})}</>)
}
