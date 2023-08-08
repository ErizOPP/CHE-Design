import { Client } from '@notionhq/client'

const DATABASE_ID = 'c190e15081694b3b8aa59f9543b0f32b'

const notion = new Client({
    auth: import.meta.env.NOTION_TOKEN
})

export const getPortfolios = async ({ filterBy } = {}) => {
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
    return results.map(page => {
        const { properties } = page
        
        const { slug, title, img, description, category, url } = properties
        return {
            id: slug.rich_text[0].plain_text,
            title: title.title[0].plain_text,
            img: img.files[0].file.url,
            description: description.rich_text[0].plain_text,
            category: properties.category.multi_select.map(category => category.name),
        }})
}