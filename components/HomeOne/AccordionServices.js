import Link from 'next/link'

const Features = () => {
        return (
            <section className="features-area" style={{"borderBottom":"2px solid #3c3838"}}>
                
                <div className="container">
                    <div className="row">
                
                <hr />
                        <h1>Our Services</h1>
                
                       <div className='wrapper2'>
                            <div>
                                Check out our existing clients' projects:
                                <br />
                            <Link href="/about-1">
                                <a className="default-btn2">
                                    View Live Projects
                                </a>
                            </Link>
                            </div>
                            
                        </div>
                        
                    
                    </div>
                </div>
            </section>
        )
}

export default Features;