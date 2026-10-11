import usePageMeta from '../hooks/usePageMeta.js'
import { org } from '../config/organization.js'
import { initiatives } from '../data/initiatives.js'
import { Button, Heading, Section } from '../components/ui.jsx'
const values=['Inclusion','Dignity','Empowerment','Equal opportunity','Collaboration','Sustainability']
export default function About(){
  usePageMeta('About Us','Learn about the vision, mission and guiding principles of Make A Change Foundation.')
  const r=org.registration
  return(<>
  <section className="bg-navy px-5 py-20 text-white"><div className="mx-auto max-w-6xl"><h1 className="text-4xl font-extrabold sm:text-5xl">About Make A Change Foundation</h1><p className="mt-4 max-w-2xl text-lg text-white/85">{org.message}</p></div></section>
  <Section><div className="grid gap-10 md:grid-cols-2"><div><h2 className="text-2xl font-bold text-navy">Our Vision</h2><p className="mt-3 text-muted">{org.vision}</p></div><div><h2 className="text-2xl font-bold text-navy">Our Mission</h2><p className="mt-3 text-muted">{org.mission}</p></div></div></Section>
  <Section className="bg-soft"><Heading title="Our Guiding Principles"/><ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{values.map(v=><li key={v} className="rounded-xl border-l-4 border-sun bg-white p-5 font-semibold text-navy shadow-sm">{v}</li>)}</ul></Section>
  <Section><Heading title="Areas of Focus" text="A community-centered approach: we listen first and work alongside the people we serve."/><ul className="grid gap-2 sm:grid-cols-2">{initiatives.map(i=><li key={i.id} className="text-lg">• {i.title}</li>)}</ul>
    {r.show&&<p className="mt-8 rounded-lg bg-soft p-4 text-sm text-muted">Est. {r.established} · Registration No.: {r.regNo} · Darpan ID: {r.darpan} <em>(as printed on the foundation's poster; to be verified by the organization)</em></p>}
    <Button to="/get-involved" variant="dark" className="mt-8">Get Involved</Button></Section></>)
}
