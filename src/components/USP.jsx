import extractValues from '@/utils/extractValues'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function USP() {

    const { data, error } = useSWR('/api/staticdata?filename=USP.schema.json', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div></div>

    const { headerText, uspDescription, features } = extractValues(data);


    return (
        <div className="editable-component relative bg-primary-100 py-20 lg:py-32" data-json='usp'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/*Section Intro*/}
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-2xl font-extrabold tracking-tight text-neutral-800 md:text-3xl lg:text-4xl">{headerText}</h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-800">{uspDescription}</p>
                </div>

                {/*USP Grid*/}
                <div className="mx-auto mt-10 max-w-2xl sm:mt-10 lg:mt-20 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">

                        {/*First USP*/}
                        <div className="flex flex-col">
                            {/*Title and Icon*/}
                            <dt className="text-base font-semibold leading-7 text-neutral-800">
                                <div className="mb-3 flex h-16 w-16 items-bottom justify-left rounded-lg bg-transparent">
                                    <span className="h-12 w-12 h-min w-min text-primary-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M10.586 2.1a2 2 0 0 1 2.7-.116l.128.117L15.314 4H18a2 2 0 0 1 1.994 1.85L20 6v2.686l1.9 1.9a2 2 0 0 1 .116 2.701l-.117.127l-1.9 1.9V18a2 2 0 0 1-1.85 1.995L18 20h-2.685l-1.9 1.9a2 2 0 0 1-2.701.116l-.127-.116l-1.9-1.9H6a2 2 0 0 1-1.995-1.85L4 18v-2.686l-1.9-1.9a2 2 0 0 1-.116-2.701l.116-.127l1.9-1.9V6a2 2 0 0 1 1.85-1.994L6 4h2.686l1.9-1.9Zm4.493 6.883l-4.244 4.244l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414Z"/></g></svg>
                                    </span>
                                </div>
                                <h3 className="font-extrabold text-lg">{features[0].name}</h3>
                            </dt>
                            {/*Description*/}
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-neutral-800">
                                <p className="flex-auto">{features[0].description}</p>
                            </dd>
                        </div>

                        {/*Second USP*/}
                        <div className="flex flex-col ">
                            <dt className="text-base font-semibold leading-7 text-neutral-800">
                                <div className="mb-3 flex h-16 w-16 items-bottom justify-left rounded-lg bg-transparent">
                                    <span className="h-12 w-12 h-min w-min -mt-2 text-primary-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 24 24"><path fill="currentColor" d="M3.69 9.12a.88.88 0 0 0-.65-.28c-.41 0-.72.19-.92.58s-.15.76.17 1.11c1.18 1.06 1.93 1.81 2.25 2.25c.41.56.61 1.38.61 2.44c0 1.31.5 2.28 1.5 2.95c.56.44 1.17.77 1.85.99v-3.89c0-.94-.33-1.72-.96-2.35m8.92.05c-.62.62-.96 1.39-.96 2.3v3.93c.96-.34 1.76-.87 2.42-1.57c.65-.7.98-1.47.98-2.41c0-1.13.19-1.94.57-2.44c.09-.16.26-.36.53-.61c.23-.25.47-.49.71-.71c.23-.21.46-.43.68-.65l.33-.28a.9.9 0 0 0 .28-.66c0-.28-.09-.53-.28-.73c-.19-.2-.42-.3-.72-.3s-.5.09-.69.28M12 20c.69 0 1.36-.09 2-.28v-3.57c0-.59-.18-1.05-.59-1.49C13 14.22 12.53 14 12 14c-.53 0-1 .2-1.38.61c-.4.39-.62.85-.62 1.45v3.66c.64.19 1.31.28 2 .28M9 8.5c0 .83-.67 1.5-1.5 1.5S6 9.33 6 8.5S6.67 7 7.5 7S9 7.67 9 8.5m9 0c0 .83-.67 1.5-1.5 1.5S15 9.33 15 8.5S15.67 7 16.5 7s1.5.67 1.5 1.5m-4.5-3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 4 12 4s1.5.67 1.5 1.5m0 5.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5Z"/></svg>
                                    </span>
                                </div>
                                <h3 className="font-extrabold text-lg">{features[1].name}</h3>
                            </dt>
                            {/*Description*/}
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-neutral-800">
                                <p className="flex-auto">{features[1].description}</p>
                            </dd>
                        </div>

                        {/*Third USP*/}
                        <div className="flex flex-col">
                            <dt className="text-base font-semibold leading-7 text-neutral-800">
                                <div className="mb-3 flex h-16 w-16 items-bottom justify-left  rounded-lg bg-transparent">
                                    <span className="h-12 w-12 h-min w-min text-primary-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 512 512"><path fill="currentColor" d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2h144c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48h-97.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192h64c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
                                    </span>
                                </div>
                                <h3 className="font-extrabold text-lg">{features[2].name}</h3>
                            </dt>
                            {/*Description*/}
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-neutral-800">
                                <p className="flex-auto">{features[2].description}</p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

    )
}

