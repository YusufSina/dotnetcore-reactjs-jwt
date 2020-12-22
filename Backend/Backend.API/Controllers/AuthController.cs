using Backend.Core.Dtos.Requests;
using Backend.Core.Dtos.Responses;
using Backend.Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<BaseResponseDto<LoginResponseDto>>> Login([FromBody]LoginDto model)
        {
          var response = await _authService.Login(model);

            return response;
        } 

        [Authorize]
        [HttpGet("logout")]
        public async Task<ActionResult> Logout()
        {
            await _authService.Logout();

            return Ok();
        }
    }
}
