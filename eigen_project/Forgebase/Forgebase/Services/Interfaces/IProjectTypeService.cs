using Forgebase.Models;

namespace Forgebase.Services.Interfaces
{
    public interface IProjectTypeService
    {
        public List<ProjectType> GetAllProjectType();
        public bool AddProjectType(ProjectTypeCreateRequest request);
        public bool DeleteProjectType(int id);
        public ProjectType GetProjectTypeById(int id);
    }
}
