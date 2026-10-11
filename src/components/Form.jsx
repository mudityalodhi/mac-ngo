import { useState } from 'react'
import { initiatives } from '../data/initiatives.js'
import { ContactLines, Button } from './ui.jsx'
const base='mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-navy'
function Field({ id, label, error, children }){
  return(<div><label htmlFor={id} className="font-medium">{label}</label>{children}
    {error&&<p id={`${id}-e`} role="alert" className="mt-1 text-sm text-coral">{error}</p>}</div>)
}
export default function Form({ kind }){
  const vol = kind==='volunteer'
  const empty = vol ? {name:'',email:'',phone:'',interests:[],availability:'',skills:'',message:''} : {name:'',email:'',subject:'',message:''}
  const [d,setD]=useState(empty); const [err,setErr]=useState({}); const [ok,setOk]=useState(false)
  const set=(k,val)=>setD(s=>({...s,[k]:val}))
  const toggle=id=>set('interests', d.interests.includes(id)?d.interests.filter(x=>x!==id):[...d.interests,id])
  function validate(){
    const e={}
    if(d.name.trim().length<2) e.name='Please enter your full name.'
    if(!/^\S+@\S+\.\S+$/.test(d.email)) e.email='Please enter a valid email address.'
    if(vol){
      if(!/^[6-9]\d{9}$/.test(d.phone.replace(/[\s-]/g,''))) e.phone='Enter a valid 10-digit mobile number.'
      if(!d.interests.length) e.interests='Select at least one area of interest.'
      if(!d.availability) e.availability='Please choose your availability.'
      if(d.skills.trim().length<3) e.skills='Please briefly describe your skills or experience.'
    } else {
      if(d.subject.trim().length<3) e.subject='Please enter a subject.'
      if(d.message.trim().length<10) e.message='Message should be at least 10 characters.'
    }
    return e
  }
  function submit(ev){ ev.preventDefault(); const e=validate(); setErr(e); if(!Object.keys(e).length) setOk(true) }
  if(ok) return(<div role="status" className="rounded-2xl border-2 border-leaf bg-leaf/10 p-6">
    <h3 className="text-xl font-bold text-navy">Thank you — your details look good!</h3>
    <p className="mt-2">This website is a frontend demonstration: <strong>nothing has been sent or saved.</strong> To reach the foundation, please contact them directly:</p>
    <div className="mt-3"><ContactLines/></div>
    <Button variant="dark" className="mt-4" onClick={()=>{setD(empty);setOk(false)}}>Fill again</Button></div>)
  const inp=(id,type='text')=><input id={id} type={type} value={d[id]} onChange={e=>set(id,e.target.value)} aria-invalid={!!err[id]} aria-describedby={err[id]?`${id}-e`:undefined} className={base}/>
  const area=(id,rows)=><textarea id={id} rows={rows} value={d[id]} onChange={e=>set(id,e.target.value)} aria-invalid={!!err[id]} aria-describedby={err[id]?`${id}-e`:undefined} className={base}/>
  return(<form onSubmit={submit} noValidate className="space-y-5 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
    <Field id="name" label="Full name *" error={err.name}>{inp('name')}</Field>
    <Field id="email" label="Email address *" error={err.email}>{inp('email','email')}</Field>
    {vol?<>
      <Field id="phone" label="Phone number *" error={err.phone}>{inp('phone','tel')}</Field>
      <fieldset><legend className="font-medium">Area of interest * (choose one or more)</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">{initiatives.map(i=><label key={i.id} className="flex items-center gap-2"><input type="checkbox" checked={d.interests.includes(i.id)} onChange={()=>toggle(i.id)} className="h-4 w-4 accent-navy"/>{i.title}</label>)}</div>
        {err.interests&&<p role="alert" className="mt-1 text-sm text-coral">{err.interests}</p>}</fieldset>
      <Field id="availability" label="Availability *" error={err.availability}><select id="availability" value={d.availability} onChange={e=>set('availability',e.target.value)} className={base}>
        <option value="">Select…</option><option>Weekdays</option><option>Weekends</option><option>Flexible</option></select></Field>
      <Field id="skills" label="Skills or experience *" error={err.skills}>{area('skills',3)}</Field>
      <Field id="message" label="Message (optional)">{area('message',3)}</Field>
    </>:<>
      <Field id="subject" label="Subject *" error={err.subject}>{inp('subject')}</Field>
      <Field id="message" label="Message *" error={err.message}>{area('message',5)}</Field>
    </>}
    <Button variant="dark" type="submit">{vol?'Submit interest':'Send message'}</Button>
    <p className="text-sm text-muted">Demo form: messages are not transmitted unless a real submission service is configured.</p></form>)
}
