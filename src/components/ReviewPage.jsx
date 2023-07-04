import dynamic from 'next/dynamic'
const ReviewPageContent = dynamic(() => import('./ReviewPageContent'), {
    ssr: false,
})

export default function ReviewPage() {
    return (
        <>
            {/*Hero for secondary pages*/}
            <div className="bg-primary-100">
                <div className="relative px-6  lg:px-8">
                    <div className="mx-auto max-w-2xl py-24 lg:py-32">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-neutral-800 lg:text-6xl">
                                Our Customer Stories
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-neutral-800">
                                Your community is talking about us. Experience
                                why residents in and around (the city) are
                                raving about us. We provide top-notch (services)
                                services that will exceed your expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <ReviewPageContent/>
        </>
    )
}
