using Forgebase.Models;

namespace Forgebase.Services.Interfaces
{
    public interface IProjectStageService
    {
        public List<ProjectStage> getAllProjectStages();
        public bool addProjectStage(ProjectStageCreateRequest request);
        public bool deleteProjectStage(int id);
        public ProjectStage getProjectStageById(int id);
    }
}
