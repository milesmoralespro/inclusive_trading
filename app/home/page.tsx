import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, ClipboardCheck, Home, Phone } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Building2 className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Inclusive Trading</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Expert Property Valuation Services
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Accurate, reliable, and professional property valuations for all your needs.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get a Quote</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Home className="w-8 h-8 mb-2" />
                  <CardTitle>Residential Valuations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Comprehensive valuations for houses, apartments, and all types of residential properties.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Building2 className="w-8 h-8 mb-2" />
                  <CardTitle>Commercial Valuations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Expert valuations for office buildings, retail spaces, and industrial properties.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ClipboardCheck className="w-8 h-8 mb-2" />
                  <CardTitle>Property Consultancy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Professional advice on property investments, development potential, and market trends.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Inclusive Trading</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  With over 20 years of experience, Inclusive Trading has been providing accurate and reliable property
                  valuations across the country. Our team of certified valuers combines local market knowledge with
                  industry-leading expertise to deliver valuations you can trust.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Certified Professional Valuers
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Comprehensive Property Reports
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" w-4 h-4 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Fast Turnaround Times
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Team of valuers"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Inclusive Trading. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}