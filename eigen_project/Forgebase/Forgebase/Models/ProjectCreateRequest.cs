using System.ComponentModel.DataAnnotations;

namespace Forgebase.Models
{
    public class ProjectCreateRequest
    {
        public int id { get; set; }
        public string name { get; set; }
        public DateTime deadline { get; set; }
        public int steelType { get; set; }
        public int stage { get; set; }
        public int type { get; set; }
    }
}
