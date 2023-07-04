'use client'
import { Disclosure } from '@headlessui/react'
import {
    AdjustmentsHorizontalIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    PlusIcon,
} from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation.js'
import { useState } from 'react'
import 'react-json-editor-ui/dist/react-json-editor-ui.cjs.development.css'
import { AddPage } from './AddPage.jsx'
import ComponentEditor from './ComponentEditor.jsx'
import { SiteSettingsEditor } from './SiteSettingsEditor.jsx'
import { UpdateEditor } from './UpdateEditor.jsx'

export default function GlobalEditor(props) {
    const { company_id, show_save, is_saving, onSave } = props

    const [isAddPageOpen, setIsAddPageOpen] = useState(false)
    const [isEditSiteSettingsOpen, setIsEditSiteSettingsOpen] = useState(false)
    const [isComponentEditorOpen, setIsComponentEditorOpen] = useState(false)

    let pagename = usePathname().replace('/', '')
    if (pagename === '') {
        pagename = 'index'
    }

    const toggleEditSiteSettings = () => {
        setIsEditSiteSettingsOpen(!isEditSiteSettingsOpen)
    }

    const toggleAddPageEditor = () => {
        setIsAddPageOpen(!isAddPageOpen)
    }

    const toggleComponentEditor = () => {
        setIsComponentEditorOpen(!isComponentEditorOpen)
    }

    return (
        <>
            <Disclosure as="nav" className="fixed z-50 w-full bg-white shadow">
                <div className="mx-auto h-16 px-4">
                    <div className="flex h-full justify-end gap-2 align-middle">
                        <div className="mr-auto flex shrink-0 items-center">
                            <UpdateEditor company_id={company_id} />
                        </div>

                        <div
                            className={`my-4 mr-2 flex shrink-0 items-center border-r-2 border-r-neutral-300 pr-4 ${
                                show_save ? 'visible' : 'invisible'
                            }`}
                        >
                            <button
                                type="button"
                                className="focus-visible:transparent relative inline-flex items-center gap-x-1.5 rounded-full bg-neutral-200 px-2 py-2 text-sm font-semibold text-blue-950 shadow-sm transition-all ease-in hover:bg-green-400 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2"
                                onClick={onSave}
                                title="Save changes"
                            >
                                {is_saving ? (
                                    <svg
                                        aria-hidden="true"
                                        class="inline h-5 w-5 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                        />
                                    </svg>
                                ) : (
                                    <CloudArrowUpIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                        </div>

                        <div className="flex shrink-0 items-center">
                            <button
                                type="button"
                                className="focus-visible:transparent relative inline-flex items-center gap-x-1.5 rounded-full bg-neutral-200 px-2 py-2 text-sm font-semibold text-blue-950 shadow-sm transition-all ease-in hover:bg-green-400 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2"
                                onClick={toggleAddPageEditor}
                            >
                                <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>

                        <div className="flex shrink-0 items-center">
                            <button
                                type="button"
                                className="focus-visible:transparent relative ml-2 inline-flex items-center gap-x-1.5 rounded-full bg-blue-500 px-2 py-2 text-sm font-semibold text-white shadow-sm transition-all ease-in hover:bg-blue-400 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2"
                                onClick={toggleComponentEditor}
                            >
                                <AdjustmentsHorizontalIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="flex shrink-0 items-center">
                            <button
                                type="button"
                                className="focus-visible:transparent relative ml-2 inline-flex items-center gap-x-1.5 rounded-full bg-blue-500 px-2 py-2 text-sm font-semibold text-white shadow-sm transition-all ease-in hover:bg-blue-400 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2"
                                onClick={toggleEditSiteSettings}
                            >
                                <Cog6ToothIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>

                        <ComponentEditor
                            pagename={pagename}
                            file={'page.json'}
                            // TODO change to schema name
                            componentName="page"
                            open={isComponentEditorOpen}
                            onClose={() => setIsComponentEditorOpen(false)}
                        />
                    </div>
                </div>
            </Disclosure>

            <AddPage
                company_id={company_id}
                open={isAddPageOpen}
                onClose={() => setIsAddPageOpen(false)}
            />

            <SiteSettingsEditor
                company_id={company_id}
                open={isEditSiteSettingsOpen}
                onClose={() => setIsEditSiteSettingsOpen(false)}
            />

            <div className="h-16" />
        </>
    )
}
