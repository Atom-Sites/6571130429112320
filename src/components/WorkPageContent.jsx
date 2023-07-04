export default function WorkPageContent() {
    return (
        <div className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/*Gallery*/}
                <div className="mx-auto flow-root max-w-2xl lg:mx-0 lg:max-w-none">
                    <div
                        class="nj-stories"
                        data-filter-media="show"
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
