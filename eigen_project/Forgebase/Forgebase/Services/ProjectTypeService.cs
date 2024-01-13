using Forgebase.Models;
using Forgebase.Services.Interfaces;
using Forgebase.Data;

namespace Forgebase.Services
{
    public class ProjectTypeService : IProjectTypeService
    {
        private readonly ProjectTypeContext _context;

        public ProjectTypeService(ProjectTypeContext context)
        {
            _context = context;
        }

        public bool AddProjectType(ProjectTypeCreateRequest request)
        {
            ProjectType type = mapProjectTypeCreateRequest(request);
            return _context.AddProjectType(type);
        }

        public bool DeleteProjectType(int id)
        {
            return _context.DeleteProjectType(id);
        }

        public List<ProjectType> GetAllProjectType()
        {
            return _context.GetAllProjectType();
        }

        public ProjectType GetProjectTypeById(int id)
        {
            return _context.GetProjectTypeById(id);
        }

        private ProjectType mapProjectTypeCreateRequest(ProjectTypeCreateRequest request)
        {
            return new ProjectType()
            {
                name = request.name
            };
        }
    }
}
