import useSWR from 'swr'
import makeId from '@/utils/makeId';

function Feature({ name, description }) {
    return (
        <div className="relative pl-9 pt-0.5">
            <dt className="inline text-neutral-800 font-bold">
                <span className="absolute left-1 top-1 h-5 w-5 text-primary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute h-6 w-6 text-primary-800">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                    </svg>
                </span>
                <span className="">{name} </span>
            </dt>
            <dd className="inline">{description}</dd>
        </div>
    )
}

{/*Right Service*/ }
function ServiceLeft(props) {
    const { serviceBlurb, serviceSlug, serviceText, imageUrl, imageAlt, features } = props;

    return (
        <div id={makeId(serviceBlurb)} className="overflow-hidden py-24 bg-primary-50 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Image */}
                    <div className="flex items-start justify-end lg:order-first">
                        <img className="object-cover min-h-full max-h-[300px] w-[64rem] max-w-none rounded-xl shadow-xl ring-neutral-400/10 sm:w-[57rem]" src={imageUrl} alt={imageAlt} />
                    </div>
                    <div className="lg:ml-auto lg:pl-4">
                        <div className="lg:max-w-lg">
                            {/* Taglines */}
                            <h2 className="text-base font-bold leading-7 text-primary-800 uppercase tracking-wide">{serviceBlurb}</h2>
                            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-neutral-800 md:text-3xl lg:text-4xl ">{serviceSlug}</h2>
                            {/* Service Content */}
                            <p className="text-lg text-neutral-800 mt-6 leading-7">{serviceText}</p>
                            <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-neutral-800 lg:max-w-none">
                                {features.map((feature) => (
                                    <Feature name={feature.name} description={feature.description} />
                                ))}
                            </dl>
                            {/* Regular CTA */}
                            <div className="mt-10 flex items-center justify-left">
                                <div className="flex items-center">
                                    <a className="nj-lead font-heading text-white shadow-sm focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2 focus-visible:transparent font-bold rounded-2xl bg-primary-700 hover:bg-primary-600 transition-all ease-in text-base py-3 px-4" href="#">
                                        Get my free quote!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/*Left Service*/ }
function ServiceRight(props) {
    const { serviceBlurb, serviceSlug, serviceText, imageUrl, imageAlt, features } = props;

    return (
        <div id={makeId(serviceBlurb)} className="overflow-hidden py-24 bg-neutral-100 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Image */}
                    <div className="flex items-start justify-start lg:order-last">
                        <img className="object-cover min-h-full max-h-[300px] w-[64rem] max-w-none rounded-xl shadow-xl ring-neutral-400/10 sm:w-[57rem]" src={imageUrl} alt={imageAlt} />
                    </div>
                    <div className="lg:mr-auto lg:pr-4">
                        <div className="lg:max-w-lg">
                            {/* Taglines */}
                            <h2 className="text-base font-bold leading-7 text-primary-800 uppercase tracking-wide">{serviceBlurb}</h2>
                            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-neutral-800 md:text-3xl lg:text-4xl ">{serviceSlug}</h2>
                            {/* Service Content */}
                            <p className="text-lg text-neutral-800 mt-6 leading-7">{serviceText}</p>
                            <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-neutral-800 lg:max-w-none">
                                {features.map((feature) => (
                                    <Feature name={feature.name} description={feature.description} />
                                ))}
                            </dl>
                            {/* Regular CTA */}
                            <div className="mt-10 flex items-center justify-left">
                                <div className="flex items-center">
                                    <a className="nj-lead font-heading text-white shadow-sm focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2 focus-visible:transparent font-bold rounded-2xl bg-primary-700 hover:bg-primary-600 transition-all ease-in text-base py-3 px-4" href="#">
                                        Get my free quote!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

const fetcher = (Url) => fetch(Url).then((res) => res.json())

function Services() {
    const { data, error } = useSWR('/api/staticdata?filename=Service.schema.json', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div></div>

    const services = data.services.value

    return (
        <div id={data.anchor} className='editable-component relative' data-json='services'>
            {services.map((service, index) => {
                if (index % 2 == 0) {
                    return <ServiceLeft key={index} {...service} />
                } else {
                    return <ServiceRight key={index} {...service} />
                }
            })}
        </div>
    );
}
export default Services;

