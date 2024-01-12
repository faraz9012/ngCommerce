using API.DTOs;

namespace API.Interfaces
{
    public interface IPictureRepository
    {
        Task<PictureDto> InsertPictureAsync(IFormFile formFile);
        Task<bool> DeletePhotoAsync(int photoId);
        
    }
}