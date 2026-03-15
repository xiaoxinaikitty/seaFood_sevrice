import { createBrowserRouter } from 'react-router-dom'
import UserLayout from '../layouts/user/UserLayout.jsx'
import HomePage from '../pages/home/index.jsx'
import LoginPage from '../pages/login/index.jsx'
import RegisterPage from '../pages/register/index.jsx'
import ProductsPage from '../pages/products/index.jsx'
import ProductDetailPage from '../pages/product-detail/index.jsx'
import SupplyPage from '../pages/supply/index.jsx'
import SupplyDetailPage from '../pages/supply-detail/index.jsx'
import DemandPage from '../pages/demand/index.jsx'
import DemandDetailPage from '../pages/demand-detail/index.jsx'
import PublishSupplyPage from '../pages/publish-supply/index.jsx'
import PublishDemandPage from '../pages/publish-demand/index.jsx'
import NewsPage from '../pages/news/index.jsx'
import NewsDetailPage from '../pages/news-detail/index.jsx'
import OrdersPage from '../pages/orders/index.jsx'
import OrderDetailPage from '../pages/order-detail/index.jsx'
import CheckoutPage from '../pages/checkout/index.jsx'
import MessagesPage from '../pages/messages/index.jsx'
import ProfilePage from '../pages/profile/index.jsx'
import NotFoundPage from '../pages/not-found/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <ProductDetailPage /> },
      { path: 'checkout/:id', element: <CheckoutPage /> },
      { path: 'supply', element: <SupplyPage /> },
      { path: 'supply/:id', element: <SupplyDetailPage /> },
      { path: 'demand', element: <DemandPage /> },
      { path: 'demand/:id', element: <DemandDetailPage /> },
      { path: 'publish-supply', element: <PublishSupplyPage /> },
      { path: 'publish-demand', element: <PublishDemandPage /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'news/:id', element: <NewsDetailPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'orders/:id', element: <OrderDetailPage /> },
      { path: 'messages', element: <MessagesPage /> },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
