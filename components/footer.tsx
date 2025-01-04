import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/">
              <span className="sr-only">SPINNECO</span>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CC33CE39-07C3-48A3-8E9B-15F352BD74C5-ODDNN9azcrdCanIH3chnj4t9vF4wD1.png"
                alt="SPINNECO"
                width={96}
                height={96}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-base">
              Elevate your status with SPINNECO. Join us and start your journey to a new level of sophistication and style.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">Shop</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/shop/new-arrivals" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/best-sellers" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                      Best Sellers
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/collections" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                      Collections
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/contact" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/shipping" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                      Shipping & Returns
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/about" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-400 dark:text-gray-300 xl:text-center">
            &copy; 2024 SPINNECO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

