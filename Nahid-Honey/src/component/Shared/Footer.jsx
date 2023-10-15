const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Customer Care */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
                        <ul className="list-none">
                            <li>
                                <a href="#">Help Center</a>
                            </li>
                            <li>
                                <a href="#">How to Buy</a>
                            </li>
                            <li>
                                <a href="#">Returns & Refunds</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">CCMS - Central Complain Management System</a>
                            </li>
                        </ul>
                    </div>

                    {/* About Nahid Honey */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Nahid Honey</h3>
                        <ul className="list-none">
                            <li>
                                <a href="#">Digital Payments</a>
                            </li>
                            <li>
                                <a href="#">Daraz Card</a>
                            </li>
                            <li>
                                <a href="#">Daraz Blog</a>
                            </li>
                            <li>
                                <a href="#">Daraz Cares</a>
                            </li>
                            <li>
                                <a href="#">Daraz Mart</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Daraz App</a>
                            </li>
                            <li>
                                <a href="#">Daraz Exclusives</a>
                            </li>
                            <li>
                                <a href="#">Daraz Donates</a>
                            </li>
                        </ul>
                    </div>

                    {/* Payment Methods */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
                        <ul className="list-none">
                            <li>
                                <a href="#">Visa</a>
                            </li>
                            <li>
                                <a href="#">MasterCard</a>
                            </li>
                            <li>
                                <a href="#">PayPal</a>
                            </li>
                            <li>
                                <a href="#">Cash on Delivery</a>
                            </li>
                            <li>
                                <a href="#">Daraz Wallet</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
