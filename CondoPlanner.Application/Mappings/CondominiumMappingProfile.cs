using AutoMapper;
using CondoPlanner.Application.Services.CondominiumServices.DTOs;
using CondoPlanner.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CondoPlanner.Application.Mappings
{
    public class CondominiumMappingProfile : Profile
    {
        public CondominiumMappingProfile() 
        {
            CreateMap<Condominium, CondominiumDto>()
                .ForMember(dest => dest.Administrator, opt => opt.Ignore())
                .ForMember(dest => dest.Residents, opt => opt.Ignore());

            CreateMap<CondominiumCreateDto, Condominium>();
        }
    }
}
