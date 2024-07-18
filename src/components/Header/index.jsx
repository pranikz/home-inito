
// LOGO https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo-1b7ad53fafc81e97cf23af4f0ffae8d8961ee793cd3d982c132b3acfa8b75bdd.svg
'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  {
    name: 'About Us',
    href: 'https://www.inito.com/about-us'
  },
  {
    name: 'Blog',
    href: 'https://blog.inito.com/'
  },
  {
    name: 'FAQ',
    href: 'https://www.inito.com/faqs'
  },
  {
    name: 'Contact Us',
    href: 'https://www.inito.com/contact-us'
  },
  {
    name: 'Careers',
    href: 'https://www.inito.com/careers'
  },
]

export default function index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white z-10">
      <nav aria-label="Global" className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5  items-center justify-center rounded-md p-2.5 text-gray-700 flex lg:hidden"
        >
          {!mobileMenuOpen && 
          <>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" /></>}
        </button>
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Inito</span>
          <img alt="inito-logo" src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo-1b7ad53fafc81e97cf23af4f0ffae8d8961ee793cd3d982c132b3acfa8b75bdd.svg" />
        </a>
        <div className="flex lg:hidden">
          <button href="#" className="px-8 bg-inito-blue  text-white py-2 rounded-full  hover:shadow-xl transition duration-200">
            Try Inito
          </button>

        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:items-center">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-base  font-semibold leading-5 text-inito-text">
              {item.name}
            </a>
          ))}
          <a href="#" className="px-8 bg-inito-blue text-white py-2 rounded-full text-base text-bold hover:shadow-xl transition duration-200">
            Try Inito
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden bg-white">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 mt-1  inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6  ">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}