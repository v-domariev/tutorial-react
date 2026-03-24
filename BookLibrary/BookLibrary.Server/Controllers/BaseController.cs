using Microsoft.AspNetCore.Mvc;

namespace BookLibrary.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public abstract class BaseController : ControllerBase
    {
        // Subclasses provide their own description text.
        protected abstract string EnpointDescription { get; }

        // GET api/{controller}/EnpointDescription
        [HttpGet("EnpointDescription")]
        public ActionResult<string> GetEnpointDescription() => Ok(EnpointDescription);
    }
}
