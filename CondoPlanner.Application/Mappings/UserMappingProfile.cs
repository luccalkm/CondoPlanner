using AutoMapper;
using CondoPlanner.API.Infrastructure.Identity;
using CondoPlanner.Application.Services.AccountServices.DTOs;
using CondoPlanner.Domain.Entities;

public class UserMappingProfile : Profile
{
    public UserMappingProfile()
    {
        CreateMap<AppUser, RegisterUserDto>()
            .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
            .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => src.FullName))
            .ForMember(dest => dest.IsAdmin, opt => opt.MapFrom(src => src.IsAdmin))
            .ForMember(dest => dest.UnitNumber, opt => opt.MapFrom(src => src.UnitNumber));

        //CreateMap<CreateOrUpdateUserDto, AppUser>()
        //    .ForMember(dest => dest.Id, opt => opt.Ignore())
        //    .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
        //    .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => src.FullName))
        //    .ForMember(dest => dest.IsAdmin, opt => opt.MapFrom(src => src.IsAdmin))
        //    .ForMember(dest => dest.UnitNumber, opt => opt.MapFrom(src => src.UnitNumber));
    }
}