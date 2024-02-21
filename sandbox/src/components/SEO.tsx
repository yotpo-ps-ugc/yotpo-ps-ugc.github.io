interface Props {
    instanceid: string;
    heading: string;
    productid: string;
    active: string;
}

function SEO({instanceid, heading, productid, active }: Props) {

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className={ active === 'true' ? 'accordion-button' : 'accordion-button collapsed' } type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        { heading }
                    </button>
                </h2>
                <div id="collapseFour" className={ active === 'true' ? 'accordion-collapse collapse show' : 'accordion-collapse collapse' } data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div id="seo" className="yotpo-widget-instance" 
                        data-yotpo-instance-id={ instanceid === '' ? '600662' : instanceid } 
                        data-yotpo-product-id={ instanceid === '' ? null : productid }/>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default SEO;