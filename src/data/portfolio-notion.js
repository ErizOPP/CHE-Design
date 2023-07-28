import { Client } from '@notionhq/client'

const DATABASE_ID = 'dbc937e6b46844009dc053d8efd02dcf'

const notion = new Client({
    auth: import.meta.env.NOTION_TOKEN
})

export const getPortfolio = async ({ filterBy } = {}) => {
    const query = { database_id: DATABASE_ID}

    if (filterBy) {
        query.filter = {
        property: 'slug',
        rich_text: {
            equals: filterBy
            }
        }
    }
    const { results } = await notion.databases.query(query)
    console.log(results);
    return results.map(page => {
        const { properties } = page
        const { slug, title } = properties;
        console.log(results)
        return {
            id: slug.rich_text[0].plain_text,
            title: title.title[0].plain_text,
        }
        
    })
}
