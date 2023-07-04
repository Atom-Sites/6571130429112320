import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import extractValues from '@/utils/extractValues'
import useSWR from 'swr'

const faqs = [
  {
    question: "How far out are you scheduling?",
    answer: "Typically, we can schedule within a week. During our peak months of May-November, calling two to three weeks in advance is best.",
  },
  {
    question: "How do I prepare for my windows to be cleaned?",
    answer: "Moving items away from your windows, especially knick-knacks, would be helpful. While this is not required, it is greatly appreciated as it saves time and protects your valuables. Additional charges may apply if excessive furniture moving or knick-knack removal is required.",
  },
  {
    question: "Do I have to be home when you clean my windows?",
    answer: "No. While we enjoy it when our clients are at home, it's unnecessary. Arrangements should be made before your window cleaning to ensure we have access to the inside of your home and for payment.",
  },
  {
    question: "It's raining; should I reschedule?",
    answer: "We leave this up to our client's discretion. Your appointment will be rescheduled for the next available day, which may be two to three weeks during peak months.",
  },
  {
    question: "What makes windows look so dirty after it rains?",
    answer: "It's the dirt that was already on your windows. No dirt is left behind after cleaning your window, so the rain evaporates off your glass. We still work in light rain.",
  },
  {
    question: "What weather conditions do you not work in?",
    answer: "We do not work in prolonged heavy rain or thunderstorms and won't perform second-story work during high wind advisories or warnings and temperatures below 32 degrees.",
  },
  {
    question: "What type of payments do you accept?",
    answer: "We accept cash, check, and credit cards.",
  },
  {
    question: "What if I need to cancel or reschedule my appointment?",
    answer: "If you need to cancel or reschedule your appointment, we require notice by 12:00 PM the day before your appointment; otherwise, a cancellation fee may be charged.",
  },

];


export default function Example() {
  return (
    <div className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-neutral-800/10">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-neutral-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-neutral-800/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-neutral-800">
                        <span className="text-xl font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-neutral-800">{faq.answer}</p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
