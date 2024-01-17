export interface Category {
        Id: number;
        Name: string; 
        Description: string; 
        ParentCategoryId: number; 
        PictureId: number; 
        ShowOnHomepage: boolean; 
        IncludeInTopMenu: boolean; 
        Published: boolean; 
        UpdatedOnUtc: string; 
}