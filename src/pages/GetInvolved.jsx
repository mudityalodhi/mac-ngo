import usePageMeta from '../hooks/usePageMeta.js'
import Form from '../components/Form.jsx'
import { Section, Heading } from '../components/ui.jsx'
export default function GetInvolved(){
  usePageMeta('Get Involved','Volunteer with Make A Change Foundation and help empower communities.')
  return(<>
  <section className="bg-navy px-5 py-20 text-white"><div className="mx-auto max-w-6xl"><h1 className="text-4xl font-extrabold sm:text-5xl">Be the Change You Want to See</h1><p className="mt-4 max-w-2xl text-lg text-white/85">Volunteering is a way to share your time and skills with communities that need opportunity.</p></div></section>
  <Section><div className="grid gap-10 lg:grid-cols-2"><div><Heading title="Why volunteer?"/>
    <ul className="list-disc space-y-2 pl-5 text-muted"><li>Make a direct difference in your community</li><li>Build teamwork, leadership and communication skills</li><li>Meet like-minded people</li><li>Contribute in sports, teaching, outreach, skills training, events and more</li></ul>
    <p className="mt-6 text-muted">No donation facility is listed here. To support the foundation, please use the contact details on the Contact page.</p></div><Form kind="volunteer"/></div></Section></>)
}
