using AutoMapper;
using MadShooz.Api.Models.DTOs;
using MadShooz.Api.Models.Entities;

namespace MadShooz.Api.Profiles;

public class AutoMapperProfile : Profile
{
	public AutoMapperProfile()
	{
		CreateMap<Shoe, ShoeDto>().ReverseMap();
	}
}
