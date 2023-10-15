import DetailInfo from './DetailInfo';

function ProductInfo() {
    return (
        <div>
            <DetailInfo
                brand={'No brand'}
                title="প্রাকৃতিক চাকের মধু"
                ratings={4.5}
                available={25}
                price={19.99}
            />
        </div>
    );
}

export default ProductInfo;
