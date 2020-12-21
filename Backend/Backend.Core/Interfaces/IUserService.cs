using Backend.Core.Dtos.Requests;
using Backend.Core.Dtos.Responses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Interfaces
{
    public interface IUserService
    {
        Task<BaseResponseDto<object>> CreateAsync(UserCreateDto user);
        Task<BaseResponseDto<object>> GetById(string id);
    }
}
