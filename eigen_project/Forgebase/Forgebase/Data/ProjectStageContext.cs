using Forgebase.Models;

namespace Forgebase.Data
{
    public class ProjectStageContext
    {
        private readonly Context _context;

        public ProjectStageContext(Context context)
        {
            _context = context;
        }

        public bool addProjectStage(ProjectStage stage)
        {
            try
            {
                _context.ProjectStages.Add(stage);
                _context.SaveChanges();
                return true;
            } catch
            {
                return false;
            }
        }

        public bool deleteProjectStage(int id)
        {
            try
            {
                ProjectStage stage = _context.ProjectStages.FirstOrDefault(s => s.id == id);
                _context.ProjectStages.Remove(stage);
                _context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<ProjectStage> getAllProjectStages()
        {
            List<ProjectStage> projectStages = _context.ProjectStages.ToList();
            return projectStages;
        }

        public ProjectStage getProjectStageById(int id) 
        {
            ProjectStage stage = _context.ProjectStages.FirstOrDefault(s => s.id == id);
            return stage;
        }
    }
}
