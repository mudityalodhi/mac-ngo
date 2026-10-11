import usePageMeta from '../hooks/usePageMeta.js'
import { Button } from '../components/ui.jsx'
export default function NotFound(){
  usePageMeta('Page Not Found')
  return(<section className="px-5 py-28 text-center"><p className="text-6xl font-extrabold text-sun">404</p><h1 className="mt-4 text-3xl font-bold text-navy">Page not found</h1><p className="mt-2 text-muted">The page you are looking for doesn't exist.</p><Button to="/" variant="dark" className="mt-6">Back to Home</Button></section>)
}
