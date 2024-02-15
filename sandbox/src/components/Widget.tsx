interface Props {
    instanceid: string;
    heading: string;
    modepreview: string;
    productid: string;
    active: string;
}

function Widget({ instanceid, heading, modepreview, productid, active }: Props) {

    return (
            <>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={ active === 'true' ? 'accordion-button' : 'accordion-button collapsed' } type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            { heading }
                        </button>
                    </h2>
                    <div id="collapseOne" className={ active === 'true' ? 'accordion-collapse collapse show' : 'accordion-collapse collapse' } data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="yotpo-widget-instance" 
                                data-yotpo-instance-id={ instanceid === '' ? '513953' : instanceid } 
                                data-yotpo-product-id={ instanceid === '' ? null : productid }
                                data-yotpo-name="Product Title" 
                                data-yotpo-url="The URL of your product page" 
                                data-yotpo-image-url="The product image URL" 
                                data-yotpo-price="Product Price" 
                                data-yotpo-currency="Product Currency"
                                mode-preview={ modepreview }
                                data-yotpo-description="Product Description">
                            </div>
                        </div>
                    </div>
                </div>
            
            </>
    
        );
    }

    export default Widget;

