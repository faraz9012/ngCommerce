export interface CreateProduct {
    name: string;
    description: string;
    CategoryIds: number[];
    featuredImageId: number;
    thumbnailPictures: string;
    price: number;
    oldPrice: number;
    markAsNew?: boolean;
    markAsNewStartDateTimeUtc?: string;
    markAsNewEndDateTimeUtc?: string;
    showOnHomepage: boolean;
    includeInTopMenu: boolean;
    published: boolean;
}

export interface Product {
    id: number;
    name: string;
    src: string;
    description: string;
    category: string;
    featuredImageId: number;
    thumbnailPictures: string;
    price: number;
    oldPrice: number;
    markAsNew: boolean;
    markAsNewStartDateTimeUtc: string;
    markAsNewEndDateTimeUtc: string;
    showOnHomepage: boolean;
    includeInTopMenu: boolean;
    published: boolean;
}