import { fetchDataForComponent } from '@/utils/fetchDataForComponent'
import { EditablePage } from './EditablePage'

/**
 * Component that fetches all the data for the page.
 *
 * When in edit mode this is the last component that will be rendered
 * on the server. Because of this all async data fetching must be done
 * here or above this component.
 *
 * Children of PageContentEditable are rendered on the client and are
 * able to use hooks and other client side only features.
 */
export async function PageContentEditable(props) {
    const { manifest, page_name } = props

    // fetch the company_id and nav/footer data
    const [company_data, nav_data, footer_data] = await Promise.all([
        await fetchDataForComponent({
            data_file: 'globals.json',
        }),
        await fetchDataForComponent({
            data_file: 'nav.json',
        }),
        await fetchDataForComponent({
            data_file: 'footer.json',
        }),
    ])

    // requests for all the component props
    const component_promises = []
    for (const item of manifest) {
        component_promises.push(
            fetchDataForComponent({
                data_file: item.data_file,
                pagename: props.page_name,
            })
        )
    }
    const components_props = await Promise.all(component_promises)

    // combine the manifest with the component props
    const components = manifest.map((item, index) => ({
        data_file: item.data_file,
        name: item.name,
        props: components_props[index],
    }))

    return (
        <EditablePage
            page_name={page_name}
            company_data={company_data}
            nav_data={nav_data}
            footer_data={footer_data}
            components={components}
        />
    )
}
