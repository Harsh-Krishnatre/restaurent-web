import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = "https://dummyjson.com/recipes";
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setRecipes(data.recipes);
                setLoading(false);
            })
            .catch((err) => {
                console.log("Network Error", err);
                setError(err.message);
                setLoading(false);

            })
    }, []);

    return (

        <div>
            {loading && <p>Loading.........</p>}
            {error && <p>{error}</p>}
            {
                !loading && !error &&
                <div>
                    <h1 className="text-3xl font-bold font-serif text-center" > Restaurant Menu</h1 >
                    <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">&nbsp;</th>
                                <th className="border border-gray-300 px-4 py-2">Recipe Name</th>
                                <th className="border border-gray-300 px-4 py-2">Cuisine</th>
                                <th className="border border-gray-300 px-4 py-2">Rating</th>
                                <th className="border border-gray-300 px-4 py-2">Price</th>
                                <th className="border border-gray-300 px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map((r) => (
                                <tr key={r.id} className="text-center">
                                    <td className="border border-gray-300 px-4 py-2">
                                        <img src={r.image} alt={r.name} className="w-[100px] h-[100px] object-cover" />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{r.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{r.cuisine}</td>
                                    <td className="border border-gray-300 px-4 py-2">{r.rating}</td>
                                    <td className="border border-gray-300 px-4 py-2">120/-</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded">Add to Cart</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }

        </div >

    );
};

export default Dashboard;
