using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PictureController : BaseApiController
    {
        private readonly IPictureRepository _pictureRepository;
        #region Fields

        #endregion

        #region Ctor
        public PictureController(IPictureRepository pictureRepository)
        {
            _pictureRepository = pictureRepository;
        }

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

        #endregion

        #endregion

    }
}