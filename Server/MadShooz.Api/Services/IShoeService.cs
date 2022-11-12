using MadShooz.Api.Models.DTOs;

namespace MadShooz.Api.Services
{
	public interface IShoeService
	{
        /// <summary>
        /// Gets all shoes
        /// </summary>
        /// <returns>A list of shoes</returns>
        Task<List<ShoeDto>> GetAllShoesAsync();

        /// <summary>
        /// Gets a shoe via its name
        /// </summary>
        /// <param name="name">Name to query</param>
        /// <returns>The shoe if it exists, otherwise null</returns>
        Task<ShoeDto?> GetShoeAsync(string name);

        /// <summary>
        /// Adds a new shoe to the database
        /// </summary>
        /// <param name="shoeDto">Shoe to add</param>
        Task AddShoeAsync(ShoeDto shoeDto);
    }
}
