import { Link } from "react-router-dom";

const categories = [
    {
        id: 1,
        category: 'মধু'
    },
    {
        id: 2,
        category: 'চাল'
    },
    {
        id: 3,
        category: 'মিঠাই'
    },
    {
        id: 4,
        category: 'ওর্গানিক ফুড'
    },
    {
        id: 5,
        category: 'পাতা'
    },
    {
        id: 6,
        category: 'দুধ'
    },
    {
        id: 7,
        category: 'দুধ'
    },
    {
        id: 8,
        category: 'দুধ'
    },
    {
        id: 9,
        category: 'দুধ'
    },
    {
        id: 10,
        category: 'দুধ'
    },
    {
        id: 11,
        category: 'দুধ'
    },
    {
        id: 12,
        category: 'দুধ'
    },
    {
        id: 13,
        category: 'দুধ'
    },
    {
        id: 14,
        category: 'দুধ'
    },
    {
        id: 15,
        category: 'দুধ'
    },
    {
        id: 16,
        category: 'দুধ'
    },
]

const Categories = () => {
    return (
        <div className="flex flex-col gap-y-2 bg-white py-2 rounded-lg">
            <h1 className="ps-1 text-xl font-semibold border-b pb-1 border-[#C46A2C]">Categories</h1>
            <div className="h-48 flex flex-col overflow-scroll">
                {
                    categories.map((category) => <Link className="text-sm text-blue-900 font-semibold hover:bg-[#f5f5f5] ps-2 py-1 hover:text-[#C46A2C]" key={category.id}>{category.category}</Link>)
                }
            </div>
        </div>
    );
};

export default Categories;