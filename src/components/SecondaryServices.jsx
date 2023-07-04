import makeId from '@/utils/makeId'

export default async function SecondaryServices(props) {
    const { anchor, services } = props

    if (!anchor || !services) {
        return <div>failed to load</div>
    }

    return (
        <div
            id={anchor}
            className="editable-component relative"
            data-json="secondaryservices"
        >
            {services.map((service, index) => {
                if (index % 2 == 0) {
                    return <ServiceLeft key={index} {...service} />
                } else {
                    return <ServiceRight key={index} {...service} />
                }
            })}
        </div>
    )
}

{
    /*Left Service*/
}
function ServiceLeft(props) {
    const {
        serviceName,
        serviceAnchor,
        serviceSlug,
        serviceText,
        imageUrl,
        imageAlt,
        features,
        ctaText,
    } = props

    return (
        <div
            id={makeId(serviceAnchor)}
            className="overflow-hidden bg-primary-50 px-6 py-24 sm:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                {/*Feature Grid*/}
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    {/* Image */}
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <img
                            className="h-[250px] w-[800px] rounded-xl object-cover shadow-xl ring-neutral-400/10 sm:h-[350px] lg:h-[500px]"
                            src={imageUrl}
                            alt={imageAlt}
                            loading="lazy"
                        />
                    </div>

                    <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                        <h2 className="text-base font-bold uppercase leading-7 tracking-wide text-primary-700">
                            {serviceName}
                        </h2>
                        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-neutral-800 md:text-3xl lg:text-4xl ">
                            {serviceSlug}
                        </h2>
                        <p className="mt-6 text-lg leading-7 text-neutral-800">
                            {serviceText}
                        </p>
                        <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-neutral-800 lg:max-w-none">
                            {features.map((feature) => (
                                <Feature
                                    key={feature.name}
                                    name={feature.name}
                                    description={feature.description}
                                />
                            ))}
                        </dl>
                        {/* Regular CTA */}
                        <div className="justify-left mt-10 flex items-center">
                            <div className="flex items-center">
                                <a className="nj-lead font-heading focus-visible:transparent rounded-2xl bg-primary-700 px-4 py-3 text-base font-bold text-white shadow-sm transition-all ease-in hover:bg-primary-600 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2">
                                    {ctaText}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{
    /*Right Service*/
}
function ServiceRight(props) {
    const {
        serviceName,
        serviceAnchor,
        serviceSlug,
        serviceText,
        imageUrl,
        imageAlt,
        features,
        ctaText,
    } = props

    return (
        <div
            id={makeId(serviceAnchor)}
            className="overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                {/* Feature Grid */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    {/* Image */}
                    <div className="mx-auto max-w-2xl lg:order-last lg:mx-0 ">
                        <img
                            className="h-[250px] w-[800px] rounded-xl object-cover shadow-xl ring-neutral-400/10 sm:h-[350px] lg:h-[500px]"
                            src={imageUrl}
                            alt={imageAlt}
                            loading="lazy"
                        />
                    </div>

                    <div className="mx-auto max-w-2xl lg:ml-0 lg:max-w-lg">
                        <h2 className="text-base font-bold uppercase leading-7 tracking-wide text-primary-700">
                            {serviceName}
                        </h2>
                        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-neutral-800 md:text-3xl lg:text-4xl ">
                            {serviceSlug}
                        </h2>
                        <p className="mt-6 text-lg leading-7 text-neutral-800">
                            {serviceText}
                        </p>
                        <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-neutral-800 lg:max-w-none">
                            {features.map((feature) => (
                                <Feature
                                    key={feature.name}
                                    name={feature.name}
                                    description={feature.description}
                                />
                            ))}
                        </dl>
                        {/* Regular CTA */}
                        <div className="justify-left mt-10 flex items-center">
                            <div className="flex items-center">
                                <a className="nj-lead font-heading focus-visible:transparent rounded-2xl bg-primary-700 px-4 py-3 text-base font-bold text-white shadow-sm transition-all ease-in hover:bg-primary-600 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2">
                                    {ctaText}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Feature(props) {
    const { name, description } = props

    return (
        <div className="relative pl-9 pt-0.5">
            <dt className="inline font-bold text-neutral-800">
                <span className="absolute left-1 top-1 h-5 w-5 text-primary-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="absolute h-6 w-6 text-primary-800"
                    >
                        <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
                <span className="">{name} </span>
            </dt>
            <dd className="inline">{description}</dd>
        </div>
    )
}
