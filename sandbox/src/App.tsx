import Widget from "./components/Widget";
import ReviewsCarousel from "./components/ReviewsCarousel";
import SEO from "./components/SEO";
import StarRating from "./components/StarRating";
import PromotedProducts from "./components/PromotedProducts";
import UgcGallery from "./components/UgcGallery";
// import ReviewsTab from "./components/ReviewsTab";

function App() {
  let InstanceId_Widget = "611105";
  let InstanceId_SEO = "";
  let InstanceId_Carousel = "";
  let InstanceId_StarRating = "";
  let InstanceId_PromotedProd = "";
  let InstanceId_UgcGallery = "";
  // let InstanceId_ReviewsTab = '';

  let ProductId = "7110659702933";
  let ModePreview = "";

  return (
    <>
      <div className="wrapper">
        <div className="accordion" id="accordionExample">
          <Widget
            instanceid={InstanceId_Widget}
            modepreview={ModePreview}
            productid={ProductId}
            active="true"
            heading="Reviews Widget"
          />

          <SEO 
            instanceid={InstanceId_SEO} 
            productid={ProductId} 
            active="false"
            heading="SEO" 
          />

          <ReviewsCarousel
            instanceid={InstanceId_Carousel}
            modepreview={ModePreview}
            productid={ProductId}
            heading="Reviews Carousel"
          />

          <StarRating
            instanceid={InstanceId_StarRating}
            productid={ProductId}
            heading="Star Rating"
          />

          <PromotedProducts
            instanceid={InstanceId_PromotedProd}
            modepreview={ModePreview}
            productid={ProductId}
            heading="Promoted Products"
          />

          <UgcGallery
            instanceid={InstanceId_UgcGallery}
            modepreview={ModePreview}
            productid={ProductId}
            heading="UGC Gallery"
          />

          {/* <ReviewsTab 
              instanceid={InstanceId_ReviewsTab} 
              modepreview={ModePreview} 
              productid={ProductId} 
            /> */}
        </div>
      </div>
    </>
  );
}

export default App;
