import { Loading, ProductSection } from "@/components"
import { useState, useEffect } from "react"
import { Carousel } from "react-bootstrap"
import http from "@/http"
import { imgUrl } from "@/lib"

export const Home = () => {
    const [featured, setFeatured] = useState([])
    const[latest, setLatest] = useState([])
    const[topSelling, setTopSelling] = useState([])
    const[loading, setLoading] = useState(false)

        useEffect(() => {
            setLoading(true)
            Promise.all([
                http.get('/products/featured'),
                http.get('/products/latest'),
                http.get('/products/top-selling'),
            ])
            .then(([{data: featData}, {data: latData}, {data: topData}]) => {
                setFeatured(featData)
                setLatest(latData)
                setTopSelling(topData)
            })
            .catch(() => {})
            .finally(() => setLoading(false))
        }, [])


    return  <div className="col-12">

    <main className="row">

        <div className="col-12 px-0">
            <Carousel>
                <Carousel.Item>
                    <img src="/slider-1.jpg" className="w-100" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src="/slider-2.jpg" className="w-100" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src="/slider-3.jpg" className="w-100" />
                </Carousel.Item>

            </Carousel>
        </div>
      <ProductSection title="Featured Products" products={featured.slice(0, 4)} loading={loading} />
       

        <div className="col-12">
            <hr/>

            </div>
      <ProductSection title="Latest Products" products={latest.slice(0, 4)}  loading={loading} />
      <div className="col-12">
            <hr/>

            </div>
      <ProductSection title="Top Selling Products" products={topSelling.slice(0, 4)} loading={loading} />

        


        <div className="col-12 py-3 bg-light d-sm-block d-none">
            <div className="row">
                <div className="col-lg-3 col ms-auto large-holder">
                    <div className="row">
                        <div className="col-auto ms-auto large-icon">
                            <i className="fas fa-money-bill"></i>
                        </div>
                        <div className="col-auto me-auto large-text">
                            Best Price
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col large-holder">
                    <div className="row">
                        <div className="col-auto ms-auto large-icon">
                            <i className="fas fa-truck-moving"></i>
                        </div>
                        <div className="col-auto me-auto large-text">
                            Fast Delivery
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col me-auto large-holder">
                    <div className="row">
                        <div className="col-auto ms-auto large-icon">
                            <i className="fas fa-check"></i>
                        </div>
                        <div className="col-auto me-auto large-text">
                            Genuine Products
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

    
}