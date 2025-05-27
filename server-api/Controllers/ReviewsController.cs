
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server_api.Data;
using server_api.Models;

namespace server_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ReviewsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll() =>
            Ok(await _context.Reviews.ToListAsync());

        [HttpPost]
        public async Task<IActionResult> Create(Review review)
        {
            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAll), review);
        }
    }
}