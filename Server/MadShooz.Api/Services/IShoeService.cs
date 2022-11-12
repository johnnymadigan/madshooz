using System;
using MadShooz.Api.Models.Entities;

namespace MadShooz.Api.Services
{
	public interface IShoeService
	{
        Task<List<Shoe>> GetAllShoesAsync();
        Task<Shoe?> GetShoeAsync(string name);
        Task<bool> AddShoeAsync(Shoe shoe);
    }
}

