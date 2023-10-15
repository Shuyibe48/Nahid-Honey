import DeliveryInfo from "./DetailDeliveryCriteria/DeliveryInfo";
import ProductImages from "./DetailImage/ProductImages";
import ProductInfo from "./DetailInfo/ProductInfo";

const ProductDetail = () => {
    return (
        <div className="px-2 lg:grid lg:grid-cols-3 grid gap-y-4 lg:gap-y-4 lg:gap-x-4">
            <div>
                <ProductImages />
            </div>
            <div>
                <ProductInfo />
            </div>
            <div>
                <DeliveryInfo />
            </div>
        </div>
    );
};

export default ProductDetail;