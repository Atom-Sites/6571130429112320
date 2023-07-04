import React, { use, useEffect, useState } from 'react'
import { EditorDrawer } from './EditorDrawer.jsx'

const RBG_HEX_REGEX = /^#[0-9A-F]{6}$/i
const variants = ['primary', 'secondary']
const shades = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '950',
]

const regenerateSite = async (company_id) => {
    try {
        console.log('Regenerating site...')
        const response = await fetch(
            'https://ai-ui-agent-ytnjkd5upa-uc.a.run.app/build',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    company_id: company_id,
                    domain: '', // TODO - add the actual domain
                }),
            }
        )
        if (response.ok) {
            console.log('Site regeneration successful!')
        } else {
            alert('Site regeneration failed!')
        }
    } catch (error) {
        console.error(error)
        alert('Site regeneration failed!')
    }
}

export function SiteSettingsEditor(props) {
    const { open, onClose, company_id } = props

    const [hasColorsChanged, setHasColorsChanged] = useState({
        primary: false,
        secondary: false,
    })

    const [colors, setColors] = useState({})

    useEffect(() => {
        const initialColors = {}

        variants.forEach((variant) => {
            shades.forEach((shade) => {
                initialColors[`${variant}-${shade}`] = getComputedStyle(
                    document.documentElement
                ).getPropertyValue(`--${variant}-${shade}`)
            })
        })

        setColors(initialColors)
    }, [])

    /**
     * Handles the color change from the color picker or the text input
     * @param {'primary' | 'secondary'} variant - the color variant to update
     * @returns {(event: any) => void} - the event handler function, updates the colors state and css variable
     */
    const handleColorChange = (variant) => (event) => {
        // get the color value
        const color = event.target.value.toUpperCase()

        // set the color changed flag
        if (variant === 'primary' && !hasColorsChanged.primary) {
            setHasColorsChanged({
                ...hasColorsChanged,
                primary: true,
            })
        } else if (variant === 'secondary' && !hasColorsChanged.secondary) {
            setHasColorsChanged({
                ...hasColorsChanged,
                secondary: true,
            })
        }

        // update the css variable
        if (new RegExp(RBG_HEX_REGEX).test(color)) {
            document.documentElement.style.setProperty(
                `--${variant}-700`,
                color
            )
        }

        // update the colors state
        setColors({
            ...colors,
            [`${variant}-700`]: color.toUpperCase(),
        })
    }

    /**
     * Handles the color palette regeneration using tints.dev
     * - using the 700 shade regenerate the rest of the palette
     * @param {'primary' | 'secondary'} variant - the color variant to update
     */
    const regenerateColorPalette = async (variant) => {
        const color = colors[`${variant}-700`]

        try {
            const response = await fetch(
                `https://us-central1-labs-ai-sites.cloudfunctions.net/generateColorPalette`,
                // `http://localhost:3009/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        color,
                    }),
                }
            )

            if (!response.ok) {
                alert('Color palette regeneration failed!')

                return
            }

            const data = await response.json()
            console.log(data)

            const updatedColors = {}
            Object.entries(data).forEach(([shade, colorValue]) => {
                updatedColors[`${variant}-${shade}`] = colorValue

                document.documentElement.style.setProperty(
                    `--${variant}-${shade}`,
                    colorValue
                )
            })

            console.log(updatedColors)

            setColors((prevColors) => ({
                ...prevColors,
                ...updatedColors,
            }))
        } catch (error) {
            console.error(error)
            alert('Color palette regeneration failed!')
        }
    }

    /**
     * If the colors have changed, save the theme
     */
    const handleSaveTheme = async () => {
        if (!hasColorsChanged.primary && !hasColorsChanged.secondary) {
            console.log('No changes to save')

            return
        }

        try {
            const response = await fetch(
                'https://us-central1-labs-ai-sites.cloudfunctions.net/updateTheme',
                // `http://localhost:3005/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        company_id: company_id,
                        data: colors,
                    }),
                }
            )

            if (response.ok) {
                console.log('Theme saved successfully!')

                setHasColorsChanged({
                    primary: false,
                    secondary: false,
                })
            } else {
                alert('Theme update failed!')
            }
        } catch (error) {
            console.error(error)
            alert('Theme uploading error!')
        }
    }

    return (
        <EditorDrawer
            title="Site Editor"
            open={open}
            onClose={onClose}
            onSave={handleSaveTheme}
        >
            <div className="my-2 ">
                <label className="block text-base font-bold leading-6 text-blue-500 ">
                    Theme
                </label>
            </div>

            <label className="mt-2 block text-xs font-medium leading-6 text-neutral-400">
                Primary
            </label>

            <div className="flex items-center gap-2">
                <input
                    type="color"
                    id="primary700-picker"
                    name="primary700-picker"
                    className="h-12 w-12 rounded-md bg-white"
                    defaultValue={colors['primary-700']}
                    onBlur={handleColorChange('primary')}
                />
                <input
                    type="text"
                    id="primary700-input"
                    name="primary700-input"
                    className={`focus-visible:transparent current:text-primary-700 w-32 rounded-md bg-white text-neutral-600 transition-all ease-in hover:bg-neutral-50 hover:text-neutral-800 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2`}
                    value={colors['primary-700']}
                    onChange={handleColorChange('primary')}
                    onClick={(event) => event.target.select()}
                />
            </div>

            <button
                className={`text-neutral-600 hover:text-blue-700 ${
                    hasColorsChanged.primary ? 'visible' : 'invisible'
                }`}
                onClick={() => {
                    regenerateColorPalette('primary')
                }}
            >
                Refresh Primary Colors
            </button>

            <label className="mt-2 block text-xs font-medium leading-6 text-neutral-400">
                Secondary
            </label>

            <div className="flex items-center gap-2">
                <input
                    type="color"
                    id="secondary700-picker"
                    name="secondary700-picker"
                    className="h-12 w-12 rounded-md bg-white"
                    defaultValue={colors['secondary-700']}
                    onBlur={handleColorChange('secondary')}
                />
                <input
                    type="text"
                    id="secondary700-input"
                    name="secondary700-input"
                    className={`focus-visible:transparent current:text-primary-700 w-32 rounded-md bg-white text-neutral-600 transition-all ease-in hover:bg-neutral-50 hover:text-neutral-800 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2`}
                    value={colors['secondary-700']}
                    onChange={handleColorChange('secondary')}
                    onClick={(event) => event.target.select()}
                />
            </div>

            <button
                className={`text-neutral-600 hover:text-blue-700 ${
                    hasColorsChanged.secondary ? 'visible' : 'invisible'
                }`}
                onClick={() => {
                    regenerateColorPalette('secondary')
                }}
            >
                Refresh Secondary Colors
            </button>

            <div className="mb-2 mt-8">
                <label className="block text-base font-bold leading-6 text-blue-500 ">
                    Regenerate Site
                </label>
            </div>
            <button
                className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
                onClick={() => regenerateSite(company_id)}
            >
                Regenerate Site
            </button>
        </EditorDrawer>
    )
}
