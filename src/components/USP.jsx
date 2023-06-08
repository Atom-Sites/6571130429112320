import extractValues from '@/utils/extractValues'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function USP() {

    const { data, error } = useSWR('/api/staticdata?filename=USP.schema.json', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div></div>

    const { headerText, uspDescription, features } = extractValues(data);


    return (
        <div className="editable-component relative bg-white py-20 lg:py-32" data-json='usp'>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 640 512"><path fill="currentColor" d="M112 0C85.5 0 64 21.5 64 48v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zm432 237.3V256H416v-96h50.7l77.3 77.3zM160 368a48 48 0 1 1 0 96a48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0a48 48 0 1 1-96 0z"/></svg>
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
                                    <span className="h-12 w-12 h-min w-min text-primary-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 28 28"><path fill="currentColor" d="M13.56 2.142a.75.75 0 0 1 .878 0c.643.464 2.088 1.312 3.897 2.041c1.81.73 3.922 1.317 5.913 1.317a.75.75 0 0 1 .75.75v7.752c0 3.027-1.703 5.841-3.838 7.95c-2.133 2.107-4.827 3.64-7.033 4.024l-.128.022l-.129-.022c-2.205-.385-4.9-1.917-7.033-4.024C4.703 19.843 3 17.029 3 14.002V6.25a.75.75 0 0 1 .75-.75c1.991 0 4.103-.587 5.914-1.317c1.808-.73 3.253-1.577 3.896-2.04Z"/></svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M10.586 2.1a2 2 0 0 1 2.7-.116l.128.117L15.314 4H18a2 2 0 0 1 1.994 1.85L20 6v2.686l1.9 1.9a2 2 0 0 1 .116 2.701l-.117.127l-1.9 1.9V18a2 2 0 0 1-1.85 1.995L18 20h-2.685l-1.9 1.9a2 2 0 0 1-2.701.116l-.127-.116l-1.9-1.9H6a2 2 0 0 1-1.995-1.85L4 18v-2.686l-1.9-1.9a2 2 0 0 1-.116-2.701l.116-.127l1.9-1.9V6a2 2 0 0 1 1.85-1.994L6 4h2.686l1.9-1.9Zm4.493 6.883l-4.244 4.244l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414Z"/></g></svg>
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

