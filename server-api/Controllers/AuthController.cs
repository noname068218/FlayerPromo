
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using server_api.Data;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using server_api.Models;

namespace server_api.Controllers
{
  
[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IConfiguration _configuration;

    public AuthController(AppDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(AdminLoginDto loginDto)
    {
        var user = await _context.AdminUsers.FirstOrDefaultAsync(u => u.Username == loginDto.Username);
        if (user == null || user.PasswordHash != loginDto.Password) // Пока простой пароль
            return Unauthorized();

        var token = GenerateJwtToken(user);
        return Ok(new { token });
    }

    private string GenerateJwtToken(AdminUser user)
    {
        var claims = new[] { new Claim(ClaimTypes.Name, user.Username) };
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Secret"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddHours(2),
            signingCredentials: creds
        );
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}

public record AdminLoginDto(string Username, string Password);
}
