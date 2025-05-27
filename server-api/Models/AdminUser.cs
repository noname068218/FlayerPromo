using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_api.Models
{
    public class AdminUser
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
    }
}