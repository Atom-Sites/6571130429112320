import {
    ArrowDownIcon,
    ArrowUpIcon,
    SparklesIcon,
} from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { EditorDrawer } from './EditorDrawer'

const save = async (filename, json, page, company_id) => {
    try {
        const response = await fetch(
            'https://us-central1-labs-ai-sites.cloudfunctions.net/updateFileInRepo',
            // 'http://localhost:3001/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    company_id: company_id,
                    filename: filename,
                    page: page,
                    data: json,
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

const uploadImage = async (imageID, company_id) => {
    const imageFileInput = document.getElementById(imageID)
    const imageFile = imageFileInput.files[0]

    if (!imageFile) {
        console.error('No file selected')
        return
    }

    const formData = new FormData()
    formData.append('image', imageFile)
    formData.append('company_id', company_id)

    try {
        // const response = await fetch('http://localhost:3002', {
        const response = await fetch(
            'https://us-central1-labs-ai-sites.cloudfunctions.net/uploadImage',
            {
                method: 'POST',
                body: formData,
            }
        )

        if (response.ok) {
            console.log('Image uploaded successfully!')
        } else {
            console.error('Image upload failed!')
        }
    } catch (error) {
        console.error('Error uploading image:', error)
    }
}

const generateContent = async (
    company_id,
    instructions,
    componentName,
    file,
    pagename,
    key
) => {
    try {
        const schemaResponse = await fetch(
            'https://us-central1-labs-ai-sites.cloudfunctions.net/generateContent',
            // 'http://localhost:3008',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    company_id,
                    componentName,
                    instructions,
                    filename: file,
                    pagename,
                    key,
                }),
            }
        )

        if (schemaResponse.ok) {
            const schema = await schemaResponse.json()
            console.log(schema)
        } else {
            console.error('Error:', schemaResponse.status)
        }
    } catch (error) {
        console.error('Error uploading image:', error)
    }
}

