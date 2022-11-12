using AutoMapper;
using MadShooz.Api.Data;
using MadShooz.Api.Models.DTOs;
using MadShooz.Api.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace MadShooz.Api.Services;

public class ShoesService : IShoeService
{
	private MadShoozContext _context;
    private IMapper _mapper;

    public ShoesService(
        MadShoozContext context,
        IMapper mapper)
	{
		_context = context;
        _mapper = mapper;
	}

    #region QUERIES
    public async Task<List<ShoeDto>> GetAllShoesAsync()
	{
        var result = await _context.Shoes.ToListAsync();
        var dtos = result.Select(s => _mapper.Map<ShoeDto>(s)).ToList();
        return dtos;
	}

    public async Task<ShoeDto?> GetShoeAsync(string name)
    {
        var result = await _context.Shoes.FirstOrDefaultAsync(s => s.Name.ToLower().Equals(name.ToLower()));
        var dto = _mapper.Map<ShoeDto>(result);
        return dto;
    }
    #endregion

    #region COMMANDS
    public async Task AddShoeAsync(ShoeDto shoeDto)
    {
        // fluent validation instead?
        if (String.IsNullOrWhiteSpace(shoeDto.Name))
            throw new BadHttpRequestException("'Name' property cannot be empty or whitespace");

        var shoe = _mapper.Map<Shoe>(shoeDto);
        await _context.Shoes.AddAsync(shoe);
        await _context.SaveChangesAsync();
    }
    #endregion
}
