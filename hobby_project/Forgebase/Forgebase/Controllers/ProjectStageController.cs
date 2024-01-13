using Forgebase.Models;
using Microsoft.AspNetCore.Mvc;
using Forgebase.Services.Interfaces;

namespace Forgebase.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProjectStageController : Controller
    {
        public IProjectStageService _stageService;

        public ProjectStageController(IProjectStageService stageService)
        {
            _stageService = stageService;
        }
        [HttpGet]
        public List<ProjectStage> getAllProjectStages()
        {
            return _stageService.getAllProjectStages();
        }
        [HttpPost]
        public bool addProjectStage(ProjectStageCreateRequest request)
        {
            return _stageService.addProjectStage(request);
        }
        [HttpDelete("{id}")]
        public bool deleteProjectStage(int id)
        {
            return _stageService.deleteProjectStage(id);
        }
    }
}
