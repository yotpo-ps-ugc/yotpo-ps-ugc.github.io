
interface Props {
    instanceid: string;
    modepreview: string;
    productid: string;
}

function ReviewsTab({ instanceid, modepreview, productid }: Props) {

    return (
        <>
            <div className="yotpo-widget-instance" 
                data-yotpo-instance-id={ instanceid === '' ? '608406' : instanceid }
                data-yotpo-product-id={ instanceid === '' ? null : productid }
                mode-preview={ modepreview }/>
        </>

    );
}

export default ReviewsTab;
