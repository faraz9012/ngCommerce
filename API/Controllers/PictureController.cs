using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PictureController : BaseApiController
    {
        #region Fields
        private readonly IPictureRepository _pictureRepository;

        #endregion

        #region Ctor
        public PictureController(IPictureRepository pictureRepository)
        {
            _pictureRepository = pictureRepository;
        }
        #endregion

        #region Methods

        //do not validate request token (XSRF)
        [HttpPost("upload-picture")]
        [IgnoreAntiforgeryToken]
        public virtual async Task<IActionResult> UploadAsync()
        {
            var httpPostedFile = Request.Form.Files.FirstOrDefault();

            if (httpPostedFile == null)
                return BadRequest("No file uploaded");

            var picture = await _pictureRepository.InsertPictureAsync(httpPostedFile);

            if (picture == null)
                return BadRequest("Failed to add picture");

            return Ok(picture);
        }

        [HttpDelete("delete-picture/{pictureId}")]
        public async Task<IActionResult> DeleteAsync(int pictureId)
        {
            var picture = await _pictureRepository.GetPictureByIdAsync(pictureId);

            if (picture == null) return NotFound("Picture not found");

            var result = await _pictureRepository.DeletePhotoAsync(pictureId);

            if (!result) return BadRequest("Failed to delete picture");

            return Ok();
        }

        #endregion
    }
}