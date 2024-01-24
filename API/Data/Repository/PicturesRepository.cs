using API.DTOs;
using API.Entities;
using API.Helpers;
using API.Interfaces;

namespace API.Data.Repository
{
    public class PicturesRepository : IPictureRepository
    {
        #region Fields
        private readonly DataContext _context;

        #endregion

        #region Ctor
        public PicturesRepository(DataContext context)
        {
            _context = context;
        }

        #endregion

        #region Common methods

        /// <summary>
        /// Get content type for photo by file extension
        /// </summary>
        /// <param name="fileExtension">The file extension</param>
        /// <returns>Photo's content type</returns>
        public string GetPhotoContentTypeByFileExtension(string fileExtension)
        {
            string contentType = null;

            switch (fileExtension.ToLower())
            {
                case ".bmp":
                    contentType = MimeTypes.ImageBmp;
                    break;
                case ".gif":
                    contentType = MimeTypes.ImageGif;
                    break;
                case ".jpeg":
                case ".jpg":
                case ".jpe":
                case ".jfif":
                case ".pjpeg":
                case ".pjp":
                    contentType = MimeTypes.ImageJpeg;
                    break;
                case ".webp":
                    contentType = MimeTypes.ImageWebp;
                    break;
                case ".png":
                    contentType = MimeTypes.ImagePng;
                    break;
                case ".svg":
                    contentType = MimeTypes.ImageSvg;
                    break;
                case ".tiff":
                case ".tif":
                    contentType = MimeTypes.ImageTiff;
                    break;
                default:
                    break;
            }

            return contentType;
        }

        #endregion

        #region Methods

        public virtual async Task<PictureDto> InsertPictureAsync(IFormFile formFile)
        {
            string defaultFileName = "";
            // Specify the path where you want to save the image
            string folderPath = "wwwroot/images";

            // Ensure the directory exists
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            var filePath = Path.Combine(folderPath, formFile.FileName);
            filePath = filePath.Replace("\\", "/");

            var imgExt = new List<string>
                {
                    ".bmp", ".gif", ".webp", ".jpeg", ".jpg", ".jpe", ".jfif", ".pjpeg", ".pjp", ".png", ".tiff", ".tif", ".svg"
                } as IReadOnlyCollection<string>;


            var fileName = formFile.FileName;
            if (string.IsNullOrEmpty(fileName) && !string.IsNullOrEmpty(defaultFileName))
                fileName = defaultFileName;

            var contentType = formFile.ContentType;

            var fileExtension = Path.GetExtension(filePath);
            if (!imgExt.Any(ext => ext.Equals(fileExtension, StringComparison.CurrentCultureIgnoreCase)))
                return null;

            //contentType is not always available 
            //that's why we manually update it here
            //https://mimetype.io/all-types/
            if (string.IsNullOrEmpty(contentType))
                contentType = GetPhotoContentTypeByFileExtension(fileExtension);

            // Make each picture unique so that it can be saved on server
            var pictureGuid = Guid.NewGuid(); 
            var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(fileName);
            
            var newFileName = $"{fileNameWithoutExtension}_{pictureGuid}{fileExtension}";
            var newFilePath = Path.Combine(folderPath, newFileName);
                newFilePath = newFilePath.Replace("\\", "/");

            // Save the file to the specified location
            using (var fileStream = new FileStream(newFilePath, FileMode.Create))
            {
                await formFile.CopyToAsync(fileStream);
            }

            // Replace the dafault location with server domain
            newFilePath = newFilePath.Replace("wwwroot/", "https://localhost:5001/");

            // Save image reference in the database
            var picture = new Picture
            {
                MimeType = contentType,
                SrcAttribute = newFilePath,
            };

            _context.Pictures.Add(picture);
            await _context.SaveChangesAsync();

            var pictureDto = new PictureDto
            {
                Id = picture.Id,
                MimeType = picture.MimeType,
                SrcAttribute = picture.SrcAttribute
            };

            return pictureDto;

        }
        public virtual async Task<PictureDto> GetPictureByIdAsync(int pictureId)
        {
            var picture = await _context.Pictures.FindAsync(pictureId);

            if (picture == null)
                return null;

            var pictureDto = new PictureDto
            {
                Id = picture.Id,
                MimeType = picture.MimeType,
                SrcAttribute = picture.SrcAttribute
            };
            return pictureDto;

        }
        public virtual async Task<bool> DeletePhotoAsync(int pictureId)
        {
            var picture = await _context.Pictures.FindAsync(pictureId);

            if (picture == null)
                return false;

            _context.Pictures.Remove(picture);
            await _context.SaveChangesAsync();

            return true;
        }

        #endregion
    }
}