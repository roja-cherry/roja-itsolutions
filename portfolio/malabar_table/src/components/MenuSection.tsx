import { useMemo, useState } from 'react'
import { menuCategories, menuItems, type MenuMarker } from '../data/menu'

const formatPrice = (price: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)
const markerLabels: Record<MenuMarker, string> = { Vegetarian: 'Veg', Signature: 'Signature', Spicy: 'Spicy' }

export function MenuSection() {
  const [active, setActive] = useState<(typeof menuCategories)[number]>('Breakfast')
  const items = useMemo(() => menuItems.filter(item => item.category === active), [active])
  return <section id="menu" className="menu-section"><div className="menu-inner"><div className="menu-intro"><p className="eyebrow">A little of everything</p><h2>The <em>Menu</em></h2><p>Our menu is a love letter to the dishes that make Kerala home, from morning hoppers to an unhurried evening meal.</p><span>Vegetarian choices are available across the menu.</span></div><div className="menu-content"><div className="menu-tabs" role="tablist" aria-label="Menu categories">{menuCategories.map(category => <button type="button" key={category} role="tab" aria-selected={active === category} className={active === category ? 'active' : ''} onClick={() => setActive(category)}>{category}</button>)}</div><div className="menu-list">{items.map(item => <article key={item.name}><div><div className="menu-item-heading"><h3>{item.name}</h3>{item.markers && <span className="menu-markers">{item.markers.map(marker => <i className={`marker marker-${marker.toLowerCase()}`} key={marker}>{markerLabels[marker]}</i>)}</span>}</div><p>{item.description}</p></div><strong>{formatPrice(item.price)}</strong></article>)}</div></div></div></section>
}
