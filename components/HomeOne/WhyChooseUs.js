
const WhyChooseUs = () => {
    return (
        <section className="choose-ue-area" style={{"display":"flex","flexDirection":"column","justifyContent":"center", "minHeight":"100vh", "background":"linear-gradient(#bb4343, #2c2828)", "padding":"2vh 0"}}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="choose-title">
                            <span style={{"color":"#e6e6e6"}}>Easy Process</span>
                            <h2 style={{"color":"#464141", "background":"white","padding":"11px 71px", "borderRadius":"100px 30px"}}>Our Platform Takes Away The Hard Process Of Creating Your Website</h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="choose-content">
                            <ul>
                                <li>
                                    <span>
                                        01 <i role="none" className="flaticon-technical-support"></i>
                                    </span>
                                    <h3>Initiate Contact</h3>
                                    <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </li>

                                <li role="none" className="ml">
                                    <span>
                                        02 <i role="none" className="flaticon-shield"></i>
                                    </span>
                                    <h3>Website Design</h3>
                                    <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </li>

                                <li role="none" className="ml-25">
                                    <span>
                                        03 <i role="none" className="flaticon-support"></i>
                                    </span>
                                    <h3>Full Deployment</h3>
                                    <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </li>

                                <li role="none" className="ml-25">
                                    <span>
                                        03 <i role="none" className="flaticon-support"></i>
                                    </span>
                                    <h3>Project Optimization</h3>
                                    <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="choose-img">
                            <Image loading="lazy"  height={100} width={100}  src="/images/choose-img.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;