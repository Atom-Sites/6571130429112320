'use client'
import Components from '@/components/component_registry'
import {
    ArrowDownIcon,
    ArrowUpIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon,
} from '@heroicons/react/20/solid'
import { useState } from 'react'
import ComponentEditor from './ComponentEditor'

export function EditableComponent(props) {
    const { index, page_name, company_data, component, handleMoveComponent } =
        props

    const [saved_props, setSavedProps] = useState(component.props)
    const [component_props, setComponentProps] = useState(component.props)
    const [showEditor, setShowEditor] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [aboveOrBelow, setAboveOrBelow] = useState(0)

    const company_id = company_data.company_id

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const openEditor = () => {
        setShowEditor(true)
    }

    const handleClose = () => {
        setComponentProps(saved_props)
        setShowEditor(false)
    }

    const handleSave = () => {
        setSavedProps(component_props)
        setShowEditor(false)
    }

    const editable = component.data_file !== 'header.json'
    const canEditComponent =
        component.data_file !== 'nav.json' &&
        component.data_file !== 'footer.json'

    const modifyComponent = async (
        pagename,
        componentName,
        index,
        action,
        newComponentName
    ) => {
        try {
            const response = await fetch(
                'https://us-central1-labs-ai-sites.cloudfunctions.net/editComponent',
                {
                    // const response = await fetch('http://localhost:3004/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        company_id: company_id,
                        page: pagename,
                        index,
                        action,
                        newComponentName,
                        aboveOrBelow,
                    }),
                }
            )

            if (response.ok) {
                console.log('Json saved successfully!')
            } else {
                console.error('Json upload failed!')
            }
        } catch (error) {
            console.error('Json uploading error:', error)
        }
    }

    if (!component.name) {
        return <div>Invalid Component: {JSON.stringify(component)}</div>
    }

    const Component = Components[component.name]

    return (
        <div className="edit-component-wrapper group relative">
            {editable && (
                <>
                    <ComponentEditor
                        company_id={company_id}
                        file={component.data_file}
                        componentName={component.name}
                        pagename={page_name}
                        open={showEditor}
                        component_props={component_props}
                        setComponentProps={setComponentProps}
                        onSave={handleSave}
                        onClose={handleClose}
                    />

                    <div className="invisible absolute inset-0 z-20 flex shrink-0 items-center border-b border-t border-dashed border-gray-300 group-hover:visible">
                        {canEditComponent && (
                            <button
                                className="absolute -top-6 left-1/2 z-40 -translate-x-1/2 transform rounded bg-black px-4 py-2 text-white opacity-100 hover:bg-gray-900"
                                onClick={() => {
                                    toggleDropdown()
                                    setAboveOrBelow(0)
                                }}
                            >
                                <PlusIcon className="h-6 w-6" />
                            </button>
                        )}

                        {canEditComponent && (
                            <button
                                className="absolute -bottom-6 left-1/2 z-40 -translate-x-1/2 transform rounded bg-black px-4 py-2 text-white opacity-100 hover:bg-gray-900 "
                                onClick={() => {
                                    toggleDropdown()
                                    setAboveOrBelow(1)
                                }}
                            >
                                <PlusIcon className="h-6 w-6" />
                            </button>
                        )}

                        <div className="ml-8 inline-flex shrink-0 flex-col items-center space-y-4 rounded bg-black/50 p-8">
                            {canEditComponent && (
                                <button
                                    className="rounded bg-black p-4 text-white opacity-100 hover:bg-gray-900"
                                    onClick={() => {
                                        //     modifyComponent(
                                        //     pagename,
                                        //     component.name,
                                        //     index,
                                        //     'up'
                                        // )
                                        handleMoveComponent(index, -1)
                                    }}
                                >
                                    <ArrowUpIcon className="h-6 w-6" />
                                </button>
                            )}
                            {canEditComponent && (
                                <button
                                    className="rounded bg-black p-4 text-white opacity-100 hover:bg-gray-900"
                                    onClick={() => {
                                        //     modifyComponent(
                                        //     pagename,
                                        //     component.name,
                                        //     index,
                                        //     'down'
                                        // )
                                        handleMoveComponent(index, 1)
                                    }}
                                >
                                    <ArrowDownIcon className="h-6 w-6" />
                                </button>
                            )}
                            <button
                                className="rounded bg-blue-500 p-4 text-white opacity-100 hover:bg-blue-600"
                                onClick={() => openEditor(component.data_file)}
                            >
                                <PencilIcon className="h-6 w-6" />
                            </button>
                            <button
                                className="rounded bg-red-500 p-4 text-white opacity-100 hover:bg-red-600"
                                onClick={() =>
                                    modifyComponent(
                                        page_name,
                                        component.name,
                                        index,
                                        'delete'
                                    )
                                }
                            >
                                <TrashIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </>
            )}

            {isDropdownOpen && (
                <div className="fixed left-1/2 top-1/2 z-50 mt-2 -translate-x-1/2 -translate-y-1/2 transform space-y-4 rounded-md border border-gray-200 bg-white p-8 shadow-lg">
                    <button
                        onClick={() => toggleDropdown()}
                        className="absolute right-0 top-0 rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
                    >
                        X
                    </button>
                    <div className="flex items-center px-4 py-2">
                        <button
                            type="button"
                            className="ml-2 flex-grow rounded-md border border-transparent bg-blue-500 px-6 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() =>
                                modifyComponent(
                                    page_name,
                                    component.name,
                                    index,
                                    'add',
                                    'Hero'
                                )
                            }
                        >
                            Hero
                        </button>
                    </div>
                    <div className="flex items-center px-4 py-2">
                        <button
                            type="button"
                            className="ml-2 flex-grow rounded-md border border-transparent bg-blue-500 px-6 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() =>
                                modifyComponent(
                                    page_name,
                                    component.name,
                                    index,
                                    'add',
                                    'Service'
                                )
                            }
                        >
                            Service
                        </button>
                    </div>
                </div>
            )}
            <Component {...component_props} />
        </div>
    )
}
