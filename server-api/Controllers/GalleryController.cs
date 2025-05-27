using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using server_api.Data;

namespace server_api.Controllers
{
    //
        [ApiController]
        [Route("api/[controller]")]
        public class GalleryController : ControllerBase
        {
            private readonly AppDbContext _context;
            private readonly IWebHostEnvironment _env;

            public GalleryController(AppDbContext context, IWebHostEnvironment env)
            {
                _context = context;
                _env = env;
            }

            [HttpGet]
            public async Task<IActionResult> GetAll()
            {
                var images = await _context.GalleryImages.OrderByDescending(g => g.Data).ToListAsync();
                return Ok(images);
            }

            [Authorize]
            [HttpPost("upload")]
            public async Task<IActionResult> Upload([FromForm] IFormFile file, [FromForm] string title)
            {
                if (file == null || file.Length == 0)
                    return BadRequest("Nessun file");

                var fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
                var savePath = Path.Combine(_env.ContentRootPath, "Uploads", "Gallery", fileName);

                using (var stream = new FileStream(savePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                var image = new GalleryImage
                {
                    FileName = fileName,
                    Title = title
                };

                _context.GalleryImages.Add(image);
                await _context.SaveChangesAsync();

                return Ok(image);
            }
        }
    }
