using Forgebase.Models;
using Microsoft.EntityFrameworkCore;

namespace Forgebase.Data
{
    public class ProjectContext : DbContext
    {
        private readonly Context _context;

        public ProjectContext(Context context)
        {
            _context = context;
        }


        public List<Project> GetProjects()
        {
            List<Project> projects = _context.Projects.Include(p => p.steelType).Include(p =>p.type).Include(p => p.stage).ToList();
            return projects;
        }

        public Project GetProjectById(int id)
        {
            return _context.Projects.Include(p => p.steelType).Include(p => p.type).Include(p => p.stage).FirstOrDefault(p => p.id == id);
        }

        public Project UpdateStage(int projectId, ProjectStage stage)
        {
            Project project;
            try
            {
                project = _context.Projects.Include(p => p.steelType).Include(p => p.type).FirstOrDefault(p => p.id== projectId);
            }
            catch(Exception ex)
            {
                return new Project();
            }
            project.stage = stage;
            _context.SaveChanges();
            return project;
        }

        public int AddProject(Project project)
        {
            _context.Projects.Add(project);
            _context.SaveChanges();
            return project.id;
        }

        public Project UpdateProject(Project project)
        {
            Project DBProject;
            try
            {
                DBProject = _context.Projects.FirstOrDefault(p =>p.id==project.id);
                DBProject.name = project.name;
                DBProject.deadline = project.deadline;
                DBProject.stage = project.stage;
                DBProject.type = project.type;
                DBProject.steelType = project.steelType;
                _context.SaveChanges();
            }
            catch(Exception ex)
            {
                Console.WriteLine("error with DB");
                DBProject = null;
            }


            return DBProject;
        }

        public bool DeleteProject(int projectId)
        {
            try
            {
                Project project = _context.Projects.FirstOrDefault(p => p.id == projectId);
                _context.Projects.Remove(project);
                _context.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
        }

    }
}
