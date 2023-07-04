export default function ReviewPageContent() {
    return (
        <div className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/*Review*/}
                <div className="mx-auto flow-root max-w-3xl lg:mx-0 lg:max-w-none">
                    <div
                        className="nj-stories"
                        data-filter-media="hide"
                        data-media="hide"
                        data-branding="bottom"
                    ></div>

                    {/* Regular CTA*/}
                    <div className="mt-10 flex items-center justify-center">
                        <div className="flex items-center">
                            <a className="nj-lead font-heading focus-visible:transparent rounded-2xl bg-primary-700 px-4 py-3 text-base font-bold text-white shadow-sm transition-all ease-in hover:bg-primary-600 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2">
                                Get started today!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
