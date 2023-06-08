import useSWR from 'swr'
import extractValues from '@/utils/extractValues'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CallToAction() {

    const { data, error } = useSWR('/api/staticdata?filename=CallToAction.schema.json', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div></div>

    const { title, callToAction, image, buttonText, anchor } = extractValues(data);

return (
    <div id={anchor} className="editable-component relative bg-primary-400" data-json='cta'>
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
            <div className="absolute inset-0 bg-primary-400 bg-opacity-50"></div>
                <img className="h-full w-full object-cover" src={image} />
        </div>

        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="mt-2 text-3xl tracking-tight text-neutral-800 font-extrabold sm:text-4xl sm:leading-tight">{title}</h2>
            <p className="mt-6 text-base leading-7 text-neutral-800">{callToAction}</p>

            {/* Big CTA*/}
            <div className="mt-10 flex items-center justify-left">
              <div className="flex items-center">
                <a className="nj-lead font-heading text-white shadow-sm focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2 focus-visible:transparent font-bold rounded-2xl bg-primary-700 hover:bg-primary-600 transition-all ease-in text-xl py-5 px-5" href="#">Get my free quote!</a>
              </div>
            </div>
          </div>
        </div>
    </div>
)
}