interface Props {
    instanceid: string;
    heading: string;
    productid: string;
}

function StarRating({ instanceid, heading, productid }: Props) {

    return(
        <>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    {heading}
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="yotpo-widget-instance" 
                        data-yotpo-instance-id={ instanceid === '' ? '491372' : instanceid } 
                        data-yotpo-product-id={ instanceid === '' ? null : productid }>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default StarRating;