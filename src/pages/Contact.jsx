import { Phone, Mail, MapPin, Share2 } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'
import { org } from '../config/organization.js'
import Form from '../components/Form.jsx'
import { Section } from '../components/ui.jsx'
const card='rounded-2xl border border-slate-200 p-5'
export default function Contact(){
  usePageMeta('Contact Us','Call, email or visit Make A Change Foundation in Lucknow.')
  return(<>
  <section className="bg-navy px-5 py-20 text-white"><div className="mx-auto max-w-6xl"><h1 className="text-4xl font-extrabold sm:text-5xl">Contact Us</h1></div></section>
  <Section><div className="grid gap-10 lg:grid-cols-2"><div className="space-y-4">
    <div className={card}><Phone className="text-coral" aria-hidden="true"/><h2 className="mt-2 font-bold">Phone</h2>{org.phones.map(p=><a key={p} className="block underline" href={`tel:+91${p}`}>{p}</a>)}</div>
    <div className={card}><Mail className="text-coral" aria-hidden="true"/><h2 className="mt-2 font-bold">Email</h2><a className="break-all underline" href={`mailto:${org.email}`}>{org.email}</a></div>
    <div className={card}><MapPin className="text-coral" aria-hidden="true"/><h2 className="mt-2 font-bold">Address</h2><p>{org.address}</p></div>
    <div className={card}><Share2 className="text-coral" aria-hidden="true"/><h2 className="mt-2 font-bold">Social</h2>{org.social.map(s=>s.url?<a key={s.name} className="block underline" href={s.url} target="_blank" rel="noreferrer">{s.name}: {s.handle}</a>:<p key={s.name}>{s.name}: {s.handle}</p>)}</div></div>
    <Form kind="contact"/></div></Section></>)
}
