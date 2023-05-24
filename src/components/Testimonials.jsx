
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json())

function getCorrectImage(source) {
    switch (source) {
        case 'google':
            return '/images/google-color.png'
        default:
            return "" // TODO: Fill out other sources
    }
}


export default function Testimonials() {

    const { data, error } = useSWR('/api/staticdata?filename=testimonials', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const { headerText, headerSubText, testimonials, anchor } = data

    return (
        <div id={anchor} className="editable-component relative py-24 bg-primary-50 sm:py-32" data-json='testimonials'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-900">{headerText}</h2>
                    <p className="mt-2 text-3xl tracking-tight text-gray-900 font-extrabold sm:text-4xl">{headerSubText}</p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonials.map((testimonial) => (
                            <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                                <figure className="rounded-2xl p-8 text-sm leading-6 bg-white">
                                    <blockquote className="text-gray-900">
                                        <p className="">{testimonial.body}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <img classNameName='h-10 w-10 rounded-full bg-gray-50' width={40} height={40} src={testimonial.author.icon} />
                                        <div className="">
                                            <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

