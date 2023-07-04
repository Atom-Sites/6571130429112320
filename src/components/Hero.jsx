export default function Hero(props) {
    const { headingText, descriptionText, heroImageUrl, heroImageAlt, anchor } =
        props

    if (
        !headingText ||
        !descriptionText ||
        !heroImageUrl ||
        !heroImageAlt ||
        !anchor
    ) {
        return <div>failed to load</div>
    }

    return (
        <div
            id={anchor}
            className="editable-component relative isolate overflow-hidden bg-primary-400"
            data-json="hero"
        >
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-20 sm:pb-32 lg:flex lg:px-8 lg:pb-40 lg:pt-20">
                {/*This is the header and CTA*/}
                <div className="mx-auto max-w-2xl sm:mx-0 lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-neutral-800  md:text-5xl lg:text-6xl">
                        {headingText}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-900">
                        {descriptionText}
                    </p>

                    {/* Big CTA*/}
                    <div className="justify-left mt-10 flex items-center">
                        <div className="flex items-center">
                            <a className="nj-lead font-heading focus-visible:transparent rounded-2xl bg-primary-700 px-5 py-5 text-xl font-bold text-white shadow-sm transition-all ease-in hover:bg-primary-600 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2">
                                Get my free quote!
                            </a>
                        </div>
                    </div>
                </div>

                {/*Hero image*/}
                <div className="flex items-start justify-end">
                    <img
                        className="mt-10 max-h-[500px] min-h-full w-full max-w-none rounded-xl object-cover shadow-xl ring-gray-400/10 lg:ml-20 lg:w-[48rem]"
                        src={heroImageUrl}
                        alt={heroImageAlt}
                    />
                </div>
            </div>
        </div>
    )
}
