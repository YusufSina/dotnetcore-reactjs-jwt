using Backend.Core.Dtos.Requests;
using Backend.Core.Dtos.Responses;
using Backend.Core.Interfaces;
using Backend.Core.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> _userManager;

        public UserService(UserManager<User> userManager)
        {
            _userManager = userManager;
        }
        public async Task<BaseResponseDto<object>> CreateAsync(UserCreateDto user)
        {
            var response = new BaseResponseDto<object>();

            var result = await _userManager.CreateAsync(new User() {
                Email = user.Email,
                UserName = user.Email
            }, user.Password);

            if (result.Succeeded)
            {
                response.Data = new { 
                    Email = user.Email,            
                };


                return response;
            }

            foreach (var item in result.Errors)
            {
                response.Errors.Add(item.Code, item.Description);
            }

            return response;
        }

        public async Task<BaseResponseDto<object>> GetById(string id)
        {
            var response = new BaseResponseDto<object>();

            var user = await _userManager.FindByIdAsync(id);

            if (user == null)
            {
                response.Errors.Add("UserNotFound", "Kullanıcı bulunamadı.");
                return response;
            }

            response.Data = user;

            return response;
        }
    }
}
