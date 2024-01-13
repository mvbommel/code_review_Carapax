using Forgebase.Models;

namespace Forgebase.Services.Interfaces
{
    public interface IProjectService
    {
        List<Project> GetProjects();
        Project GetProjectById(int id);
        int CreateProject(ProjectCreateRequest request);
        Project EditProject(ProjectCreateRequest project);
        bool DeleteProject(int projectId);
        Project ChangeProjectStage(int projectId, int stageId);
    }
}
