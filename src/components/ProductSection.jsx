import { ProductCard } from ".";
import { Loading } from "./Loading";

export const ProductSection = ({ title, products = [], loading = false, small = false }) => {
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-12 py-3">
                    <div className="row">
                        <div className="col-12 text-center text-uppercase">
                            <h2>{title}</h2>
                        </div>
                    </div>
                    {loading ? (
                        <Loading />
                    ) : (
                        <div className={`row ${small ? 'row-cols-xl-6 row-cols-lg-3' : 'row-cols-lg-4'} row-cols-sm-2 justify-content-center`}>
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
