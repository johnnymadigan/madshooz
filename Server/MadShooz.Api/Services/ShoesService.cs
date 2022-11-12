using System;
using MadShooz.Api.Data;
using MadShooz.Api.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace MadShooz.Api.Services;

public class ShoesService : IShoeService
{
	private MadShoozContext _context;

	public ShoesService(MadShoozContext context)
	{
		_context = context;
	}

    #region QUERIES
    public async Task<List<Shoe>> GetAllShoesAsync()
	{
        var result = await _context.Shoes.ToListAsync();
        // change return to DTO
        // auto map DTO
        return result;
	}

    public async Task<Shoe?> GetShoeAsync(string name)
    {
        var result = await _context.Shoes.FirstOrDefaultAsync(s => s.Name.ToLower().Equals(name.ToLower()));
        // change return to DTO
        // auto map DTO
        return result;
    }
    #endregion

    #region COMMANDS
    public async Task<bool> AddShoeAsync(Shoe shoe)
    {
        bool opSuccessful = true;

        if (shoe.Name == "yeezy") return false;

        // change param to DTO
        // auto map DTO
        // fluent validation?
        await _context.Shoes.AddAsync(shoe);
        await _context.SaveChangesAsync();

        return opSuccessful;
    }
    #endregion
}
