export default function Team(props) {
    const { headerText, headerSubText, people, anchor } = props

    if (!headerText || !headerSubText || !people || !anchor) {
        return <div>failed to load</div>
    }

    const renderedPeople = people?.length ? people : []

    return (
        <section
            id={anchor}
            className="editable-component data-json='team' relative isolate overflow-hidden bg-primary-200 px-6 py-24 sm:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                {/* Section Intro Center */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-neutral-800 md:text-3xl lg:text-4xl">
                        {headerText}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-800">
                        {headerSubText}
                    </p>
                </div>

                {/* Team */}
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {renderedPeople.map(({ person }) => (
                        <li key={person.name}>
                            <img
                                className="mx-auto h-56 w-56 rounded-full"
                                src={person.imageURL}
                                alt={person.name}
                            />
                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                                {person.name}
                            </h3>
                            <p className="text-sm leading-6 text-gray-600">
                                {person.role}
                            </p>
                            <ul
                                role="list"
                                className="mt-6 flex justify-center gap-x-6"
                            ></ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
