﻿
using AutoMapper;
using CondoPlanner.API.Infrastructure.Identity;
using CondoPlanner.Application.DTOs.Auth;
using CondoPlanner.Application.DTOs.Condominium;
using CondoPlanner.Domain.Entities;

namespace CondoPlanner.Application.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<RegisterUserDto, AppUser>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.ManagedCondominiums, opt => opt.Ignore());

            CreateMap<CondominiumCreateDto, Condominium>()
           .ForMember(dest => dest.Administrator, opt => opt.Ignore())
           .ForMember(dest => dest.AdministratorId, opt => opt.MapFrom(src => src.IdAdministrator));

            CreateMap<Condominium, CondominiumDto>();
        }
    }
}