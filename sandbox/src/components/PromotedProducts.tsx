interface Props {
    instanceid: string;
    heading: string;
    modepreview: string;
    productid: string;
}

function PromotedProducts({ instanceid, heading, modepreview, productid }: Props) {

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFour">
                        { heading }
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <div className="yotpo-widget-instance" 
                        data-yotpo-instance-id={ instanceid === '' ? '608401' : instanceid }  
                        data-yotpo-product-id={ instanceid === '' ? null : productid }
                        mode-preview={ modepreview }>
                    </div>
                    </div>
                </div>
            </div>
        
        </>

    );
}

export default PromotedProducts;