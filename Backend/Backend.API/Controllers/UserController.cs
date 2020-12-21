using Backend.Core.Dtos.Requests;
using Backend.Core.Dtos.Responses;
using Backend.Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [Authorize]
        [HttpGet]
        public string GetAll()
        {
            return "Hello World!";
        }
        [HttpPost]
        public async Task<ActionResult<BaseResponseDto<object>>> Create([FromBody] UserCreateDto user)
        {
            var response = await _userService.CreateAsync(user);
           
            return response;
        }
    }
}
