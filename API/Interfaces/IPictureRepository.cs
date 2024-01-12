using API.DTOs;

namespace API.Interfaces
{
    public interface IPictureRepository
    {
        Task<PictureDto> InsertPictureAsync(IFormFile formFile);
        Task<PictureDto> GetPictureByIdAsync(int photoId);
        Task<bool> DeletePhotoAsync(int photoId);
        
    }
}