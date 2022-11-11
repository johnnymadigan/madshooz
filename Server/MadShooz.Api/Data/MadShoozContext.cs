using System;
using MadShooz.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace MadShooz.Api.Data;

public class MadShoozContext : DbContext
{
	public DbSet<Shoe> Shoes { get; set; }

	public MadShoozContext(DbContextOptions<MadShoozContext> options) : base(options) {}
}
