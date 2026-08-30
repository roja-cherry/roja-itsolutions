import { galleryImages } from '../data/gallery'

export function Gallery() {
  return <section className="section gallery" id="gallery"><div className="section-heading"><div><p className="eyebrow">A glimpse inside</p><h2>Gather at the <em>Table</em></h2></div><p>From slow lunches to celebration dinners, every visit unfolds a little differently.</p></div><div className="gallery-grid">{galleryImages.map((image, index) => <figure className={image.className} key={image.title}><img className="gallery-image" src={image.src} alt={image.alt} loading="lazy" /><figcaption><span>{String(index + 1).padStart(2, '0')}</span>{image.title}</figcaption></figure>)}</div></section>
}
