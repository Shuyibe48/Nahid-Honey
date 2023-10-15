const DeliveryInfo = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto">
                <div className="flex flex-col md:gap-6">
                    {/* Free Delivery */}
                    <div className="mb-4 md:mb-0 md:mr-4">
                        <div className="flex items-center">
                            <span className="bg-green-500 text-white rounded-full p-2 mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </span>
                            <p className="text-lg font-semibold">Free Delivery</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            On orders over $50 within the US.
                        </p>
                    </div>

                    {/* Cash on Delivery */}
                    <div className="mb-4 md:mb-0 md:mr-4">
                        <div className="flex items-center">
                            <span className="bg-blue-500 text-white rounded-full p-2 mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </span>
                            <p className="text-lg font-semibold">Cash on Delivery</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Pay with cash upon delivery.
                        </p>
                    </div>

                    {/* Returns */}
                    <div>
                        <div className="flex items-center">
                            <span className="bg-red-500 text-white rounded-full p-2 mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </span>
                            <p className="text-lg font-semibold">Easy Returns</p>
                        </div>
                        <p className="text-gray-600 text-sm">
                            30 days for returns and exchanges.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryInfo;
