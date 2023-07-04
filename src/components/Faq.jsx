'use client'
import { Disclosure, Transition } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

export default function Faq(props) {
    const { header, intro, faqs } = props

    if (!header || !intro || !faqs) {
        return <div>failed to load</div>
    }

    return (
        <div className="bg-neutral-50">
            {/*Hero for secondary pages*/}
            <div className="bg-primary-100">
                <div className="relative px-6  lg:px-8">
                    <div className="mx-auto max-w-2xl py-24 lg:py-32">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-neutral-800 lg:text-6xl">
                                {header}
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-neutral-800">
                                {intro}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-neutral-800/10">
                    <h2 className="text-4xl font-bold leading-10 tracking-tight text-neutral-800">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-neutral-800/10">
                        {faqs.map((faq) => (
                            <Disclosure
                                as="div"
                                key={faq.question}
                                className="pt-6"
                            >
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-neutral-800">
                                                <span className="text-xl font-medium leading-7">
                                                    {faq.question}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <PlusSmallIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Disclosure.Panel
                                                as="dd"
                                                className="mt-2 pr-12"
                                            >
                                                <p className="text-base leading-7 text-neutral-800">
                                                    {faq.answer}
                                                </p>
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
    )
}
