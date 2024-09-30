using AutoMapper;
using CondoPlanner.API.Infrastructure.Identity;
using CondoPlanner.Application.DTOs.Auth;

namespace CondoPlanner.API.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<RegisterUserDto, AppUser>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.ManagedCondominiums, opt => opt.Ignore());
        }
    }
}
