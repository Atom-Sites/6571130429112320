import dynamic from 'next/dynamic'
const WorkPageContent = dynamic(() => import('./WorkPageContent'), {
    ssr: false,
})

export default function WorkPage() {
    return (
        <>
            {/*Hero for secondary pages*/}
            <div className="bg-primary-100">
                <div className="relative px-6  lg:px-8">
                    <div className="mx-auto max-w-2xl py-24 lg:py-32">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-neutral-800 lg:text-6xl">
                                Our Latest Projects
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-neutral-800">
                                Check out some of our newest projects to peek at
                                our capabilities. Our team is committed to
                                providing quality work that meets the highest
                                standards, and our portfolio speaks for itself.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

          <WorkPageContent/>
        </>
    )
}
