
export default function Home() {
return (
<div>

<header className="header">
<img src="/logo.png" className="logo"/>
</header>

<section className="hero">
<h1 style={{fontWeight:300}}>Premium Mineral Surface Slabs</h1>
<p style={{color:"#aaa"}}>Australia-wide supply for architects, builders and designers</p>
</section>

<section className="section">
<h2 style={{fontWeight:300}}>Product Catalogue</h2>
<p style={{color:"#aaa"}}>View our full range of mineral surfaces</p>
<a href="/brochure.pdf" className="button">Download Brochure</a>
</section>

<section className="section">
<p>Email: office@sinteredstonesolutions.com.au</p>
<p>Phone: 02 7208 8442</p>
<p style={{color:"#aaa"}}>We deliver slabs Australia wide</p>
</section>

<footer className="footer">
Sintered Stone Solutions Pty Ltd
</footer>

</div>
)
}
