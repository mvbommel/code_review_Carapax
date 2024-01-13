using Forgebase.Models;
using Microsoft.EntityFrameworkCore;

namespace Forgebase.Data
{
    public class ProjectTypeContext : DbContext
    {
        private readonly Context _context;

        public ProjectTypeContext(Context context)
        {
            _context = context;
        }

        public bool AddProjectType(ProjectType type)
        {
            try
            {
                _context.ProjectTypes.Add(type);
                _context.SaveChanges();
                return true;
            } catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeleteProjectType(int id)
        {
            try
            {
                ProjectType type = _context.ProjectTypes.FirstOrDefault(t => t.id== id);
                _context.Remove(type);
                _context.SaveChanges();
                return true;
            }catch(Exception ex)
            {
                return false;
            }
        }

        public List<ProjectType> GetAllProjectType()
        {
            return _context.ProjectTypes.ToList();
        }

        public ProjectType GetProjectTypeById(int id)
        {
            return _context.ProjectTypes.FirstOrDefault(t => t.id == id);
        }
    }
}