export default function ComponentEditor(props) {
    const {
        company_id,
        component_props,
        setComponentProps,
        file,
        pagename,
        componentName,
        open,
        onClose,
        onSave,
    } = props

    const handleInputChange = (e, key) => {
        const { value } = e.target
        setComponentProps((prevJson) => {
            return {
                ...prevJson,
                [key]: value,
            }
        })
    }

    const handleImageChange = (e, key) => {
        const { value } = e.target

        setComponentProps((prevJson) => {
            return {
                ...prevJson,
                [key]: `/images/${value.split('\\').slice(-1)[0]}`,
            }
        })
    }

    const handleArrayObjectChange = (e, key, index, nestedKey) => {
        const { value } = e.target

        setComponentProps((prevJson) => {
            const newArray = prevJson[key].map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        [nestedKey]: value,
                    }
                }
                return item
            })

            return {
                ...prevJson,
                [key]: newArray,
            }
        })
    }

    const handleArrayObjectImageChange = (e, key, index, nestedKey) => {
        const { value } = e.target

        setComponentProps((prevJson) => {
            const newArray = prevJson[key].map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        [nestedKey]: `/images/${
                            value.split('\\').slice(-1)[0]
                        }`,
                    }
                }
                return item
            })

            return {
                ...prevJson,
                [key]: newArray,
            }
        })
    }

    const handleNestedArrayObjectChange = (
        e,
        key,
        index,
        nestedKey,
        index2,
        nestedKey2
    ) => {
        const { value } = e.target

        setJson((prevJson) => {
            const newArray = prevJson[key].map((item, i) => {
                if (i === index) {
                    const nestedArray = item[nestedKey].map((nestedItem, j) => {
                        if (j === index2) {
                            return {
                                ...nestedItem,
                                [nestedKey2]: value,
                            }
                        }
                        return nestedItem
                    })

                    return {
                        ...item,
                        [nestedKey]: nestedArray,
                    }
                }
                return item
            })

            return {
                ...prevJson,
                [key]: newArray,
            }
        })
    }

    const renderInput = (value, key, level = 0) => {
        const isNestedArray = Array.isArray(value)

        const inputClassName = `border border-gray-300 rounded-lg px-3 py-2 mr-2 ${
            isNestedArray ? 'w-full' : 'flex-grow'
        }`

        const containerClassName = `mb-2 ${
            isNestedArray ? `ml-${level * 4}` : ''
        }`

        if (isNestedArray) {
            return (
                <div key={key} className={containerClassName}>
                    <strong className="mb-2 block font-semibold">{key}:</strong>

                    {value.map((item, index) => (
                        <div
                            key={key + index}
                            className={`ml-${(level + 1) * 4}`}
                        >
                            {Object.entries(item).map(
                                ([nestedKey, nestedValue]) => {
                                    if (Array.isArray(nestedValue)) {
                                        return (
                                            <div
                                                key={key + index + nestedKey}
                                                className={`ml-${
                                                    (level + 2) * 4
                                                }`}
                                            >
                                                <strong className="mb-2 block font-semibold">
                                                    {index} {nestedKey}:
                                                </strong>

                                                {nestedValue.map(
                                                    (nestedItem, index2) => {
                                                        return (
                                                            <div
                                                                key={
                                                                    key + index2
                                                                }
                                                                className={`ml-${
                                                                    (level +
                                                                        3) *
                                                                    4
                                                                }`}
                                                            >
                                                                {Object.entries(
                                                                    nestedItem
                                                                ).map(
                                                                    ([
                                                                        nestedKey2,
                                                                        nestedValue2,
                                                                    ]) => {
                                                                        const isImage =
                                                                            nestedKey2.includes(
                                                                                'mageUrl'
                                                                            )

                                                                        return (
                                                                            <div
                                                                                key={
                                                                                    key +
                                                                                    index +
                                                                                    nestedKey +
                                                                                    nestedKey2 +
                                                                                    index2
                                                                                }
                                                                                className="mb-2"
                                                                            >
                                                                                <strong className="mb-2 block font-semibold">
                                                                                    {
                                                                                        index
                                                                                    }{' '}
                                                                                    {
                                                                                        nestedKey
                                                                                    }{' '}
                                                                                    {
                                                                                        index2
                                                                                    }{' '}
                                                                                    {
                                                                                        nestedKey2
                                                                                    }

                                                                                    :
                                                                                </strong>
                                                                                <div className="flex">
                                                                                    <input
                                                                                        type="text"
                                                                                        value={
                                                                                            nestedValue2
                                                                                        }
                                                                                        onChange={(
                                                                                            e
                                                                                        ) =>
                                                                                            handleNestedArrayObjectChange(
                                                                                                e,
                                                                                                key,
                                                                                                index,
                                                                                                nestedKey,
                                                                                                index2,
                                                                                                nestedKey2
                                                                                            )
                                                                                        }
                                                                                        className={
                                                                                            inputClassName
                                                                                        }
                                                                                    />
                                                                                    {/* {
                                      isImage && (
                                        <>
                                          <input
                                            type="file"
                                            id={key + index + nestedKey}
                                            onChange={(e) =>
                                              className="hidden"
                                              handleArrayObjectImageChange(e, key, index, nestedKey)
                                            }
                                            className="hidden"
                                          />
                                          <label
                                                htmlFor={}
                                            onClick={() => uploadImage(key+index+nestedKey)}
                                            className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                                          >
                                            Choose Image
                                          </label>
                                          <button
                                            onClick={() => uploadImage(key+index+nestedKey)}
                                            className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                                          >
                                            Upload
                                          </button>
                                        </>
                                      )
                                    } */}
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                )}
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        )
                                    } else {
                                        const isImage =
                                            nestedKey.includes('mageUrl')

                                        return (
                                            <div
                                                key={key + index + nestedKey}
                                                className={`mb-2 ml-${
                                                    (level + 1) * 4
                                                }`}
                                            >
                                                <strong className="mb-2 block font-semibold">
                                                    {index} {nestedKey}:
                                                </strong>
                                                <div className="flex items-center justify-center">
                                                    <textarea
                                                        value={nestedValue}
                                                        onChange={(e) =>
                                                            handleArrayObjectChange(
                                                                e,
                                                                key,
                                                                index,
                                                                nestedKey
                                                            )
                                                        }
                                                        className={`${inputClassName} h-20 resize-none`}
                                                    />

                                                    {isImage && (
                                                        <>
                                                            <input
                                                                type="file"
                                                                id={
                                                                    key +
                                                                    index +
                                                                    nestedKey
                                                                }
                                                                onChange={(e) =>
                                                                    handleArrayObjectImageChange(
                                                                        e,
                                                                        key,
                                                                        index,
                                                                        nestedKey
                                                                    )
                                                                }
                                                                className="hidden"
                                                            />
                                                            <label
                                                                htmlFor={
                                                                    key +
                                                                    index +
                                                                    nestedKey
                                                                }
                                                                className="h-10 cursor-pointer rounded-lg bg-yellow-500 p-2 text-white hover:bg-yellow-600"
                                                            >
                                                                Choose Image
                                                            </label>
                                                            <button
                                                                onClick={() =>
                                                                    uploadImage(
                                                                        key +
                                                                            index +
                                                                            nestedKey,
                                                                        company_id
                                                                    )
                                                                }
                                                                className="h-10 cursor-pointer rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                                                            >
                                                                Upload
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    }
                                }
                            )}
                        </div>
                    ))}
                </div>
            )
        }

        const isImage = key.includes('mageUrl')

        return (
            <div key={key} className={containerClassName}>
                <>
                    <PromptInput
                        label={
                            <label className="mt-2 block text-xs font-medium leading-6 text-neutral-400">
                                {key}
                            </label>
                        }
                        company_id={company_id}
                        pagename={pagename}
                        componentName={componentName}
                        file={file}
                        element={key}
                    />

                    <div className="mt-1">
                        <textarea
                            rows={2}
                            className="block w-full rounded-md border-0 py-1.5 text-sm  leading-6 text-neutral-800 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-neutral-400 focus:ring-1 focus:ring-inset focus:ring-blue-500"
                            value={value}
                            onChange={(e) => handleInputChange(e, key)}
                        />
                    </div>
                </>
                <div className="flex items-center justify-center">
                    {isImage && (
                        <>
                            <input
                                type="file"
                                id={key}
                                onChange={(e) => handleImageChange(e, key)}
                                className="hidden"
                            />
                            <label
                                htmlFor={key}
                                className="h-10 cursor-pointer rounded-lg bg-yellow-500 p-2 text-white hover:bg-yellow-600"
                            >
                                Choose Image
                            </label>
                            <button
                                onClick={() => uploadImage(key, company_id)}
                                className="h-10 cursor-pointer rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                            >
                                Upload
                            </button>
                        </>
                    )}
                </div>
            </div>
        )
    }

    if (!component_props) {
        return null
    }

    return (
        <EditorDrawer
            title="Component Editor"
            onClose={onClose}
            open={open}
            onSave={() => {
                save(file, component_props, pagename, company_id)
                onSave()
                onClose()
            }}
        >
            <PromptInput
                label={
                    <label className="block text-base font-bold leading-6 text-blue-500 ">
                        {componentName}
                    </label>
                }
                company_id={company_id}
                pagename={pagename}
                componentName={componentName}
                file={file}
            />

            {Object.entries(component_props).map(([key, value]) => (
                <div key={key}>{renderInput(value, key)}</div>
            ))}
        </EditorDrawer>
    )
}

function PromptInput(props) {
    const { label, company_id, pagename, componentName, file, element } = props

    const [open, setOpen] = useState(false)
    const [prompt, setPrompt] = useState('')

    return (
        <div>
            <div className="mt-2 flex items-center justify-between">
                {label}
                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        className="focus-visible:transparent current:text-primary-700 mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-400 transition-all ease-in hover:bg-neutral-50 hover:text-green-400 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2"
                        onClick={() => {
                            setOpen(!open)
                            setPrompt('')
                        }}
                    >
                        {open ? (
                            <ArrowUpIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        ) : (
                            <ArrowDownIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        )}
                    </button>

                    <button
                        type="button"
                        className="focus-visible:transparent current:text-primary-700 mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-400 transition-all ease-in hover:bg-neutral-50 hover:text-green-400 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2"
                        onClick={() =>
                            generateContent(
                                company_id,
                                prompt,
                                componentName,
                                file,
                                pagename,
                                element
                            )
                        }
                    >
                        <SparklesIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-end">
                {open && (
                    <textarea
                        rows={2}
                        className="block w-full rounded-md border-0 py-1.5 text-sm  leading-6 text-neutral-800 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-neutral-400 focus:ring-1 focus:ring-inset focus:ring-blue-500"
                        placeholder="Enter prompt here..."
                        value={prompt}
                        onChange={(event) => setPrompt(event.target.value)}
                    />
                )}
            </div>
        </div>
    )
}
