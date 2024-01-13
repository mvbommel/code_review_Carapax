using Forgebase.Data;
using Forgebase.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

namespace Forgebase
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            services.AddDbContext<Context>(Options =>
            Options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddScoped<IProjectService, Services.ProjectService>();
            services.AddScoped<IProjectStageService, Services.ProjectStageService>();
            services.AddScoped<IProjectTypeService, Services.ProjectTypeService>();
            services.AddScoped<ISteelService, Services.SteelService>();
            services.AddTransient<ProjectContext>();
            services.AddTransient<ProjectStageContext>();
            services.AddTransient<ProjectTypeContext>();
            services.AddTransient<SteelContext>();
            services.AddControllers();

            services.AddSwaggerGen(conf =>
            {
                conf.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Forgebase API",
                    Version = "v1"
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(options =>
            {
                options.AllowAnyOrigin();
                options.AllowAnyMethod();
                options.AllowAnyHeader();
            });

            app.UseSwagger();

            app.UseSwaggerUI(conf =>
            {
                conf.SwaggerEndpoint("/swagger/v1/swagger.json", "Forgebase API v1");
                conf.RoutePrefix = string.Empty;
            });

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
