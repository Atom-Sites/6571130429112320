function getCorrectImage(source) {
    switch (source) {
        case 'home advisor elite service':
            return '/images/home-advisor-elite-service.svg'
        case 'home advisor screened':
            return '/images/home-advisor-screened-logo.svg'
        case 'home advisor top-rated':
            return '/images/home-advisor-top-rated.svg'
        case 'IICRC':
            return '/images/IIRCR-logo.svg'
        case 'IWCA':
            return '/images/IWCA-logo.svg'
        case 'Wool Safe':
            return '/images/wool-safe-badge.png'
        default:
            return '/images/nicejob-badge.svg' // TODO: Fill out other sources
    }
}

export default function Credentials(props) {
    const { headerText, headerSubText, badges } = props

    if (!headerText || !headerSubText || !badges) {
        return <div>failed to load</div>
    }

    return (
        <section
            className="editable-component relative bg-secondary-700 px-6 py-24 lg:px-8 lg:py-32"
            data-json="credentials"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                            {headerText}
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-white">
                            {headerSubText}
                        </p>
                    </div>
                    <div className="md:grid-col-3 mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-x-12 gap-y-12 opacity-100 mix-blend-screen grayscale invert filter sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:pl-8">
                        {badges.map((badge) => (
                            <img
                                className="max-h-16 w-full object-contain lg:object-center"
                                src={badge.imageUrl}
                                alt={badge.imageAlt}
                                width={128}
                                height={64}
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
