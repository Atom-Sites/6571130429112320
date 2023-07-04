export default function SatisfactionGuarantee(props) {
    const { headerText, headerSubText } = props

    if (!headerText || !headerSubText) {
        return <div>failed to load</div>
    }

    return (
        <section
            className="editable-component relative bg-secondary-700 px-6 py-24 lg:px-8 lg:py-32"
            data-json="satisfactionguarantee"
        >
            {/*Satisfaction Guarantee*/}
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                <span className="mb-16 h-12 w-12 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="84"
                        height="84"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2c-.811 0-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082ZM15.059 10.5a.75.75 0 0 0-1.118-.999l-3.012 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0l3.572-4Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                    {headerText}
                </h2>
                <p className="mt-6 text-lg leading-8 text-white">
                    {headerSubText}
                </p>
            </div>
        </section>
    )
}
