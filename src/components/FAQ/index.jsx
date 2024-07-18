import React from 'react'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What results does Inito give?",
    answer:
      "Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 3 hormones.",
  },
  {
    question: "How many test strips are required per cycle?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Where can I buy more refill strips? Do I need to buy a new monitor every cycle?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Do I need to use a test strip for each hormone?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Will Inito work if I have PCOS?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Do medications affect results?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How accurate is Inito?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Is Inito FDA Registered and can HSA benefits be used to purchase it?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

  // More questions...
]

const firstColumn = faqs.slice(0, 4);
const secondColumn = faqs.slice(4);

export default function index() {
  return (
    <div className="bg-white mx-auto  flex  md:max-w-6xl w-full items-center justify-between lg:p-6 lg:px-8 flex-col ">
      <div className='text-3xl font-semibold text-center mt-5 '>
        Your top  <span className='relative'>
          questions,
          <svg className='absolute -top-10 -left-10 md:-left-8 scale-75 md:scale-90' width="234" height="127" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M162.167 37.903c-22.029-6.675-44.62-13.327-67.822-15.03-19.627-1.443-38.974.393-54.577 5.866C24.166 34.212 13.276 42.82 7.671 53.463c-2.693 5.12-4.329 10.789-3.731 16.569.556 5.361 3.603 11.11 11.052 15.138 4.065 2.199 8.887 3.757 13.66 4.979 5.623 1.436 11.335 2.552 17.078 3.459 11.575 1.826 23.22 2.66 34.656 2.968 21.941.594 43.627-.324 64.556-2.244 10.152-.933 20.186-2.099 30.002-3.58 8.878-1.343 17.62-2.99 25.629-5.385 7.862-2.351 15.231-5.462 20.644-9.643 5.422-4.184 9.152-9.826 7.17-15.992-3.491-10.883-21.519-18.573-36.567-23.45-21.402-6.948-44.095-11.138-66.54-14.155a812.34 812.34 0 0 0-16.328-2.008c-2.038-.23-4.666-.463-6.393.07-1.728.534 1.21 1.072 1.948 1.157 5.44.613 10.886 1.277 16.328 2.008 2.661.356 5.318.731 7.972 1.125 2.925.433 5.201.787 7.767 1.213 10.556 1.75 21.094 3.85 31.431 6.52 9.298 2.404 18.731 5.168 27.336 8.772 7.135 2.986 14.029 6.663 18.773 11.192 5.144 4.915 6.481 10.477 4.32 15.305-2.36 5.264-8.228 9.38-14.851 12.53-6.55 3.113-14.259 5.313-22.281 7.012-.454.098-.906.19-1.359.283-.299.064-.606.122-.913.184-.563.11-.333.067-.213.042-1.116.217-2.24.429-3.37.63-2.055.367-4.122.707-6.21 1.03a464.78 464.78 0 0 1-13.877 1.913c-2.386.294-4.785.575-7.198.838-1.206.132-2.412.26-3.616.382-.243.026-.485.047-.728.073l-.527.054c-.669.065-1.33.132-1.997.193a562.667 562.667 0 0 1-30.066 2.014l-.744.031c.975-.04-.273.011-.388.013-.562.023-1.123.04-1.684.058a599.623 599.623 0 0 1-11.459.273c-2.68.036-5.373.06-8.07.053-1.23 0-2.466-.01-3.694-.02-.786-.006 1.153.02-.114-.002-.262-.002-.523-.01-.777-.01-.785-.01-1.561-.025-2.345-.045-2.604-.057-5.22-.141-7.837-.26-.659-.03-1.309-.058-1.966-.093-.187-.012-1.51-.074-.309-.016-.26-.012-.527-.03-.786-.046a254.013 254.013 0 0 1-8.073-.608l-1.771-.168c-.105-.01-1.415-.148-.426-.044l-1.181-.127a217.67 217.67 0 0 1-7.86-1.026 103.085 103.085 0 0 1-3.331-.54 193.597 193.597 0 0 1-4.305-.798c-2.44-.485-5.02-1.045-7.153-1.587-4.549-1.149-9.087-2.56-12.961-4.647-3.474-1.873-6.093-4.171-7.795-6.72-3.503-5.256-3.343-10.8-2.28-15.799C16.284 51.42 24.556 41.56 37.236 34.63c6.038-3.302 13.081-5.875 20.814-7.69a90.977 90.977 0 0 1 5.543-1.14c1.97-.345 3.98-.647 6.013-.897.512-.062 1.016-.125 1.535-.18l.771-.085c.176-.02.877-.083.16-.018 1.085-.101 2.178-.197 3.275-.276.99-.072 1.994-.13 2.996-.185.274-.015 1.932-.108.795-.04.631-.04 1.279-.04 1.922-.057 1.07-.021 2.138-.034 3.22-.033.214-.002.435.001.647.004 1.09.002-.825-.014-.114-.003.597.009 1.193.022 1.79.035 1.084.03 2.174.072 3.263.122.17.009.468-.002.658.035-1.205-.215-.35-.019.048.005.6.038 1.207.078 1.805.121 1.164.085 2.324.193 3.491.303 1.33.122-.866-.1.459.045.265.027.537.06.803.088.802.092 1.604.185 2.412.288 1.336.172 2.669.358 4.007.56.27.043.534.08.804.122 1.29.197-.341-.057.414.066.755.122 1.47.242 2.199.369 10.81 1.883 21.416 4.645 31.874 7.661 5.147 1.485 10.266 3.033 15.376 4.584 2.006.605 4.586.663 6.526.508.701-.06 3.423-.44 1.441-1.04l-.017.002Z" fill="#29A2BA" /></g><defs><clipPath id="a"><path fill="#fff" transform="rotate(11.008 8.252 85.644)" d="M0 0h220.765v86.439H0z" /></clipPath></defs></svg>


        </span><br /> Answered
      </div>
      <div className="mx-auto  lg:px-8  w-full">
        <div className="mx-auto max-w-xs md:max-w-5xl divide-y divide-gray-900/10">

          <dl className="mt-10   grid md:grid-cols-2 gap-3    ">
            <div> {firstColumn.map((faq) => (
              <Disclosure key={firstColumn.question} as="div" className=" bg-[#f7f7fe] p-4 grow-0 mb-3  rounded-lg">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className=" pr-12">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
            </div>
            <div>
              {secondColumn.map((faq) => (
                <Disclosure key={secondColumn.question} as="div" className=" bg-[#f7f7fe] p-4 grow-0 mb-3 rounded-lg">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                        <MinusSmallIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className=" pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>

              ))}
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
