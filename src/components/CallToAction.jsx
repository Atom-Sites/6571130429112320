export default function CallToAction(props) {
    const { header, callToAction, image, imageAlt, buttonText, anchor } = props

    if (
        !header ||
        !callToAction ||
        !image ||
        !imageAlt ||
        !buttonText ||
        !anchor
    ) {
        return <div>failed to load</div>
    }

    return (
        <>
            <div
                className="editable-component relative bg-primary-100"
                data-json="calltoaction"
            >
                <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:max-h-max">
                    <div className="relative h-full w-full overflow-hidden ">
                        <img
                            className="h-80 w-full object-cover object-[0%_0%] md:absolute md:h-full"
                            src={image}
                            alt={imageAlt}
                            loading="lazy"
                            width={1000}
                            height={800}
                        />
                    </div>
                    <div className="max-w-3xl px-6 py-24 lg:px-24 lg:py-32">
                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-800 sm:text-4xl sm:leading-tight">
                            {header}
                        </h2>
                        <p className="mt-6 text-base leading-7 text-neutral-800">
                            {callToAction}
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
                </div>
            </div>
        </>
    )
}
