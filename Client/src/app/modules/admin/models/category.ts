export interface Category {
        id: number;
        name: string; 
        description: string; 
        parentCategoryId: number; 
        pictureId: number; 
        showOnHomepage: boolean; 
        includeInTopMenu: boolean; 
        published: boolean; 
        updatedOnUtc: string; 
}