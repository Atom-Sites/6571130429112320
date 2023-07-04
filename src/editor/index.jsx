import component_registry from '@/components/component_registry'
import layout_manifest from '../../app/layout-manifest.json'
import { PageContent } from './PageContent'
import { PageContentEditable } from './PageContentEditable'

const nav = layout_manifest.components.find((v) => v.component_key === 'Nav')
const footer = layout_manifest.components.find(
    (v) => v.component_key === 'Footer'
)

const Nav = component_registry[nav['component_key']]
const Footer = component_registry[footer['component_key']]

export async function Page(props) {
    const { is_edit_mode } = props

    if (is_edit_mode) {
        return (
            <PageContentEditable
                page_name={props.page_name}
                manifest={props.manifest}
            />
        )
    } else {
        // render page normally
        return (
            <PageContent
                page_name={props.page_name}
                manifest={props.manifest}
                nav={Nav}
                footer={Footer}
            />
        )
    }
}
