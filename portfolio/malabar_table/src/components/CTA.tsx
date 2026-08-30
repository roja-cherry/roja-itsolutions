import { ArrowUpRight } from 'lucide-react'
import { whatsappUrl } from '../config/contact'
export function CTA() { return <section className="cta"><div><p className="eyebrow light">Come together</p><h2>Planning Your Next <em>Meal?</em></h2><p>Gather your people, explore the flavours of Malabar and make your next meal memorable.</p><div><a className="button button-cream" href={whatsappUrl} target="_blank" rel="noreferrer">Reserve a Table <ArrowUpRight size={17} /></a><a className="text-button" href="#menu">Explore Menu</a></div></div></section> }
