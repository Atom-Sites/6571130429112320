'use client'
import { useEffect, useState } from 'react'
import { EditableComponent } from './EditableComponent'
import GlobalEditor from './GlobalEditor'

export function EditablePage(props) {
    const {
        page_name,
        company_data,
        nav_data,
        footer_data,
        components: input_components,
    } = props

    const { company_id } = company_data

    const [components, setComponents] = useState(input_components)
    const [is_saving, setIsSaving] = useState(false)
    const [has_updates, setHasUpdates] = useState(false)

    useEffect(() => {
        if (JSON.stringify(components) !== JSON.stringify(input_components)) {
            setHasUpdates(true)
        } else {
            setHasUpdates(false)
        }
    }, [components, input_components])

    /**
     * Moves a component up or down in the list of components
     * @param {Number} index - the index of the component to move
     * @param {1 | -1} aboveOrBelow - -1 to move the component up, 1 to move it down
     */
    const handleMoveComponent = (index, aboveOrBelow) => {
        // can't move the first component up
        if (index === 0 && aboveOrBelow === -1) {
            return
        }

        // can't move the last component down
        if (index === components.length - 1 && aboveOrBelow === 1) {
            return
        }

        // create a copy of the components array
        const newComponents = [...components]

        // remove the component at the index
        const component = newComponents.splice(index, 1)[0]

        // insert the component at the new index
        newComponents.splice(index + aboveOrBelow, 0, component)

        // update the state
        setComponents(newComponents)
    }

    // TODO
    const handleDeleteComponent = () => {
        alert('Not implemented yet')
    }

    // TODO
    const handleAddComponent = () => {
        alert('Not implemented yet')
    }

    const handleSaveManifest = async () => {
        setIsSaving(true)

        const manifest = {
            page_name,
            components: components.map((component) => ({
                slug: component.data_file.replace('.json', ''),
                component_key: component.name,
            })),
        }

        try {
            const response = await fetch(
                `https://us-central1-labs-ai-sites.cloudfunctions.net/updateComponentManifest`,
                // `http://localhost:3010/`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        company_id,
                        page_name,
                        data: manifest,
                    }),
                }
            )

            if (!response.ok) {
                return alert('Failed to save changes')
            }

            setHasUpdates(false)
        } catch (error) {
            console.error(error)
            alert('Failed to save changes')
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <>
            <GlobalEditor
                company_id={company_data.company_id}
                show_save={has_updates}
                is_saving={is_saving}
                onSave={handleSaveManifest}
            />

            <EditableComponent
                component={{
                    data_file: 'nav.json',
                    name: 'Nav',
                    props: nav_data,
                }}
                company_data={company_data}
            />

            {components.map((component, index) => (
                <EditableComponent
                    key={component.data_file}
                    index={index}
                    page_name={page_name}
                    component={component}
                    company_data={company_data}
                    handleMoveComponent={handleMoveComponent}
                />
            ))}

            <EditableComponent
                component={{
                    data_file: 'footer.json',
                    name: 'Footer',
                    props: footer_data,
                }}
                company_data={company_data}
            />
        </>
    )
}
