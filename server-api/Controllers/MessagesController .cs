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
using server_api.Models;

namespace server_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessagesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MessagesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Create(Message message)
        {
            _context.Messages.Add(message);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Create), message);
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var messages = await _context.Messages
            .OrderByDescending(m => m.Data)
            .ToListAsync();

            return Ok(messages);
        }

        [Authorize]
[HttpDelete("{id}")]
public async Task<IActionResult> Delete(int id)
{
    var message = await _context.Messages.FindAsync(id);
    if (message == null)
        return NotFound();

    _context.Messages.Remove(message);
    await _context.SaveChangesAsync();
    return NoContent();
}

    }

}