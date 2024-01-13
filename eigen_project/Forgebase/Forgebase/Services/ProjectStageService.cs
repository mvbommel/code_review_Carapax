using Forgebase.Models;
using Forgebase.Services.Interfaces;
using Forgebase.Data;

namespace Forgebase.Services
{
    public class ProjectStageService : IProjectStageService
    {
        private readonly ProjectStageContext _context;

        public ProjectStageService(ProjectStageContext context)
        {
            _context = context; 
        }

        public bool addProjectStage(ProjectStageCreateRequest request)
        {
            ProjectStage stage = mapProjectStageCreateRequest(request);
            return _context.addProjectStage(stage);
        }

        public bool deleteProjectStage(int id)
        {
            return _context.deleteProjectStage(id);
        }

        public List<ProjectStage> getAllProjectStages()
        {
            return _context.getAllProjectStages();
        }

        public ProjectStage getProjectStageById(int id)
        {
            return _context.getProjectStageById(id);
        }

        private ProjectStage mapProjectStageCreateRequest(ProjectStageCreateRequest request)
        {
            return new ProjectStage()
            {
                name= request.name
            };
        }
    }
}
