using CondoPlanner.Application.Services.CommonDTOs.CommomArea;
using CondoPlanner.Application.Services.UserServices.DTOs;
using CondoPlanner.Domain.Entities;

namespace CondoPlanner.Application.Services.CondominiumServices.DTOs
{
    public class CondominiumDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public ICollection<CommonAreaDto>? CommonAreas { get; }
        public UserDto Administrator { get; set; }
        public List<UserDto> Residents { get; set; }
    }
}
