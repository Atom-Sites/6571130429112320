import extractValues from '@/utils/extractValues'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function getCorrectImage(source) {
    switch (source) {
        case 'google':
            return '/images/google-badge.svg'
        default:
            return "" // TODO: Fill out other sources
    }
}


export default function ReviewHero({listOnly}) {
    const { data, error } = useSWR('/api/staticdata?filename=ReviewHero.schema.json', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div></div>

    const { headerSnippet, review, anchor } = extractValues(data);

    if (listOnly) {
        return review.map((review) => (
                <div key={review.author.handle} className="w-full sm:inline-block">
                    <figure className="h-full rounded-2xl bg-neutral-50 p-8 text-sm leading-6">
                        <div className=' lg:max-h-32 lg:hover:max-h-96 transition-all ease-in-out duration-250 '>
                            <blockquote className="text-neutral-800">
                                <p className="lg:line-clamp-5 lg:hover:line-clamp-none">"{review.body}"</p>
                            </blockquote>
                        </div>

                        <figcaption className="mt-6 flex items-center gap-x-4">
                            <img classNameName="h-10 w-10 rounded-full bg-neutral-50" width={40} height={40} src={review.author.icon} alt="Review received from (Source)" />
                            <div className="font-semibold text-neutral-900">{review.author.name}</div>
                        </figcaption>
                    </figure>
                </div>
            )
        )
    }

    return (
 
      <section className="editable-component relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8" data-json='review'>
        {review.map((review) => (
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
  
          {/*Header Medium and Stars*/}
          <div className="text-center">
              <h2 className="mt-2 text-2xl tracking-tight text-neutral-800 font-bold sm:text-3xl sm:leading-tight">"{headerSnippet}"</h2>
          </div>
          <div className="mt-2 flex justify-center text-primary-700">
            <div className="" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
            </div>
            <div className="" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
            </div>
            <div className="" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
            </div>
            <div className="" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
            </div>
            <div className="" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
            </div>
          </div>
  
  
          {/*Bold Review*/}
          <figure className="mt-10 items-center justify-center">
            <blockquote className="text-center text-xl leading-8 text-neutral-800 sm:text-2xl sm:leading-9">
              <p>“{review.body}”</p>
            </blockquote>
  
            {/*Name and Source*/}
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <img className="h-6 w-6 rounded-full bg-neutral-50" src={review.author.icon} alt={review.author.icon} />
                <div className="font-semibold text-neutral-800">{review.author.name}</div>
                  {/* Written source option not using a logo for a simple design
                  <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-neutral-800">
                  <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-neutral-800">Via Google</div>*/}
              </div>
            </figcaption>
          </figure>

          
  
          {/* Regular CTA*/}
          <div className="mt-10 flex items-center justify-center">
            <div className="flex items-center">
              <a className=" font-heading text-white shadow-sm focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2 focus-visible:transparent font-bold rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition-all ease-in text-base py-3 px-4" href="/reviews">Read more reviews</a>
            </div>
          </div>
  
        </div>
        ))}
      </section>
    )
  }  