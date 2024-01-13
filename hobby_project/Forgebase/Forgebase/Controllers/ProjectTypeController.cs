using Forgebase.Models;
using Microsoft.AspNetCore.Mvc;
using Forgebase.Services.Interfaces;

namespace Forgebase.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProjectTypeController : Controller
    {
        public IProjectTypeService _ProjectTypeService;

        public ProjectTypeController(IProjectTypeService projectTypeService)
        {
            _ProjectTypeService = projectTypeService;
        }

        [HttpGet]
        public List<ProjectType> GetAllProjectType()
        {
            return _ProjectTypeService.GetAllProjectType();
        }
        [HttpPost]
        public bool AddProjectType(ProjectTypeCreateRequest request)
        {
            return _ProjectTypeService.AddProjectType(request);
        }
        [HttpDelete("{id}")]
        public bool DeleteProjectType(int id)
        {
           return _ProjectTypeService.DeleteProjectType(id);
        }
    }
}
