import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { signatureDishes } from '../data/menu'

export function SignatureDishes() {
  return <section className="section signatures"><div className="section-heading"><div><p className="eyebrow">From our kitchen</p><h2>Signature <em>Flavours</em></h2></div><p>Discover a few of the dishes that define the Malabar Table experience.</p></div><div className="dish-grid">{signatureDishes.map((dish, index) => <motion.article className="dish-card" key={dish.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><div className="dish-image"><img src={dish.image} alt={dish.name} loading="lazy" /><span>{dish.tag}</span></div><div className="dish-meta"><div><p className="dish-category">{dish.category}</p><h3>{dish.name}</h3></div><strong>₹{dish.price}</strong></div><p>{dish.description}</p></motion.article>)}</div><a className="inline-link" href="#menu">View the full menu <ArrowUpRight size={17} /></a></section>
}
