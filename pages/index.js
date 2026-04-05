
export default function Home() {

const slabs = [
{name:"Viola Nero Vein", img:"/viola.jpg"},
{name:"Carrara Oro", img:"/carrara.jpg"},
{name:"Bulgari Classico", img:"/bulgari.jpg"},
{name:"Atelier Beige", img:"/atelier.jpg"},
{name:"Emperador Noir", img:"/emperador.jpg"},
{name:"Calacatta Aureo", img:"/aureo.jpg"},
{name:"Mont Blanc Prime", img:"/mont.jpg"},
{name:"Levanto Rosso", img:"/levanto.jpg"},
{name:"Taj Mahal Natural", img:"/taj.jpg"}
]

return (
<div>

<header className="header">
<h1 className="logo">STONE SOLUTIONS</h1>
<p className="tagline">Mineral Surface | Recyclable Slabs</p>
</header>

<section className="hero">
<h2>Premium Architectural Surfaces</h2>
<p style={{color:"#aaa"}}>Australia-wide slab supply</p>
</section>

<section className="grid">
{slabs.map(s => (
<div className="card" key={s.name}>
<img src={s.img} />
<h3>{s.name}</h3>
</div>
))}
</section>

<section className="contact">
<p>Email: office@sinteredstonesolutions.com.au</p>
<p>Phone: 02 7708 8484</p>
<p style={{color:"#aaa"}}>We deliver slabs Australia wide</p>
</section>

<footer className="footer">
Sintered Stone Solutions Pty Ltd
</footer>

</div>
)
}
