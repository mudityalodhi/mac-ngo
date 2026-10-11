import { HeartHandshake, Users, HandHeart } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'
import { org } from '../config/organization.js'
import { initiatives } from '../data/initiatives.js'
import { gallery } from '../data/gallery.js'
import { Button, Heading, Section, Img, InitiativeCard } from '../components/ui.jsx'
const marks=['Inclusive society','Equal opportunities','Dignity','Empowerment','Sustainable growth','Self-reliance']
const ways=[[HeartHandshake,'Volunteer with Us','Give your time and skills.','/get-involved'],[Users,'Join Our Community','Connect with us and stay in touch.','/contact'],[HandHeart,'Support Our Initiatives','Contact us to learn how you can help.','/contact']]
export default function Home(){
  usePageMeta('', 'Make A Change Foundation empowers underserved communities through education, sports, skill development and social welfare.')
  return(<>
  <section className="relative overflow-hidden bg-navy px-5 py-24 text-white sm:py-32">
    <div aria-hidden="true" className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sun/15"/><div className="relative mx-auto max-w-6xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sun">Together for a better tomorrow</p>
      <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">{org.tagline}</h1>
      <p className="mt-6 max-w-xl text-lg text-white/85">Empowering people, creating opportunities, and building stronger communities through education, sports, skill development, and social welfare.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Button to="/our-work">Explore Our Work</Button><Button to="/get-involved" variant="outline">Become a Volunteer</Button></div></div></section>
  <Section><div className="grid items-center gap-10 md:grid-cols-2">
    <Img src={gallery[0].src} alt={gallery[0].alt} className="aspect-[4/3] w-full rounded-2xl"/>
    <div><Heading label="Who we are" title="Change Begins With Us"/><p className="text-lg text-muted">{org.name} works to empower underserved communities, creating opportunities for sustainable growth and self-reliance. We believe every person deserves the chance to learn, grow and live with dignity.</p>
    <Button to="/about" variant="dark" className="mt-6">About Us</Button></div></div></Section>
  <Section className="bg-soft"><Heading center label="What we do" title="Creating Change, One Initiative at a Time"/>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{initiatives.map(i=><InitiativeCard key={i.id} i={i}/>)}</div></Section>
  <Section className="bg-navy text-white"><div className="grid gap-10 md:grid-cols-2">
    <div><h2 className="text-3xl font-bold text-sun">Our Vision</h2><p className="mt-4 text-lg text-white/85">{org.vision}</p></div>
    <div><h2 className="text-3xl font-bold text-sun">Our Mission</h2><p className="mt-4 text-lg text-white/85">{org.mission}</p></div></div>
    <ul className="mt-10 flex flex-wrap gap-2">{marks.map(m=><li key={m} className="rounded-full border border-sun/60 px-4 py-1 text-sm text-sun">{m}</li>)}</ul></Section>
  <Section><Heading label="Our work" title="Community in Action" text="Photographs from the foundation's community activities."/>
    <div className="grid gap-4 sm:grid-cols-2">{gallery.map(g=><figure key={g.id}><Img src={g.src} alt={g.alt} className="aspect-video w-full rounded-2xl"/><figcaption className="mt-2 text-sm text-muted">{g.caption}</figcaption></figure>)}</div>
    <Button to="/our-work" variant="dark" className="mt-8">Explore Our Work</Button></Section>
  <Section className="bg-soft"><Heading center title="Why Community Participation Matters" text="Lasting change grows when people act together — through shared learning, inclusion, youth participation and local ownership of solutions."/></Section>
  <Section><Heading center title="Be the Change You Want to See"/><div className="grid gap-6 md:grid-cols-3">
    {ways.map(([I,t,d,to])=><div key={t} className="rounded-2xl border border-slate-200 p-6 text-center"><I className="mx-auto text-coral" size={32} aria-hidden="true"/><h3 className="mt-3 text-xl font-bold text-navy">{t}</h3><p className="mt-2 text-muted">{d}</p><Button to={to} variant="outlineDark" className="mt-4">Get Started</Button></div>)}</div></Section>
  <section className="bg-navy-dark px-5 py-20 text-center text-white"><h2 className="text-3xl font-bold sm:text-4xl">Small Actions. Meaningful Change.</h2>
    <p className="mx-auto mt-4 max-w-xl text-white/80">Together, we can help create a future where everyone has the opportunity to learn, grow, and thrive.</p><Button to="/get-involved" className="mt-8">Join Our Mission</Button></section></>)
}
