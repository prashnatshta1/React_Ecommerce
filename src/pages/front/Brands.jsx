import { Loading, ProductSection } from "@/components";
import http from "@/http";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Brands = () => {
    

    const [brand, setBrand] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        setLoading(true);
        Promise.all([
            http.get(`/brands/${params.id}`),
            http.get(`/brands/${params.id}/products`),
        ])
        .then(([{data: cat}, {data:proList}]) => {
            setBrand(cat);
            setProducts(proList);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }, [params.id]);

return loading ? <Loading /> : <ProductSection title={brand.name} products={products} small>

</ProductSection>
}