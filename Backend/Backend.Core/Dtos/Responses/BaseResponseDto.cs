using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Backend.Core.Dtos.Responses
{
    public class BaseResponseDto<T>
    {
        public BaseResponseDto()
        {
            Errors = new Dictionary<String, String>();
        }

        public bool HasError => Errors.Any();
        public Dictionary<String, String> Errors { get; set; }
        public T Data { get; set; }
    }
}
