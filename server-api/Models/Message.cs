using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_api.Models
{
public class Message
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Telefono { get; set; } = string.Empty;
    public string Servizio { get; set; } = string.Empty;
    public string? Messaggio { get; set; }
    public DateTime Data { get; set; } = DateTime.UtcNow;
}
}