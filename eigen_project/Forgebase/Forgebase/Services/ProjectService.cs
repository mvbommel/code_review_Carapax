using Forgebase.Models;
using Forgebase.Services.Interfaces;
using Forgebase.Models;
using Forgebase.Data;

namespace Forgebase.Services
{
    public class ProjectService: IProjectService
    {
        private readonly ProjectContext _context;
        private readonly IProjectStageService _stage;
        private readonly IProjectTypeService _type;
        private readonly ISteelService _steel;

        public ProjectService(ProjectContext context, IProjectTypeService type, ISteelService steel, IProjectStageService stage)
        {
            _context = context;
            _type = type;
            _steel = steel;
            _stage = stage;
        }

        public List<Project> GetProjects()
        {
            return _context.GetProjects();
        }
        public int CreateProject( ProjectCreateRequest request)
        {
            Project project = MapRequestToProject(request);
            return _context.AddProject(project);
        }
        public Project EditProject(ProjectCreateRequest project)
        {
            Project p = MapRequestToProject(project);
            p  = _context.UpdateProject(p);

            if(p != null)
            {
                return p;
            }
            else
            {
                Console.WriteLine("return 500 error");
                return p;
            }
        }

        public bool DeleteProject(int projectId)
        {
            return _context.DeleteProject(projectId);
        }

        public Project ChangeProjectStage(int projectId, int stageId)
        {
            ProjectStage stage = _stage.getProjectStageById(stageId);
            return _context.UpdateStage(projectId, stage);
        }

        private Project MapRequestToProject(ProjectCreateRequest request)
        {
            return new Project()
            {
                id= request.id,
                name = request.name,
                deadline = request.deadline,
                steelType = _steel.GetSteelTypeById(request.steelType),
                stage = _stage.getProjectStageById(request.stage),
                type = _type.GetProjectTypeById(request.type)
            };
        }

        public Project GetProjectById(int id)
        {
            return _context.GetProjectById(id);
        }
    }
    
}
