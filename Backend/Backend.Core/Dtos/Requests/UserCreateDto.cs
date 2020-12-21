using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.Core.Dtos.Requests
{
    public class UserCreateDto
    {
        public string Email { get; set; }
        public string Password { get; set; }

    }
}
