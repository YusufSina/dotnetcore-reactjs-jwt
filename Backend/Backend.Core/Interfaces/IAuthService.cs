using Backend.Core.Dtos.Requests;
using Backend.Core.Dtos.Responses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Interfaces
{
    public interface IAuthService
    {
        Task<BaseResponseDto<LoginResponseDto>> Login(LoginDto user);
        Task Logout();
    }
}
