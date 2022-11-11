using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MadShooz.Api.Data;
using MadShooz.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace MadShooz.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ShoesController : ControllerBase
{
    private MadShoozContext _context;

    public ShoesController(MadShoozContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<List<Shoe>> GetAllShoes()
    {
        // QUERY
        var result = _context.Shoes.ToList();
        if (result == null) result = new List<Shoe>();
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> AddShoe(Shoe shoe, CancellationToken cancellationToken)
    {
        // COMMAND
        await _context.Shoes.AddAsync(shoe, cancellationToken);
        await _context.SaveChangesAsync();
        return Ok();
    }
}

