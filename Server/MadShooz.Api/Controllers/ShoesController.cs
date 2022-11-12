using MadShooz.Api.Models.DTOs;
using MadShooz.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace MadShooz.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ShoesController : ControllerBase
{
    private IShoeService _shoeService;

    public ShoesController(IShoeService shoeService)
    {
        _shoeService = shoeService;
    }

    #region GET
    [HttpGet] // GET api/shoes
    public async Task<ActionResult<List<ShoeDto>>> GetAllShoesAsync()
    {
        var result = await _shoeService.GetAllShoesAsync();
        if (result.Count == 0) return NoContent();
        return Ok(result);
    }

    [HttpGet("{name}")] // GET api/shoes/{name}
    public async Task<ActionResult<List<ShoeDto>>> GetShoeAsync(string name)
    {
        var result = await _shoeService.GetShoeAsync(name);
        if (result == null) return NotFound();
        return Ok(result);
    }
    #endregion

    #region POST
    [HttpPost] // POST api/shoes
    public async Task<IActionResult> AddShoeAsync(ShoeDto shoeDto)
    {
        try
        {
            await _shoeService.AddShoeAsync(shoeDto);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
        return Ok();
    }
    #endregion
}
