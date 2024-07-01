import { Layout } from "@/components"
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom"
import * as Pages from "@/pages"

export const WebRoutes = () => {
    return <BrowserRouter>
    <Routes>
        < Route path="/" element={<Layout />}>
            <Route index element={<Pages.Front.Home/>}/>


            <Route path="/categories/:id" element={<Pages.Front.Categories/>}/>

            <Route path="/brands/:id" element={<Pages.Front.Brands/>}/>
            <Route path="/products/:id" element={<Pages.Front.Product/>}/>

            <Route path="/search" element={<Pages.Front.Search/>}/>



            </Route>
        </Routes>
        </BrowserRouter>
}
