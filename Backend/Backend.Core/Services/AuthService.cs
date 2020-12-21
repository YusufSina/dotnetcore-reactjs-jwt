using Backend.Core.Dtos.Requests;
using Backend.Core.Dtos.Responses;
using Backend.Core.Helpers;
using Backend.Core.Interfaces;
using Backend.Core.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Services
{
    public class AuthService : IAuthService
    {
        private readonly AppSettings _appSettings;
        private SignInManager<User> _signInManager;
        private UserManager<User> _userManager;

        public AuthService(IOptions<AppSettings> appSettings, SignInManager<User> signInManager, UserManager<User> userManager)
        {
            _appSettings = appSettings.Value;
            _signInManager = signInManager;
            _userManager = userManager;
        }

        public async Task<BaseResponseDto<LoginResponseDto>> Login(LoginDto user)
        {
            var response = new BaseResponseDto<LoginResponseDto>();

            var result = await _signInManager.PasswordSignInAsync(user.Email, user.Password, false, false);

            if (result.Succeeded)
            {
                var loggedInUser = await _userManager.FindByNameAsync(user.Email);

                var token = generateJwtToken(loggedInUser);

                 response.Data = new LoginResponseDto(loggedInUser, token);

                return response;
            }


            response.Errors.Add("NoEmailOrPass", "Email veya şifre hatalı");


            return response;


        }

        public async Task Logout()
        {
            throw new NotImplementedException();
        }

        private string generateJwtToken(User user)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
