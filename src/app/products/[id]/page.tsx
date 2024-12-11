import { Breadcrumbs } from '@/components/breadcrumbs'
import { ProductImages } from '@/components/product-images'
import { ProductInfo } from '@/components/product-info'
import { TabsSection } from '@/components/tabs-section'

export default function ProductPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Product Name', href: '/product/123' },
  ]

  const productImages = [
    '/images/pd1.png',
    '/images/pd2.png',
    '/images/pd3.png',
  ]

  return (
    <div className="max-w[1240px] mx-auto md:px-4  px-2 md:py-6 py-3">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <ProductImages images={productImages} />
        <ProductInfo
          title="One Life Graphic T-shirt"
          rating={4.5}
          price={99.99}
          discountPrice={79.99}
          discountLabel="20% OFF"
        />
      </div>
      <div className="mt-12">
        <TabsSection />
      </div>
    </div>
  )
}

