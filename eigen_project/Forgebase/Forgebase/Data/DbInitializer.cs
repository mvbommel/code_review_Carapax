using Forgebase.Models;

namespace Forgebase.Data
{
    public class DbInitializer
    {
        public static void Initialize(Context context)
        {
            context.Database.EnsureCreated();

            if (context.Projects.Any())
            {
                return;
            }

            //ProjectStages
            var projectStages = new ProjectStage[]{
                new ProjectStage{name="To Do"},
                new ProjectStage{name="In Forge"},
                new ProjectStage{name="forged"},
                new ProjectStage{name="grinding"},
                new ProjectStage{name="adding handle"},
                new ProjectStage{name="Finished"}
            };

            foreach (ProjectStage stage in projectStages)
            {
                context.ProjectStages.Add(stage);
            }
            context.SaveChanges();

            //ProjectTypes
            var projectTypes = new ProjectType[]{
                new ProjectType{name="knife"},
                new ProjectType{name="tongs"},
                new ProjectType{name="axe"},
                new ProjectType{name="tools"},
                new ProjectType{name="creative"}
            };

            foreach (ProjectType type in projectTypes)
            {
                context.ProjectTypes.Add(type);
            }
            context.SaveChanges();

            //SteelType
            var steelTypes = new SteelType[]{
                new SteelType{name="mild steel", stainless=false, hardenable=false},
                new SteelType{name="scrap", stainless=false, hardenable=false},
                new SteelType{name="1095", stainless=false, hardenable=true},
                new SteelType{name="L2", stainless=false, hardenable=true},
            };

            foreach (SteelType type in steelTypes)
            {
                context.SteelTypes.Add(type);
            }
            context.SaveChanges();

            //Projects
            var projects = new Project[]{
                new Project{name="Bolt tongs", steelType=steelTypes[0], stage=projectStages[1], type=projectTypes[1]}
            };

            foreach (Project prod in projects)
            {
                context.Projects.Add(prod);
            }
            context.SaveChanges();
        }
    }
}
