import { Loading, ProductSection } from "@/components";
import http from "@/http";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Categories = () => {
    

    const [category, setCategory] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        setLoading(true);
        Promise.all([
            http.get(`/categories/${params.id}`),
            http.get(`/categories/${params.id}/products`),
        ])
        .then(([{data: cat}, {data:proList}]) => {
            setCategory(cat);
            setProducts(proList);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }, [params.id]);

return loading ? <Loading /> : <ProductSection title={category.name} products={products} small>

</ProductSection>
}