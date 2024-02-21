interface Props {
    instanceid: string;
    heading: string;
    modepreview: string;
    productid: string;
}

function UgcGallery({ instanceid, heading, modepreview, productid }: Props) {

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                        { heading }
                    </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="yotpo-widget-instance" 
                            data-yotpo-instance-id={ instanceid === '' ? '608405' : instanceid }  
                            data-yotpo-product-id={ instanceid === '' ? null : productid }
                            mode-preview={ modepreview }>
                        </div>
                    </div>
                </div>
            </div>
        
        </>

    );
}

export default UgcGallery;