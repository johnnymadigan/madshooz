using MadShooz.Api.Data;
using MadShooz.Api.Services;
using Microsoft.EntityFrameworkCore;

// SERVICES: Add services to the dependency injection container.
var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    builder.Services.AddScoped<IShoeService, ShoesService>();

    // Scoped under the hood (each HTTP request gets its own UoW)
    builder.Services.AddDbContext<MadShoozContext>(
        options => options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
}

// PIPELINE: Configure the HTTP request pipeline.
var app = builder.Build();
{
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();
    app.UseAuthorization();
    app.MapControllers();
    app.Run();
}
