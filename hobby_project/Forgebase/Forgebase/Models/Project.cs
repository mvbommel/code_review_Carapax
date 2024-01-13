using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Forgebase.Models
{
    public class Project
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        [Required]
        public string name { get; set; }
        public DateTime deadline { get; set; }
       
        public SteelType steelType { get; set; }
        [Required]
        public ProjectStage stage { get; set; }
        [Required]
        public ProjectType type { get; set; }
    }
}
