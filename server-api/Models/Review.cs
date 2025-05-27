using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_api.Models
{
    public class Review
    {
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string Commento { get; set; } = string.Empty;
    public int Valutazione { get; set; }
    public string? Foto { get; set; }
    }
}