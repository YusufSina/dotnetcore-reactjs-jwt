using Backend.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.Core.Dtos.Responses
{
    public class LoginResponseDto
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }

        public LoginResponseDto(User user, string token)
        {
            Id = user.Id; ;
            Email = user.Email;
            Token = token;
        }
    }
}
