using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.Services.CommonDTOs
{
    public class ResponseDto<T>
    {
        [JsonProperty("statusCode")]
        public HttpStatusCode? StatusCode { get; set; }

        [JsonProperty("success")]
        public bool Success { get; set; }

        [JsonProperty("message")]
        public string? Message { get; set; }

        [JsonProperty("data")]
        public T? Data { get; set; }
    }
}
