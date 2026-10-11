import { useEffect } from 'react'
export default function usePageMeta(title, description){
  useEffect(()=>{
    document.title = title ? `${title} | Make A Change Foundation` : 'Make A Change Foundation'
    if(description) document.querySelector('meta[name="description"]')?.setAttribute('content',description)
  },[title,description])
}
