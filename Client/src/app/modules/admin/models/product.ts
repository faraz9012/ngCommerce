export interface CreateProduct {
    name: string
    description: string
    category: string
    featuredImageId: number
    thumbnailPictures: string
    price: number
    oldPrice: number
    markAsNew: boolean
    showOnHomepage: boolean
    includeInTopMenu: boolean
    published: boolean
}