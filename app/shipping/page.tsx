import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ShippingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shipping & Returns</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
            <p className="mb-4">We offer the following shipping options:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard Shipping (3-5 business days): $5.99</li>
              <li>Express Shipping (2-3 business days): $12.99</li>
              <li>Next Day Shipping (1 business day): $24.99</li>
            </ul>
            <p className="mt-4">Free standard shipping on orders over $100.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
            <p className="mb-4">We want you to love your SPINNECO purchase. If you're not completely satisfied, we accept returns within 30 days of purchase.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Items must be unworn, unwashed, and in their original condition with all tags attached.</li>
              <li>Return shipping costs are the responsibility of the customer unless the item is defective.</li>
              <li>Refunds will be issued to the original form of payment within 5-10 business days of receiving the return.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Initiate a Return</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Log into your SPINNECO account and go to your order history.</li>
              <li>Select the item(s) you wish to return and choose a reason for the return.</li>
              <li>Print the prepaid return label (for defective items) or your own shipping label.</li>
              <li>Pack the item(s) securely and attach the return label.</li>
              <li>Drop off the package at your nearest post office or shipping center.</li>
            </ol>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

